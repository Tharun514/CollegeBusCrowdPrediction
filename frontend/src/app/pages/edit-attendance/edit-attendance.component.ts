import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AttendanceService } from '../../services/attendance.service';
import { Attendance } from '../../models/attendance';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-edit-attendance',
  templateUrl: './edit-attendance.component.html',
  styleUrls: ['./edit-attendance.component.css']
})
export class EditAttendanceComponent implements OnInit {

  attendanceForm!: FormGroup;
  attendanceId!: number;

  constructor(
    private fb: FormBuilder,
    private attendanceService: AttendanceService,
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertService
  ) { }

  ngOnInit(): void {

    this.attendanceId = Number(this.route.snapshot.paramMap.get('id'));

    if (!this.attendanceId) {
      this.alert.error('Invalid Attendance ID');
      this.router.navigate(['/attendance']);
      return;
    }

    this.attendanceForm = this.fb.group({

      studentId: ['', [
        Validators.required,
        Validators.min(1)
      ]],

      busId: ['', [
        Validators.required,
        Validators.min(1)
      ]],

      scanTime: ['', Validators.required],

      scanType: ['', Validators.required]

    });

    this.getAttendanceById();

  }

  getAttendanceById(): void {

    this.attendanceService.getAttendanceById(this.attendanceId).subscribe({

      next: (data: Attendance) => {

        console.log(data);

        this.attendanceForm.patchValue({

          studentId: data.studentId,
          busId: data.busId,
          scanTime: data.scanTime,
          scanType: data.scanType

        });

      },

      error: (error) => {

        console.error(error);

        this.alert.error('Failed to Load Attendance');

        this.router.navigate(['/attendance']);

      }

    });

  }

  updateAttendance(): void {

    if (this.attendanceForm.invalid) {

      this.attendanceForm.markAllAsTouched();

      this.alert.warning('Please fill all required fields');

      return;

    }

    this.attendanceService.updateAttendance(
      this.attendanceId,
      this.attendanceForm.value
    ).subscribe({

      next: () => {

        this.alert.success('Attendance Updated Successfully');

        setTimeout(() => {

          this.router.navigate(['/attendance']);

        }, 1000);

      },

      error: (error) => {

        console.error(error);

        if (error.status === 400) {

          this.alert.error('Invalid Attendance Details');

        } else if (error.status === 404) {

          this.alert.error('Attendance Not Found');

        } else if (error.status === 500) {

          this.alert.error('Internal Server Error');

        } else {

          this.alert.error('Failed to Update Attendance');

        }

      }

    });

  }

  get f() {
    return this.attendanceForm.controls;
  }

}