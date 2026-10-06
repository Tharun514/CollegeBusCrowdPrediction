import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notification } from '../models/notification';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    private baseUrl = 'http://college-bus-crowd-prediction-env.eba-dp7mjwij.ap-south-1.elasticbeanstalk.com/notification';

    constructor(private http: HttpClient) { }

    saveNotification(notification: Notification): Observable<Notification> {
        return this.http.post<Notification>(`${this.baseUrl}/save`, notification);
    }

    getAllNotifications(): Observable<Notification[]> {
        return this.http.get<Notification[]>(`${this.baseUrl}/getall`);
    }

    getNotificationById(id: number): Observable<Notification> {
        return this.http.get<Notification>(`${this.baseUrl}/get/${id}`);
    }

    updateNotification(id: number, notification: Notification): Observable<Notification> {
        return this.http.put<Notification>(`${this.baseUrl}/update/${id}`, notification);
    }

    deleteNotification(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/delete/${id}`, {
            responseType: 'text'
        });
    }

}