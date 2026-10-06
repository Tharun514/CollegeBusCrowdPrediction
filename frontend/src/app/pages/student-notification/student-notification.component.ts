import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Notification } from '../../models/notification';

@Component({
  selector: 'app-student-notification',
  templateUrl: './student-notification.component.html',
  styleUrls: ['./student-notification.component.css']
})
export class StudentNotificationComponent implements OnInit {

  notifications: Notification[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {

    const id = Number(sessionStorage.getItem('studentId'));

    this.studentService.getNotifications(id).subscribe(data => {

      this.notifications = data;

    });

  }

}