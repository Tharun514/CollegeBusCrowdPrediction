import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Settings {

    id?: number;

    collegeName: string;
    collegeCode: string;
    email: string;
    phone: string;
    website: string;
    address: string;

    logoUrl?: string;
    theme?: string;

}

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    private apiUrl = 'http://college-bus-crowd-prediction-env.eba-dp7mjwij.ap-south-1.elasticbeanstalk.com/settings';

    private themeSubject = new BehaviorSubject<string>('light');

    theme$ = this.themeSubject.asObservable();

    constructor(private http: HttpClient) { }

    // ============================
    // GET SETTINGS
    // ============================

    getSettings(): Observable<Settings> {

        return this.http.get<Settings>(`${this.apiUrl}/get`).pipe(

            tap(settings => {

                if (settings && settings.theme) {

                    this.themeSubject.next(settings.theme);

                }

            })

        );

    }

    // ============================
    // SAVE SETTINGS
    // ============================

    saveSettings(settings: Settings): Observable<Settings> {

        return this.http.post<Settings>(`${this.apiUrl}/save`, settings).pipe(

            tap(res => {

                if (res && res.theme) {

                    this.themeSubject.next(res.theme);

                }

            })

        );

    }

    // ============================
    // SAVE THEME
    // ============================

    saveTheme(theme: string): Observable<any> {

        return this.http.post(`${this.apiUrl}/save-theme`, {

            theme: theme

        }).pipe(

            tap(() => {

                this.themeSubject.next(theme);

            })

        );

    }

    // ============================
    // UPLOAD LOGO
    // ============================

    uploadLogo(file: File): Observable<Settings> {

        const formData = new FormData();

        formData.append('file', file);

        return this.http.post<Settings>(
            `${this.apiUrl}/upload-logo`,
            formData
        );

    }

}