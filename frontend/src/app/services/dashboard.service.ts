import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Dashboard } from '../models/dashboard';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    private apiUrl = 'http://15.206.57.102:8085/dashboard';

    constructor(private http: HttpClient) { }

    getDashboardCounts() {
        return this.http.get<Dashboard>(`${this.apiUrl}/counts`);
    }

}