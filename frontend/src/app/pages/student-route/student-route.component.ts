import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { RouteDetails } from '../../models/route-details';

@Component({
  selector: 'app-student-route',
  templateUrl: './student-route.component.html',
  styleUrls: ['./student-route.component.css']
})
export class StudentRouteComponent implements OnInit {

  route!: RouteDetails;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {

    const id = Number(sessionStorage.getItem('studentId'));

    this.studentService.getRouteDetails(id).subscribe(data => {

      this.route = data;

    });

  }

}