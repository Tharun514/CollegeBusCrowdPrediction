import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stop } from '../models/stop';

@Injectable({
  providedIn: 'root'
})
export class StopService {

  private baseUrl = 'http://college-bus-crowd-prediction-env.eba-dp7mjwij.ap-south-1.elasticbeanstalk.com/stops';

  constructor(private http: HttpClient) { }

  // Save Stop
  saveStop(stop: Stop): Observable<Stop> {
    return this.http.post<Stop>(`${this.baseUrl}/save`, stop);
  }

  // Get All Stops
  getAllStops(): Observable<Stop[]> {
    return this.http.get<Stop[]>(`${this.baseUrl}/getall`);
  }

  // Get Stop By Id
  getStopById(id: number): Observable<Stop> {
    return this.http.get<Stop>(`${this.baseUrl}/get/${id}`);
  }

  // Update Stop
  updateStop(id: number, stop: Stop): Observable<Stop> {
    return this.http.put<Stop>(`${this.baseUrl}/update/${id}`, stop);
  }

  // Delete Stop
  deleteStop(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, {
      responseType: 'text'
    });
  }

}