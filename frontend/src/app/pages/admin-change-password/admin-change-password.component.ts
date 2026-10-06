import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-change-password',
  templateUrl: './admin-change-password.component.html',
  styleUrls: ['./admin-change-password.component.css']
})
export class AdminChangePasswordComponent {

  adminId = Number(sessionStorage.getItem('adminId'));

  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  // Password Visibility
  showCurrentPassword = false;
  showNewPassword = false;
  showConfirmPassword = false;

  constructor(private adminService: AdminService) { }

  changePassword(): void {

    // Validate Empty Fields
    if (
      !this.currentPassword.trim() ||
      !this.newPassword.trim() ||
      !this.confirmPassword.trim()
    ) {
      alert('Please fill all fields.');
      return;
    }

    // Validate Password Match
    if (this.newPassword !== this.confirmPassword) {
      alert('New Password and Confirm Password do not match.');
      return;
    }

    const body = {
      currentPassword: this.currentPassword,
      newPassword: this.newPassword
    };

    this.adminService.changePassword(this.adminId, body).subscribe({

      next: (response: any) => {

        alert(response);

        // Clear Form
        this.currentPassword = '';
        this.newPassword = '';
        this.confirmPassword = '';

        // Hide Passwords Again
        this.showCurrentPassword = false;
        this.showNewPassword = false;
        this.showConfirmPassword = false;

      },

      error: (error) => {

        alert(error.error || 'Password change failed.');

      }

    });

  }

}