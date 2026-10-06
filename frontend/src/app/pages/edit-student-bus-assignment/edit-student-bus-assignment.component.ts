import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { StudentBusAssignmentService } from '../../services/student-bus-assignment.service';
import { StudentService } from '../../services/student.service';
import { BusService } from '../../services/bus.service';
import { RouteService } from '../../services/route.service';
import { AlertService } from '../../services/alert.service';

import { StudentBusAssignment } from '../../models/student-bus-assignment';
import { Student } from '../../models/student';
import { Bus } from '../../models/bus';
import { Route } from '../../models/route';

@Component({
  selector: 'app-edit-student-bus-assignment',
  templateUrl: './edit-student-bus-assignment.component.html',
  styleUrls: ['./edit-student-bus-assignment.component.css']
})
export class EditStudentBusAssignmentComponent implements OnInit {

  assignmentForm!: FormGroup;
  assignmentId!: number;

  students: Student[] = [];
  buses: Bus[] = [];
  routes: Route[] = [];

  constructor(
    private fb: FormBuilder,
    private assignmentService: StudentBusAssignmentService,
    private studentService: StudentService,
    private busService: BusService,
    private routeService: RouteService,
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertService
  ) { }

  ngOnInit(): void {

    this.assignmentId = Number(this.route.snapshot.paramMap.get('id'));

    if (!this.assignmentId) {
      this.alert.error('Invalid Assignment ID');
      this.router.navigate(['/student-bus-assignment']);
      return;
    }

    this.assignmentForm = this.fb.group({

      studentId: ['', [Validators.required, Validators.min(1)]],

      busId: ['', [Validators.required, Validators.min(1)]],

      routeId: ['', [Validators.required, Validators.min(1)]],

      assignedDate: ['', Validators.required],

      isActive: [true]

    });

    this.loadStudents();
    this.loadBuses();
    this.loadRoutes();
    this.loadAssignment();

  }

  loadStudents(): void {

    this.studentService.getAllStudents().subscribe({

      next: (data) => this.students = data,

      error: (error) => {

        console.error(error);

        this.alert.error('Failed to Load Students');

      }

    });

  }

  loadBuses(): void {

    this.busService.getAllBuses().subscribe({

      next: (data) => this.buses = data,

      error: (error) => {

        console.error(error);

        this.alert.error('Failed to Load Buses');

      }

    });

  }

  loadRoutes(): void {

    this.routeService.getAllRoutes().subscribe({

      next: (data) => this.routes = data,

      error: (error) => {

        console.error(error);

        this.alert.error('Failed to Load Routes');

      }

    });

  }

  loadAssignment(): void {

    this.assignmentService.getAssignmentById(this.assignmentId).subscribe({

      next: (assignment: StudentBusAssignment) => {

        this.assignmentForm.patchValue({

          studentId: assignment.studentId,

          busId: assignment.busId,

          routeId: assignment.routeId,

          assignedDate: assignment.assignedDate,

          isActive: assignment.isActive

        });

      },

      error: (error) => {

        console.error(error);

        this.alert.error('Failed to Load Assignment');

        this.router.navigate(['/student-bus-assignment']);

      }

    });

  }

  updateAssignment(): void {

    if (this.assignmentForm.invalid) {

      this.assignmentForm.markAllAsTouched();

      this.alert.warning('Please fill all required fields');

      return;

    }

    this.assignmentService.updateAssignment(
      this.assignmentId,
      this.assignmentForm.value
    ).subscribe({

      next: () => {

        this.alert.success('Assignment Updated Successfully');

        setTimeout(() => {

          this.router.navigate(['/student-bus-assignment']);

        }, 1000);

      },

      error: (error) => {

        console.error(error);

        if (error.status === 400) {

          this.alert.error('Invalid Assignment Details');

        } else if (error.status === 404) {

          this.alert.error('Assignment Not Found');

        } else if (error.status === 500) {

          this.alert.error('Internal Server Error');

        } else {

          this.alert.error('Failed to Update Assignment');

        }

      }

    });

  }

  get f() {

    return this.assignmentForm.controls;

  }

}