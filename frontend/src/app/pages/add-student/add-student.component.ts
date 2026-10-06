import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  studentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router,
    private alert: AlertService
  ) {

    this.studentForm = this.fb.group({

      name: ['', Validators.required],
      rollNo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      department: ['', Validators.required],
      year: ['', Validators.required],
      busPassNumber: [''],
      routeId: [''],
      busId: [''],
      photoUrl: ['']

    });

  }

  saveStudent() {

    if (this.studentForm.valid) {

      this.studentService.saveStudent(this.studentForm.value).subscribe({

        next: (data) => {

          console.log(data);

          this.alert.success('Student Saved Successfully');

          this.router.navigate(['/students']);

        },

        error: (error) => {

          console.log(error);

          this.alert.error('Failed to Save Student');

        }

      });

    } else {

      this.alert.warning('Please fill all required fields');

    }

  }

}