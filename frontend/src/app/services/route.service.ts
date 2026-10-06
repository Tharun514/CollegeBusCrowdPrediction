import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Route } from '../models/route';

@Injectable({
    providedIn: 'root'
})
export class RouteService {

    private baseUrl = 'http://college-bus-crowd-prediction-env.eba-dp7mjwij.ap-south-1.elasticbeanstalk.com/route';

    constructor(private http: HttpClient) { }

    // Get All Routes
    getAllRoutes(): Observable<Route[]> {

        return this.http.get<Route[]>(`${this.baseUrl}/getall`);

    }

    // Get Route By Id
    getRouteById(id: number): Observable<Route> {

        return this.http.get<Route>(`${this.baseUrl}/get/${id}`);

    }

    // Save Route
    saveRoute(route: Route): Observable<Route> {

        return this.http.post<Route>(`${this.baseUrl}/save`, route);

    }

    // Update Route
    updateRoute(id: number, route: Route): Observable<Route> {

        return this.http.put<Route>(`${this.baseUrl}/update/${id}`, route);

    }

    // Delete Route
    deleteRoute(id: number): Observable<any> {

        return this.http.delete(`${this.baseUrl}/delete/${id}`, {
            responseType: 'text'
        });

    }

}