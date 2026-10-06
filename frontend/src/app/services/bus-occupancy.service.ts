import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusOccupancy } from '../models/bus-occupancy';

@Injectable({
    providedIn: 'root'
})
export class BusOccupancyService {

    private apiUrl = 'http://college-bus-crowd-prediction-env.eba-dp7mjwij.ap-south-1.elasticbeanstalk.com/busoccupancy';

    constructor(private http: HttpClient) { }

    // Get All Bus Occupancy
    getAllOccupancy(): Observable<BusOccupancy[]> {
        return this.http.get<BusOccupancy[]>(`${this.apiUrl}/getall`);
    }

    // Get Bus Occupancy By Bus Id
    getOccupancyByBusId(busId: number): Observable<BusOccupancy> {
        return this.http.get<BusOccupancy>(`${this.apiUrl}/bus/${busId}`);
    }

    // Generate Bus Occupancy
    generateOccupancy(busId: number): Observable<any> {
        return this.http.post(
            `${this.apiUrl}/generate/${busId}`,
            {},
            {
                responseType: 'text'
            }
        );
    }

    // Generate All Bus Occupancies
    generateAllOccupancy(): Observable<any> {

        return this.http.post(
            `${this.apiUrl}/generateall`,
            {},
            {
                responseType: 'text'
            }
        );

    }

}