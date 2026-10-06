import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { ToastService } from '../../services/toast.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {

  email = '';
  password = '';
  message = '';

  constructor(
    private studentService: StudentService,
    private router: Router,
    private toast: ToastService
  ) { }

  login() {

    if (!this.email || !this.password) {

      this.toast.warning('Please enter Email and Password');
      return;

    }

    this.studentService.login(this.email, this.password).subscribe({

      next: (student: Student) => {

        sessionStorage.clear();

        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('role', 'STUDENT');
        sessionStorage.setItem('student', JSON.stringify(student));
        sessionStorage.setItem('studentId', student.studentId!.toString());
        sessionStorage.setItem('studentName', student.name);
        sessionStorage.setItem('studentEmail', student.email);

        this.toast.success('Login Successful');

        this.router.navigateByUrl('/student-dashboard', {
          replaceUrl: true
        });

      },

      error: () => {

        this.toast.error('Invalid Email or Password');

      }

    });

  }

}