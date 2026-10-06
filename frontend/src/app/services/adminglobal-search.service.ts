import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { StudentService } from './student.service';
import { DriverService } from './driver.service';
import { BusService } from './bus.service';
import { RouteService } from './route.service';
import { StopService } from './stop.service';

export interface SearchResult {

    type: string;
    title: string;
    subtitle: string;
    route: string;
    icon: string;

}

@Injectable({
    providedIn: 'root'
})
export class GlobalSearchService {
    private pages: SearchResult[] = [

        {
            type: 'Page',
            title: 'Dashboard',
            subtitle: 'Admin Dashboard Home Analytics Reports',
            route: '/dashboard',
            icon: 'bi bi-grid-1x2-fill'
        },

        {
            type: 'Page',
            title: 'Students',
            subtitle: 'Manage Students Add Student Student List',
            route: '/students',
            icon: 'bi bi-people-fill'
        },

        {
            type: 'Page',
            title: 'Drivers',
            subtitle: 'Manage Drivers Add Driver Driver List',
            route: '/drivers',
            icon: 'bi bi-person-badge-fill'
        },

        {
            type: 'Page',
            title: 'Buses',
            subtitle: 'Manage Buses Add Bus Bus List',
            route: '/buses',
            icon: 'bi bi-bus-front-fill'
        },

        {
            type: 'Page',
            title: 'Routes',
            subtitle: 'Manage Routes Add Route Route List',
            route: '/routes',
            icon: 'bi bi-sign-turn-right-fill'
        },

        {
            type: 'Page',
            title: 'Stops',
            subtitle: 'Manage Stops Add Stop Stop List',
            route: '/stops',
            icon: 'bi bi-geo-alt-fill'
        },

        {
            type: 'Page',
            title: 'Attendance',
            subtitle: 'Student Attendance Present Absent',
            route: '/attendance',
            icon: 'bi bi-calendar-check-fill'
        },
        {
            type: 'Page',
            title: 'Complaints',
            subtitle: 'Complaint Feedback Issues Support',
            route: '/complaints',
            icon: 'bi bi-chat-left-text-fill'
        },

        {
            type: 'Page',
            title: 'Notifications',
            subtitle: 'Alerts Messages Updates',
            route: '/notifications',
            icon: 'bi bi-bell-fill'
        },

        {
            type: 'Page',
            title: 'Profile',
            subtitle: 'Admin User Settings Account',
            route: '/profile',
            icon: 'bi bi-person-circle'
        }

    ];
    constructor(
        private studentService: StudentService,
        private driverService: DriverService,
        private busService: BusService,
        private routeService: RouteService,
        private stopService: StopService
    ) { }

    search(query: string): Observable<SearchResult[]> {

        const keyword = query.toLowerCase().trim();

        return forkJoin({

            students: this.studentService.getAllStudents(),
            drivers: this.driverService.getAllDrivers(),
            buses: this.busService.getAllBuses(),
            routes: this.routeService.getAllRoutes(),
            stops: this.stopService.getAllStops()

        }).pipe(

            map(data => {

                const results: SearchResult[] = [];

                // ---------------- Pages ----------------

                this.pages.forEach(page => {

                    if (

                        page.title.toLowerCase().includes(keyword) ||

                        page.subtitle.toLowerCase().includes(keyword)

                    ) {

                        results.push(page);

                    }

                });

                // Students

                data.students.forEach((student: any) => {

                    if (

                        student.name?.toLowerCase().includes(keyword) ||

                        student.rollNo?.toLowerCase().includes(keyword)

                    ) {

                        results.push({

                            type: 'Student',

                            title: student.name,

                            subtitle: student.rollNo,

                            route: '/students',

                            icon: 'bi bi-people-fill'

                        });

                    }

                });

                // Drivers

                data.drivers.forEach((driver: any) => {

                    if (

                        driver.name?.toLowerCase().includes(keyword) ||

                        driver.phone?.toLowerCase().includes(keyword)

                    ) {

                        results.push({

                            type: 'Driver',

                            title: driver.name,

                            subtitle: driver.phone,

                            route: '/drivers',

                            icon: 'bi bi-person-badge-fill'

                        });

                    }

                });

                // Buses

                data.buses.forEach((bus: any) => {

                    if (

                        bus.busNo?.toLowerCase().includes(keyword) ||

                        bus.registrationNumber?.toLowerCase().includes(keyword)

                    ) {

                        results.push({

                            type: 'Bus',

                            title: bus.busNo,

                            subtitle: bus.registrationNumber,

                            route: '/buses',

                            icon: 'bi bi-bus-front-fill'

                        });

                    }

                });

                // Routes

                data.routes.forEach((route: any) => {

                    if (

                        route.routeName?.toLowerCase().includes(keyword)

                    ) {

                        results.push({

                            type: 'Route',

                            title: route.routeName,

                            subtitle: route.startPoint + ' → ' + route.endPoint,

                            route: '/routes',

                            icon: 'bi bi-sign-turn-right-fill'

                        });

                    }

                });

                // Stops

                data.stops.forEach((stop: any) => {

                    if (

                        stop.stopName?.toLowerCase().includes(keyword)

                    ) {

                        results.push({

                            type: 'Stop',

                            title: stop.stopName,

                            subtitle: 'Stop',

                            route: '/stops',

                            icon: 'bi bi-geo-alt-fill'

                        });

                    }

                });

                return results.slice(0, 10);

            })

        );

    }

}