import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Attendance } from '../../models/attendance';

@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.css']
})
export class StudentAttendanceComponent implements OnInit {

  attendanceList: Attendance[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {

    const id = Number(sessionStorage.getItem('studentId'));

    this.studentService.getAttendance(id).subscribe(data => {

      this.attendanceList = data;

    });

  }

}