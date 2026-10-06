import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Bus } from '../models/bus';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  private baseUrl = 'http://college-bus-crowd-prediction-env.eba-dp7mjwij.ap-south-1.elasticbeanstalk.com/bus';

  constructor(private http: HttpClient) { }

  // Get All Buses
  getAllBuses(): Observable<Bus[]> {
    return this.http.get<Bus[]>(`${this.baseUrl}/getall`);
  }

  // Get Bus By Id
  getBusById(id: number): Observable<Bus> {
    return this.http.get<Bus>(`${this.baseUrl}/get/${id}`);
  }

  // Get Bus By Bus Number
  getBusByBusNo(busNo: string): Observable<Bus> {
    return this.http.get<Bus>(`${this.baseUrl}/busno/${busNo}`);
  }

  // Save Bus
  saveBus(bus: Bus): Observable<Bus> {
    return this.http.post<Bus>(`${this.baseUrl}/save`, bus);
  }

  // Update Bus
  updateBus(id: number, bus: Bus): Observable<Bus> {
    return this.http.put<Bus>(`${this.baseUrl}/update/${id}`, bus);
  }

  // Delete Bus
  deleteBus(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, {
      responseType: 'text'
    });
  }

}