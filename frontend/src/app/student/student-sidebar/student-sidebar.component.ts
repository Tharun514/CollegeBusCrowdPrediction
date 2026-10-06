import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';

interface MenuItem {
  title: string;
  icon: string;
  route: string;
  section?: string;
}

@Component({
  selector: 'app-student-sidebar',
  templateUrl: './student-sidebar.component.html',
  styleUrls: ['./student-sidebar.component.css']
})
export class StudentSidebarComponent implements OnInit {

  collapsed = false;

  menu: MenuItem[] = [

    // ==========================
    // MAIN
    // ==========================
    {
      section: 'MAIN',
      title: 'Dashboard',
      icon: 'bi bi-grid-1x2-fill',
      route: '/student-dashboard'
    },

    // ==========================
    // TRANSPORT
    // ==========================
    {
      section: 'TRANSPORT',
      title: 'My Bus',
      icon: 'bi bi-bus-front-fill',
      route: '/student-bus'
    },
    {
      title: 'My Route',
      icon: 'bi bi-sign-turn-right-fill',
      route: '/student-route'
    },
    {
      title: 'Live Bus Tracking',
      icon: 'bi bi-geo-alt-fill',
      route: '/student-live-bus-tracking'
    },
    {
      title: 'Attendance',
      icon: 'bi bi-calendar-check-fill',
      route: '/student-attendance'
    },

    // ==========================
    // COMMUNICATION
    // ==========================
    {
      section: 'COMMUNICATION',
      title: 'Notifications',
      icon: 'bi bi-bell-fill',
      route: '/student-notifications'
    },
    {
      title: 'Complaints',
      icon: 'bi bi-chat-left-text-fill',
      route: '/student-complaint'
    },

    // ==========================
    // ACCOUNT
    // ==========================
    {
      section: 'ACCOUNT',
      title: 'Settings',
      icon: 'bi bi-gear-fill',
      route: '/student-settings'
    }

  ];

  constructor(private layoutService: LayoutService) { }

  ngOnInit(): void {
    this.layoutService.sidebarCollapsed$.subscribe(collapsed => {
      this.collapsed = collapsed;
    });
  }

  toggleSidebar(): void {
    this.layoutService.toggleSidebar();
  }

}