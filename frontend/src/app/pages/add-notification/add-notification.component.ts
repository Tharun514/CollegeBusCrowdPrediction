import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NotificationService } from '../../services/notification.service';
import { StudentService } from '../../services/student.service';
import { BusService } from '../../services/bus.service';

import { Student } from '../../models/student';
import { Bus } from '../../models/bus';

import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.css']
})
export class AddNotificationComponent implements OnInit {

  notificationForm!: FormGroup;

  students: Student[] = [];
  buses: Bus[] = [];

  recipientType = 'ALL';

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private studentService: StudentService,
    private busService: BusService,
    private router: Router,
    private alert: AlertService
  ) { }

  ngOnInit(): void {

    this.notificationForm = this.fb.group({

      studentId: [''],

      busId: [''],

      title: ['', Validators.required],

      message: ['', Validators.required],

      type: ['GENERAL', Validators.required]

    });

    this.loadStudents();

    this.loadBuses();

  }

  loadStudents() {

    this.studentService.getAllStudents().subscribe({

      next: data => this.students = data

    });

  }

  loadBuses() {

    this.busService.getAllBuses().subscribe({

      next: data => this.buses = data

    });

  }

  recipientChanged(type: string) {

    this.recipientType = type;

    this.notificationForm.patchValue({

      studentId: '',

      busId: ''

    });

    this.notificationForm.get('studentId')?.clearValidators();

    this.notificationForm.get('busId')?.clearValidators();

    if (type === 'STUDENT') {

      this.notificationForm.get('studentId')?.setValidators(Validators.required);

    }

    if (type === 'BUS') {

      this.notificationForm.get('busId')?.setValidators(Validators.required);

    }

    this.notificationForm.get('studentId')?.updateValueAndValidity();

    this.notificationForm.get('busId')?.updateValueAndValidity();

  }
  async saveNotification() {

    if (this.notificationForm.invalid) {

      this.notificationForm.markAllAsTouched();

      return;

    }

    const confirmed = await this.alert.confirm(

      'Send Notification',

      'Are you sure you want to send this notification?'

    );

    if (!confirmed) {

      return;

    }

    const notification: any = {

      ...this.notificationForm.value,

      status: 'PENDING',

      isRead: false,

      createdAt: new Date().toISOString()

    };

    if (this.recipientType === 'ALL') {

      notification.studentId = null;
      notification.busId = null;

    }

    if (this.recipientType === 'STUDENT') {

      notification.busId = null;

    }

    if (this.recipientType === 'BUS') {

      notification.studentId = null;

    }

    this.notificationService.saveNotification(notification).subscribe({

      next: () => {

        this.alert.success('Notification Sent Successfully');

        this.router.navigate(['/notifications']);

      },

      error: () => {

        this.alert.error('Failed to Send Notification');

      }

    });

  }
}