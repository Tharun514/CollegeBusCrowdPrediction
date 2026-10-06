import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BusLocation } from 'src/app/models/bus-location';
@Injectable({
    providedIn: 'root'
})
export class BusLocationService {

    private apiUrl = 'http://college-bus-crowd-prediction-env.eba-dp7mjwij.ap-south-1.elasticbeanstalk.com/buslocation';

    constructor(private http: HttpClient) { }

    getAllLocations(): Observable<BusLocation[]> {
        return this.http.get<BusLocation[]>(`${this.apiUrl}/getall`);
    }

    getLocationById(id: number): Observable<BusLocation> {
        return this.http.get<BusLocation>(`${this.apiUrl}/get/${id}`);
    }

}