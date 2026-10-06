import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from '../models/driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private baseUrl = 'http://college-bus-crowd-prediction-env.eba-dp7mjwij.ap-south-1.elasticbeanstalk.com/driver';

  constructor(private http: HttpClient) { }

  // Get All Drivers
  getAllDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${this.baseUrl}/getall`);
  }

  // Save Driver
  saveDriver(driver: Driver): Observable<Driver> {
    return this.http.post<Driver>(`${this.baseUrl}/save`, driver);
  }

  // Get Driver By Id
  getDriverById(id: number): Observable<Driver> {
    return this.http.get<Driver>(`${this.baseUrl}/get/${id}`);
  }

  // Update Driver
  updateDriver(id: number, driver: Driver): Observable<Driver> {
    return this.http.put<Driver>(`${this.baseUrl}/update/${id}`, driver);
  }

  // Delete Driver
  deleteDriver(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, {
      responseType: 'text'
    });
  }

}