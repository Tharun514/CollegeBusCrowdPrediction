import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  email = '';
  otp = '';
  newPassword = '';
  step = 1;
  loading = false;

  constructor(
    private studentService: StudentService,
    private toast: ToastService,
    private router: Router
  ) { }

  sendOtp() {

    if (!this.email.trim()) {
      this.toast.warning('Enter Email Address');
      return;
    }

    this.loading = true;

    this.studentService.sendOtp(this.email).subscribe({

      next: () => {

        this.loading = false;

        this.toast.success('OTP Sent Successfully');
        this.step = 2;

      },

      error: () => {

        this.loading = false;

        this.toast.error('Unable to Send OTP');

      }

    });

  }

  verifyOtp() {

    if (!this.otp.trim()) {
      this.toast.warning('Enter OTP');
      return;
    }

    this.studentService.verifyOtp(this.email, this.otp).subscribe({

      next: () => {

        this.toast.success('OTP Verified');
        this.step = 3;

      },

      error: () => {

        this.toast.error('Invalid or Expired OTP');

      }

    });

  }

  resetPassword() {

    if (!this.newPassword.trim()) {
      this.toast.warning('Enter New Password');
      return;
    }

    this.studentService.resetPassword(this.email, this.newPassword).subscribe({

      next: () => {

        this.toast.success('Password Reset Successfully');

        setTimeout(() => {
          this.router.navigate(['/student-login']);
        }, 1000);

      },

      error: () => {

        this.toast.error('Password Reset Failed');

      }

    });

  }
}