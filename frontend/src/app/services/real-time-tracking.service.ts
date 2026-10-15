import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RealTimeTrackingService {

    private apiUrl = 'http://15.206.57.102:8085/realtimetracking';

    constructor(private http: HttpClient) { }

    getLatestTracking(busNo: string): Observable<any> {
        return this.http.get(`${this.apiUrl}/bus/${busNo}`);
    }
}