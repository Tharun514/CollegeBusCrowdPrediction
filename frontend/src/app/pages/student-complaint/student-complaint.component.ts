import { Component, OnInit } from '@angular/core';
import { Complaint } from '../../models/complaint';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-complaint',
  templateUrl: './student-complaint.component.html',
  styleUrls: ['./student-complaint.component.css']
})
export class StudentComplaintComponent implements OnInit {

  complaints: Complaint[] = [];

  complaint: Complaint = {};

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {

    this.loadComplaints();

  }

  loadComplaints() {

    const id = Number(sessionStorage.getItem('studentId'));

    this.studentService.getComplaints(id).subscribe(data => {

      this.complaints = data;

    });

  }

  saveComplaint() {

    this.complaint.studentId =
      Number(sessionStorage.getItem('studentId'));

    this.studentService.saveComplaint(this.complaint).subscribe(() => {

      alert("Complaint Submitted Successfully");

      this.complaint = {};

      this.loadComplaints();

    });

  }

}