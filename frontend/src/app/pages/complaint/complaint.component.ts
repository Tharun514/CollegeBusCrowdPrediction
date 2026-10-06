import { Component, OnInit } from '@angular/core';
import { Complaint } from '../../models/complaint';
import { ComplaintService } from '../../services/complaint.service';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
import { ToastService } from '../../services/toast.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  complaints: Complaint[] = [];
  allComplaints: Complaint[] = [];
  students: Student[] = [];

  searchText: string = '';
  p: number = 1;

  constructor(
    private complaintService: ComplaintService,
    private studentService: StudentService,
    private toast: ToastService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {

    this.loadStudents();
    this.loadComplaints();

  }

  loadStudents(): void {

    this.studentService.getAllStudents().subscribe({

      next: (data) => {

        this.students = data;

      },

      error: () => {

        this.toast.error('Failed to Load Students');

      }

    });

  }

  loadComplaints(): void {

    this.complaintService.getAllComplaints().subscribe({

      next: (data) => {

        this.complaints = data;
        this.allComplaints = data;

      },

      error: () => {

        this.toast.error('Failed to Load Complaints');

      }

    });

  }

  getStudentName(studentId: number): string {

    const student = this.students.find(
      s => s.studentId === studentId
    );

    return student ? student.name : 'N/A';

  }

  searchComplaints(): void {

    const search = this.searchText.toLowerCase().trim();

    if (search === '') {

      this.complaints = this.allComplaints;

      return;

    }

    this.complaints = this.allComplaints.filter(c =>

      (c.title ?? '').toLowerCase().includes(search) ||

      (c.status ?? '').toLowerCase().includes(search)

    );

  }

  async deleteComplaint(id: number): Promise<void> {

    const confirmed = await this.alert.confirmDelete('Complaint');

    if (!confirmed) return;

    this.complaintService.deleteComplaint(id).subscribe({

      next: () => {

        this.alert.success('Complaint Deleted Successfully');

        this.loadComplaints();

      },

      error: () => {

        this.alert.error('Failed to Delete Complaint');

      }

    });

  }

}