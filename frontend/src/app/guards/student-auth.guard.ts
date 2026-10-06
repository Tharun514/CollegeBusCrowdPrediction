import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class StudentAuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(): boolean {

        const studentId = sessionStorage.getItem('studentId');
        const role = sessionStorage.getItem('role');

        if (studentId && role === 'STUDENT') {
            return true;
        }

        this.router.navigate(['/student-login']);

        return false;
    }

}