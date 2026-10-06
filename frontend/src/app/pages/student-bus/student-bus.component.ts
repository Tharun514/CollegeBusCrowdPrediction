import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { BusDetails } from '../../models/bus-details';

@Component({
  selector: 'app-student-bus',
  templateUrl: './student-bus.component.html',
  styleUrls: ['./student-bus.component.css']
})
export class StudentBusComponent implements OnInit {

  bus!: BusDetails;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {

    const id = Number(sessionStorage.getItem('studentId'));

    this.studentService.getBusDetails(id).subscribe(data => {

      this.bus = data;

    });

  }

}