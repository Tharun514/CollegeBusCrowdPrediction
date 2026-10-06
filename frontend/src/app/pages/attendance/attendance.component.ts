import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Attendance } from '../../models/attendance';
import { AttendanceService } from '../../services/attendance.service';
import { ToastService } from '../../services/toast.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  attendances: Attendance[] = [];
  allAttendances: Attendance[] = [];
  searchText: string = '';

  constructor(
    private attendanceService: AttendanceService,
    private router: Router,
    private toast: ToastService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {

    this.loadAttendances();

  }

  loadAttendances(): void {

    this.attendanceService.getAllAttendances().subscribe({

      next: (data) => {

        console.log(data);

        this.allAttendances = data;
        this.filterAttendances();

      },

      error: (error) => {

        console.log(error);

        this.toast.error('Failed to Load Attendance');

      }

    });

  }

  editAttendance(id: number): void {

    this.router.navigate(['/edit-attendance', id]);

  }

  async deleteAttendance(id: number): Promise<void> {

  const confirmed = await this.alert.confirmDelete('Attendance');

  if (!confirmed) {
    return;
  }

  this.attendanceService.deleteAttendance(id).subscribe({

    next: () => {

      this.alert.success('Attendance Deleted Successfully');

      this.loadAttendances();

    },

    error: () => {

      this.alert.error('Failed to Delete Attendance');

    }

  });

}

  filterAttendances(): void {
    if (!this.searchText.trim()) {
      this.attendances = [...this.allAttendances];
    } else {
      const q = this.searchText.toLowerCase().trim();
      this.attendances = this.allAttendances.filter(a => 
        String(a.studentId).includes(q) ||
        String(a.busId).includes(q) ||
        (a.scanTime && a.scanTime.toLowerCase().includes(q)) ||
        (a.scanType && a.scanType.toLowerCase().includes(q))
      );
    }
  }
}