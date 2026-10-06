import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { StudentService } from '../../services/student.service';
import { Admin } from '../../models/admin';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminLoginComponent {

  username = '';
  password = '';
  message = '';

  constructor(
    private adminService: AdminService,
    private studentService: StudentService,
    private router: Router,
    private toast: ToastService
  ) { }

  login() {

    const admin: Admin = {
      username: this.username,
      password: this.password
    };

    this.adminService.login(admin).subscribe({

      next: (response) => {

        if (response) {

          sessionStorage.clear();

          sessionStorage.setItem('isLoggedIn', 'true');
          sessionStorage.setItem('role', 'ADMIN');
          sessionStorage.setItem('adminId', response.adminId!.toString());
          sessionStorage.setItem('username', response.username);
          sessionStorage.setItem('fullName', response.fullName ?? '');
          sessionStorage.setItem('email', response.email ?? '');
          
          this.toast.success('Admin Login Successful');

          this.router.navigate(['/dashboard']);

        }

      },

      error: () => {

        this.toast.error('Invalid Login');

      }

    });

  }

}