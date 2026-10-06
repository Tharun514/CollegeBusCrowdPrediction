import { Component, OnInit } from '@angular/core';
import { Admin } from '../../models/admin';
import { AdminService } from '../../services/admin.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminProfileComponent implements OnInit {

  admin: Admin = {
    username: '',
    password: ''
  };

  adminId!: number;

  selectedFile!: File;

  constructor(
    private adminService: AdminService,
    private toast: ToastService
  ) { }

  ngOnInit(): void {

    this.adminId = Number(sessionStorage.getItem('adminId'));

    this.loadProfile();

  }

  loadProfile() {

    this.adminService.getAdminById(this.adminId).subscribe({

      next: (data) => {

        if (data) {
          this.admin = data;
        }

      },

      error: () => {

        this.toast.error('Unable to load profile');

      }

    });

  }

  updateProfile() {

    this.adminService.updateAdmin(this.adminId, this.admin).subscribe({

      next: () => {

        this.toast.success('Profile Updated Successfully');

        this.loadProfile();

      },

      error: () => {

        this.toast.error('Update Failed');

      }

    });

  }

  selectFile(event: any) {

    if (event.target.files.length > 0) {

      this.selectedFile = event.target.files[0];

    }

  }

  uploadPhoto() {

    if (!this.selectedFile) {

      this.toast.warning('Please select a photo');

      return;

    }

    const formData = new FormData();

    formData.append('file', this.selectedFile);

    this.adminService.uploadPhoto(this.adminId, formData).subscribe({

      next: () => {

        this.toast.success('Photo Uploaded Successfully');

        this.loadProfile();

      },

      error: () => {

        this.toast.error('Photo Upload Failed');

      }

    });

  }

}