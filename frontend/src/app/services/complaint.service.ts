import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Complaint } from '../models/complaint';

@Injectable({
    providedIn: 'root'
})
export class ComplaintService {

    private baseUrl = 'http://college-bus-crowd-prediction-env.eba-dp7mjwij.ap-south-1.elasticbeanstalk.com/complaint';

    constructor(private http: HttpClient) { }

    // Save Complaint
    saveComplaint(complaint: Complaint): Observable<Complaint> {
        return this.http.post<Complaint>(`${this.baseUrl}/save`, complaint);
    }

    // Get All Complaints
    getAllComplaints(): Observable<Complaint[]> {
        return this.http.get<Complaint[]>(`${this.baseUrl}/getall`);
    }

    // Get Complaint By Id
    getComplaintById(id: number): Observable<Complaint> {
        return this.http.get<Complaint>(`${this.baseUrl}/get/${id}`);
    }

    // Update Complaint
    updateComplaint(id: number, complaint: Complaint): Observable<Complaint> {
        return this.http.put<Complaint>(`${this.baseUrl}/update/${id}`, complaint);
    }

    // Delete Complaint
    deleteComplaint(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/delete/${id}`, {
            responseType: 'text'
        });
    }

}