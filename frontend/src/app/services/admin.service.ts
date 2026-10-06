import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Admin } from '../models/admin';
import { Dashboard } from '../models/dashboard';
import { ForgotPassword } from '../models/forgot-password';
import { VerifyOtp } from '../models/verify-otp';
import { ResetPassword } from '../models/reset-password';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://college-bus-crowd-prediction-env.eba-dp7mjwij.ap-south-1.elasticbeanstalk.com/admin';

  constructor(private http: HttpClient) { }

  // Register Admin
  saveAdmin(admin: Admin) {
    return this.http.post(this.baseUrl + '/signup/save', admin);
  }

  // Login Admin
  login(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(`${this.baseUrl}/login`, admin);
  }

  // Dashboard
  getDashboard(): Observable<Dashboard> {
    return this.http.get<Dashboard>(`${this.baseUrl}/dashboard`);
  }

  // Get Admin By Id
  getAdminById(id: number): Observable<Admin> {
    return this.http.get<Admin>(`${this.baseUrl}/get/${id}`);
  }

  // Update Admin
  updateAdmin(id: number, admin: Admin): Observable<Admin> {
    return this.http.put<Admin>(`${this.baseUrl}/update/${id}`, admin);
  }

  // Upload Profile Photo
  uploadPhoto(id: number, formData: FormData): Observable<string> {
    return this.http.post(
      `${this.baseUrl}/upload-photo/${id}`,
      formData,
      { responseType: 'text' }
    );
  }

  // Change Password
  changePassword(id: number, body: any): Observable<string> {
    return this.http.post(
      `${this.baseUrl}/change-password/${id}`,
      body,
      { responseType: 'text' }
    );
  }

  // Send OTP
  sendOtp(email: string): Observable<string> {

    const body: ForgotPassword = {
      email: email
    };

    return this.http.post(
      `${this.baseUrl}/forgot-password/send-otp`,
      body,
      { responseType: 'text' }
    );
  }

  // Verify OTP
  verifyOtp(email: string, otp: string): Observable<string> {

    const body: VerifyOtp = {
      email: email,
      otp: otp
    };

    return this.http.post(
      `${this.baseUrl}/forgot-password/verify-otp`,
      body,
      { responseType: 'text' }
    );
  }

  // Reset Password
  resetPassword(email: string, newPassword: string): Observable<string> {

    const body: ResetPassword = {
      email: email,
      newPassword: newPassword
    };

    return this.http.post(
      `${this.baseUrl}/forgot-password/reset-password`,
      body,
      { responseType: 'text' }
    );
  }

}