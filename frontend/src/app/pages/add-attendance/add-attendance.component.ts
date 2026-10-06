import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AttendanceService } from 'src/app/services/attendance.service';
import { StudentService } from 'src/app/services/student.service';
import { BusService } from 'src/app/services/bus.service';

import { Student } from 'src/app/models/student';
import { Bus } from 'src/app/models/bus';
import { StudentBusAssignmentService } from 'src/app/services/student-bus-assignment.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-add-attendance',
  templateUrl: './add-attendance.component.html',
  styleUrls: ['./add-attendance.component.css']
})
export class AddAttendanceComponent implements OnInit {

  attendanceForm!: FormGroup;

  students: Student[] = [];
  buses: Bus[] = [];

  constructor(
    private fb: FormBuilder,
    private attendanceService: AttendanceService,
    private studentService: StudentService,
    private studentBusAssignmentService: StudentBusAssignmentService,
    private busService: BusService,
    private router: Router,
    private alert: AlertService
  ) {

    this.attendanceForm = this.fb.group({

      studentId: ['', Validators.required],

      busId: ['', Validators.required],

      scanTime: ['', Validators.required],

      scanType: ['', Validators.required]

    });

  }

  ngOnInit(): void {

    this.loadStudents();

    this.loadBuses();

  }

  loadStudents(): void {

    this.studentService.getAllStudents().subscribe({

      next: (data) => {

        this.students = data;

      },

      error: (err) => {

        console.log(err);

      }

    });

  }

  loadBuses(): void {

    this.busService.getAllBuses().subscribe({

      next: (data) => {

        this.buses = data;

      },

      error: (err) => {

        console.log(err);

      }

    });

  }

  saveAttendance() {

    if (this.attendanceForm.invalid) {

      this.alert.warning('Please fill all fields');

      return;

    }

    this.attendanceService
      .saveAttendance(this.attendanceForm.value)
      .subscribe({

        next: () => {

          this.alert.success('Attendance Added Successfully');

          this.router.navigate(['/attendance']);

        },

        error: (err) => {

          console.error(err);

          this.alert.error('Failed to Add Attendance');

        }

      });

  }
  onStudentChange(): void {

    const studentId = this.attendanceForm.get('studentId')?.value;

    if (!studentId) {
      return;
    }

    this.studentBusAssignmentService
      .getAssignmentByStudentId(studentId)
      .subscribe({

        next: (assignment) => {

          this.attendanceForm.patchValue({

            busId: assignment.busId

          });

        },

        error: (err) => {

          console.log(err);

        }

      });

  }

}