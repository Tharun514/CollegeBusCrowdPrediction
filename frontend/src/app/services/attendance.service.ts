import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Attendance } from '../models/attendance';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private baseUrl = 'http://college-bus-crowd-prediction-env.eba-dp7mjwij.ap-south-1.elasticbeanstalk.com/attendance';

  constructor(private http: HttpClient) { }

  // Get All Attendances
  getAllAttendances(): Observable<Attendance[]> {

    return this.http.get<Attendance[]>(`${this.baseUrl}/getall`);

  }

  // Get Attendance By Id
  getAttendanceById(id: number): Observable<Attendance> {

    return this.http.get<Attendance>(`${this.baseUrl}/get/${id}`);

  }

  // Save Attendance
  saveAttendance(attendance: Attendance): Observable<Attendance> {

    return this.http.post<Attendance>(`${this.baseUrl}/save`, attendance);

  }

  // Update Attendance
  updateAttendance(id: number, attendance: Attendance): Observable<Attendance> {

    return this.http.put<Attendance>(`${this.baseUrl}/update/${id}`, attendance);

  }

  // Delete Attendance
  deleteAttendance(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}/delete/${id}`, {
      responseType: 'text'
    });

  }

}