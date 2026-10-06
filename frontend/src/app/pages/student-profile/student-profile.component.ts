import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { RouteService } from '../../services/route.service';
import { BusService } from '../../services/bus.service';
import { ToastService } from '../../services/toast.service';

import { Route } from '../../models/route';
import { Bus } from '../../models/bus';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  student!: Student;

  originalStudent!: Student;

  editMode = false;

  selectedFile!: File;

  imagePreview = 'assets/images/user.png';

  routes: Route[] = [];

  buses: Bus[] = [];

  departments = [
    'Computer Science',
    'Information Technology',
    'Artificial Intelligence',
    'Data Science',
    'Electronics',
    'Electrical',
    'Mechanical',
    'Civil'
  ];

  years = [1, 2, 3, 4];

  showCropper = false;

  imageChangedEvent: any = '';

  croppedImage: any = '';

  constructor(

    private studentService: StudentService,
    private routeService: RouteService,
    private busService: BusService,
    private toast: ToastService

  ) { }

  ngOnInit(): void {

    this.loadProfile();

    this.loadRoutes();

    this.loadBuses();

  }

  loadProfile() {

    const id = Number(sessionStorage.getItem('studentId'));

    this.studentService.getProfile(id).subscribe({

      next: (data) => {

        this.student = { ...data };

        this.originalStudent = { ...data };

        if (data.photoUrl) {

          this.imagePreview =
            "http://college-bus-crowd-prediction-env.eba-dp7mjwij.ap-south-1.elasticbeanstalk.com/uploads/" + data.photoUrl;

        }

      },

    });

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

  editProfile() {

    this.editMode = true;

  }

  cancelEdit() {

    this.student = { ...this.originalStudent };

    this.editMode = false;

  }

  selectImage(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    this.selectedFile = input.files[0];

    this.showCropper = true;

  }

  saveProfile() {

    const id = Number(sessionStorage.getItem('studentId'));

    this.studentService.updateStudent(id, this.student).subscribe({

      next: (data) => {

        if (this.selectedFile) {

          const formData = new FormData();

          formData.append("file", this.selectedFile);

          this.studentService.uploadPhoto(id, formData).subscribe({

            next: (fileName) => {

              this.imagePreview =
                "http://college-bus-crowd-prediction-env.eba-dp7mjwij.ap-south-1.elasticbeanstalk.com/uploads/" + fileName;

            }

          });

        }

        this.student = data;

        this.originalStudent = { ...data };

        this.editMode = false;

        this.toast.success("Profile Updated Successfully");

      },

      error: () => {

        this.toast.error("Unable to Update Profile");

      }

    });

  }

}