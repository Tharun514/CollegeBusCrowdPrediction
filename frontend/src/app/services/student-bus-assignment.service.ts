import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StudentBusAssignment } from '../models/student-bus-assignment';

@Injectable({
    providedIn: 'root'
})
export class StudentBusAssignmentService {

    private baseUrl = "http://college-bus-crowd-prediction-env.eba-dp7mjwij.ap-south-1.elasticbeanstalk.com/studentbusassignment";

    constructor(private http: HttpClient) { }

    // Get All Assignments
    getAllAssignments(): Observable<StudentBusAssignment[]> {
        return this.http.get<StudentBusAssignment[]>(`${this.baseUrl}/getall`);
    }

    // Get Assignment By Id
    getAssignmentById(id: number): Observable<StudentBusAssignment> {
        return this.http.get<StudentBusAssignment>(`${this.baseUrl}/get/${id}`);
    }

    // Save Assignment
    saveAssignment(assignment: StudentBusAssignment): Observable<StudentBusAssignment> {
        return this.http.post<StudentBusAssignment>(`${this.baseUrl}/save`, assignment);
    }

    // Update Assignment
    updateAssignment(id: number, assignment: StudentBusAssignment): Observable<StudentBusAssignment> {
        return this.http.put<StudentBusAssignment>(`${this.baseUrl}/update/${id}`, assignment);
    }

    // Delete Assignment
    deleteAssignment(id: number): Observable<string> {

        return this.http.delete(`${this.baseUrl}/delete/${id}`, {
            responseType: 'text'
        });

    }
    // Get Assignment By Student Id
    getAssignmentByStudentId(studentId: number): Observable<StudentBusAssignment> {

        return this.http.get<StudentBusAssignment>(
            `${this.baseUrl}/student/${studentId}`
        );

    }

}