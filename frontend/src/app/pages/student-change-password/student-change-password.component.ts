import { Component } from '@angular/core';
import { ChangePassword } from 'src/app/models/change-password';
import { StudentService } from 'src/app/services/student.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-student-change-password',
  templateUrl: './student-change-password.component.html',
  styleUrls: ['./student-change-password.component.css']
})
export class StudentChangePasswordComponent {

  passwordData: ChangePassword = {};

  confirmPassword: string = '';

  // Password Visibility

  showCurrentPassword = false;

  showNewPassword = false;

  showConfirmPassword = false;

  constructor(

    private studentService: StudentService,

    private toast: ToastService

  ) { }

  changePassword(): void {

    this.passwordData.studentId =
      Number(sessionStorage.getItem('studentId'));

    // Validation

    if (!this.passwordData.currentPassword) {

      this.toast.warning("Please enter your current password");

      return;

    }

    if (!this.passwordData.newPassword) {

      this.toast.warning("Please enter a new password");

      return;

    }

    if (!this.confirmPassword) {

      this.toast.warning("Please confirm your new password");

      return;

    }

    if (this.passwordData.newPassword !== this.confirmPassword) {

      this.toast.error("New Password and Confirm Password do not match");

      return;

    }

    this.studentService.changePassword(this.passwordData).subscribe({

      next: (res) => {

        this.toast.success(res);

        // Clear Form

        this.passwordData = {};

        this.confirmPassword = '';

        this.showCurrentPassword = false;

        this.showNewPassword = false;

        this.showConfirmPassword = false;

      },

      error: (err) => {

        this.toast.error(err.error);

      }

    });

  }

}