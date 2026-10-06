import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Dashboard } from '../models/dashboard';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    private apiUrl = 'http://college-bus-crowd-prediction-env.eba-dp7mjwij.ap-south-1.elasticbeanstalk.com/dashboard';

    constructor(private http: HttpClient) { }

    getDashboardCounts() {
        return this.http.get<Dashboard>(`${this.apiUrl}/counts`);
    }

}