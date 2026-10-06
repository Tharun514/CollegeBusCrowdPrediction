import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';
import { BusDetails } from '../models/bus-details';
import { RouteDetails } from '../models/route-details';
import { Attendance } from '../models/attendance';
import { Notification } from '../models/notification';
import { Complaint } from '../models/complaint';
import { ChangePassword } from '../models/change-password';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = "http://college-bus-crowd-prediction-env.eba-dp7mjwij.ap-south-1.elasticbeanstalk.com/student";

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/getall`);
  }

  saveStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}/signup/save`, student);
  }

  getStudentById(id: number): Observable<Student> {

    return this.http.get<Student>(`${this.baseUrl}/get/${id}`);

  }
  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.baseUrl}/update/${id}`, student);
  }
  uploadPhoto(id: number, formData: FormData) {

    return this.http.post(
      `${this.baseUrl}/upload-photo/${id}`,
      formData,
      { responseType: 'text' }
    );

  }
  deleteStudent(id: number) {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, {
      responseType: 'text'
    });
  }
  login(email: string, password: string): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}/login`, {
      email,
      password
    });
  }
  getProfile(id: number): Observable<Student> {

    return this.http.get<Student>(`${this.baseUrl}/profile/${id}`);

  }
  getBusDetails(id: number): Observable<BusDetails> {

    return this.http.get<BusDetails>(`${this.baseUrl}/bus/${id}`);

  }
  getRouteDetails(studentId: number) {

    return this.http.get<RouteDetails>(
      `${this.baseUrl}/route/${studentId}`
    );

  }
  getAttendance(studentId: number) {

    return this.http.get<Attendance[]>(
      `${this.baseUrl}/attendance/${studentId}`
    );

  }
  getNotifications(studentId: number) {

    return this.http.get<Notification[]>(
      `${this.baseUrl}/notifications/${studentId}`
    );

  }
  getComplaints(studentId: number) {

    return this.http.get<Complaint[]>(
      `${this.baseUrl}/complaints/${studentId}`
    );

  }

  saveComplaint(complaint: Complaint) {

    return this.http.post(
      `${this.baseUrl}/complaints`,
      complaint
    );

  }
  changePassword(data: ChangePassword) {

    return this.http.post(
      this.baseUrl + "/change-password",
      data,
      { responseType: 'text' }
    );

  }
  sendOtp(email: string) {

    return this.http.post(
      `${this.baseUrl}/send-otp`,
      { email },
      { responseType: 'text' }
    );

  }

  verifyOtp(email: string, otp: string) {

    return this.http.post(
      `${this.baseUrl}/verify-otp`,
      { email, otp },
      { responseType: 'text' }
    );

  }

  resetPassword(email: string, newPassword: string) {

    return this.http.post(
      `${this.baseUrl}/reset-password`,
      { email, newPassword },
      { responseType: 'text' }
    );

  }

}