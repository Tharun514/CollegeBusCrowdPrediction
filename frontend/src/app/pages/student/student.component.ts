import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
import { ToastService } from '../../services/toast.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[] = [];
  allStudents: Student[] = [];
  searchText: string = '';
  p: number = 1;

  constructor(
    private studentService: StudentService,
    private toast: ToastService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {

    this.studentService.getAllStudents().subscribe({

      next: (data: Student[]) => {

        console.log(data);

        this.students = data;
        this.allStudents = data;

      },

      error: (error: any) => {

        console.log(error);

        this.toast.error('Failed to Load Students');

      }

    });

  }

  searchStudents(): void {

    const search = this.searchText.toLowerCase().trim();

    if (search === '') {

      this.students = this.allStudents;

      return;

    }

    this.students = this.allStudents.filter(student =>

      student.name.toLowerCase().includes(search) ||

      student.rollNo.toLowerCase().includes(search) ||

      student.department.toLowerCase().includes(search)

    );

  }

  async deleteStudent(id: number): Promise<void> {

    const confirmed = await this.alert.confirmDelete('Student');

    if (!confirmed) {
      return;
    }

    this.studentService.deleteStudent(id).subscribe({

      next: (response: any) => {

        console.log(response);

        this.alert.success('Student Deleted Successfully');

        this.loadStudents();

      },

      error: (error: any) => {

        console.log(error);

        this.alert.error('Failed to Delete Student');

      }

    });

  }

}