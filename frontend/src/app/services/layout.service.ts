import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {

    private sidebarCollapsed = new BehaviorSubject<boolean>(false);

    sidebarCollapsed$ = this.sidebarCollapsed.asObservable();

    toggleSidebar(): void {
        this.sidebarCollapsed.next(!this.sidebarCollapsed.value);
    }

    collapse(): void {
        this.sidebarCollapsed.next(true);
    }

    expand(): void {
        this.sidebarCollapsed.next(false);
    }

    get isCollapsed(): boolean {
        return this.sidebarCollapsed.value;
    }

}