import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { StudentService } from '../../services/student.service';
import { RouteService } from '../../services/route.service';
import { BusService } from '../../services/bus.service';
import { ToastService } from '../../services/toast.service';

import { Admin } from '../../models/admin';
import { Student } from '../../models/student';
import { Route } from '../../models/route';
import { Bus } from '../../models/bus';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  role = 'STUDENT';

  routes: Route[] = [];
  buses: Bus[] = [];

  confirmPassword = '';

  showPassword = false;
  showConfirmPassword = false;

  passwordStrength = '';

  departments = [
    'Computer Science',
    'Information Technology',
    'Electronics',
    'Electrical',
    'Mechanical',
    'Civil',
    'Artificial Intelligence',
    'Data Science'
  ];

  years = [1, 2, 3, 4];

  admin: Admin = {

    username: '',
    fullName: '',
    email: '',
    password: '',
    role: 'BUS_INCHARGE'

  };

  student: Student = {

    name: '',
    rollNo: '',
    email: '',
    password: '',
    department: '',
    year: 1,
    busPassNumber: '',
    routeId: 0,
    busId: 0,
    photoUrl: ''

  };

  constructor(

    private adminService: AdminService,
    private studentService: StudentService,
    private routeService: RouteService,
    private busService: BusService,
    private toast: ToastService,
    private router: Router

  ) { }

  ngOnInit(): void {

    this.loadRoutes();

    this.loadBuses();

  }

  loadRoutes() {

    this.routeService.getAllRoutes().subscribe({

      next: (data) => {

        this.routes = data;

      }

    });

  }

  loadBuses() {

    this.busService.getAllBuses().subscribe({

      next: (data) => {

        this.buses = data;

      }

    });

  }
  routeSelected() {

  }

  busSelected() {

  }

  routeIdChanged() {

    const route = this.routes.find(r => r.routeId == this.student.routeId);

    if (route) {

      this.student.routeId = route.routeId!;

    }

  }

  busIdChanged() {

    const bus = this.buses.find(b => b.busId == this.student.busId);

    if (bus) {

      this.student.busId = bus.busId!;

    }

  }

  togglePassword() {

    this.showPassword = !this.showPassword;

  }

  toggleConfirmPassword() {

    this.showConfirmPassword = !this.showConfirmPassword;

  }

  checkStrength() {

    const password = this.student.password;

    if (password.length < 6) {

      this.passwordStrength = 'Weak';

    }

    else if (password.length < 10) {

      this.passwordStrength = 'Medium';

    }

    else {

      this.passwordStrength = 'Strong';

    }

  }

  register() {

    if (this.role === 'ADMIN') {

      this.adminService.saveAdmin(this.admin).subscribe({

        next: () => {

          this.toast.success('Admin Registered Successfully');

          this.router.navigate(['/']);

        },

        error: () => {

          this.toast.error('Unable to Register Admin');

        }

      });

      return;

    }

    if (this.student.password !== this.confirmPassword) {

      this.toast.error('Passwords do not match');

      return;

    }

    this.studentService.saveStudent(this.student).subscribe({

      next: () => {

        this.toast.success('Student Registered Successfully');

        this.router.navigate(['/student-login']);

      },

      error: () => {

        this.toast.error('Unable to Register Student');

      }

    });

  }

}