import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-admin-forgot-password',
  templateUrl: './admin-forgot-password.component.html',
  styleUrls: ['./admin-forgot-password.component.css']
})
export class AdminForgotPasswordComponent {

  email = '';
  otp = '';
  newPassword = '';
  confirmPassword = '';

  otpSent = false;
  otpVerified = false;

  constructor(
    private adminService: AdminService,
    private toast: ToastService
  ) { }

  sendOtp() {

    this.adminService.sendOtp(this.email).subscribe({

      next: (res: string) => {

        this.toast.success(res);

        this.otpSent = true;

      },

      error: (err: any) => {

        this.toast.error(err.error);

      }

    });

  }

  verifyOtp() {

    this.adminService.verifyOtp(this.email, this.otp).subscribe({

      next: (res: string) => {

        this.toast.success(res);

        this.otpVerified = true;

      },

      error: (err: any) => {

        this.toast.error(err.error);

      }

    });

  }

  resetPassword() {

    if (this.newPassword !== this.confirmPassword) {

      this.toast.error('Passwords do not match');

      return;

    }

    this.adminService.resetPassword(this.email, this.newPassword).subscribe({

      next: (res: string) => {

        this.toast.success(res);

      },

      error: (err: any) => {

        this.toast.error(err.error);

      }

    });

  }

}