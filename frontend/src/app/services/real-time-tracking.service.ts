import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RealTimeTrackingService {

    private apiUrl = 'http://college-bus-crowd-prediction-env.eba-dp7mjwij.ap-south-1.elasticbeanstalk.com/realtimetracking';

    constructor(private http: HttpClient) { }

    getLatestTracking(busNo: string): Observable<any> {
        return this.http.get(`${this.apiUrl}/bus/${busNo}`);
    }
}