import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StudentBusAssignment } from '../../models/student-bus-assignment';
import { StudentBusAssignmentService } from '../../services/student-bus-assignment.service';
import { StudentService } from '../../services/student.service';
import { BusService } from '../../services/bus.service';
import { RouteService } from '../../services/route.service';

import { Student } from '../../models/student';
import { Bus } from '../../models/bus';
import { Route } from '../../models/route';
import { ToastService } from '../../services/toast.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-student-bus-assignment',
  templateUrl: './student-bus-assignment.component.html',
  styleUrls: ['./student-bus-assignment.component.css']
})
export class StudentBusAssignmentComponent implements OnInit {

  assignments: StudentBusAssignment[] = [];
  allAssignments: StudentBusAssignment[] = [];
  searchText: string = '';
  students: Student[] = [];
  buses: Bus[] = [];
  routes: Route[] = [];

  constructor(
    private assignmentService: StudentBusAssignmentService,
    private studentService: StudentService,
    private busService: BusService,
    private routeService: RouteService,
    private router: Router,
    private toast: ToastService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {

    this.loadStudents();
    this.loadBuses();
    this.loadRoutes();
    this.getAssignments();

  }

  loadStudents(): void {

    this.studentService.getAllStudents().subscribe({

      next: (data) => {
        this.students = data;
      },

      error: (err: any) => {
        console.error(err);
        this.toast.error('Failed to Load Students');
      }

    });

  }

  loadBuses(): void {

    this.busService.getAllBuses().subscribe({

      next: (data) => {
        this.buses = data;
      },

      error: (err: any) => {
        console.error(err);
        this.toast.error('Failed to Load Buses');
      }

    });

  }

  loadRoutes(): void {

    this.routeService.getAllRoutes().subscribe({

      next: (data) => {
        this.routes = data;
      },

      error: (err: any) => {
        console.error(err);
        this.toast.error('Failed to Load Routes');
      }

    });

  }

  getAssignments(): void {

    this.assignmentService.getAllAssignments().subscribe({

      next: (data) => {
        this.allAssignments = data;
        this.filterAssignments();
      },

      error: (err: any) => {
        console.error(err);
        this.toast.error('Failed to Load Assignments');
      }

    });

  }

  async deleteAssignment(id: number): Promise<void> {

    const confirmed = await this.alert.confirmDelete('Assignment');

    if (!confirmed) {
      return;
    }

    this.assignmentService.deleteAssignment(id).subscribe({

      next: () => {

        this.alert.success('Assignment Deleted Successfully');

        this.getAssignments();

      },

      error: (err: any) => {

        console.error(err);

        this.alert.error('Failed to Delete Assignment');

      }

    });

  }
  editAssignment(id: number): void {

    this.router.navigate(['/edit-student-bus-assignment', id]);

  }

  getStudentName(studentId: number): string {

    const student = this.students.find(s => s.studentId === studentId);

    return student ? student.name : 'N/A';

  }

  getBusNo(busId: number): string {

    const bus = this.buses.find(b => b.busId === busId);

    return bus ? bus.busNo : 'N/A';

  }

  getRouteName(routeId: number): string {

    const route = this.routes.find(r => r.routeId === routeId);

    return route ? route.routeName : 'N/A';

  }

  filterAssignments(): void {
    if (!this.searchText.trim()) {
      this.assignments = [...this.allAssignments];
    } else {
      const q = this.searchText.toLowerCase().trim();
      this.assignments = this.allAssignments.filter(a => {
        const studentName = this.getStudentName(a.studentId).toLowerCase();
        const busNo = this.getBusNo(a.busId).toLowerCase();
        const routeName = this.getRouteName(a.routeId).toLowerCase();
        return studentName.includes(q) ||
               busNo.includes(q) ||
               routeName.includes(q) ||
               (a.assignedDate && a.assignedDate.toLowerCase().includes(q));
      });
    }
  }
}