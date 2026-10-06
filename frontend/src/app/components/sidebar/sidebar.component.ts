import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';

interface MenuItem {
  title: string;
  icon: string;
  route: string;
  section?: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  collapsed = false;

  menu: MenuItem[] = [

    // ==========================
    // MAIN
    // ==========================

    {
      section: 'MAIN',
      title: 'Dashboard',
      icon: 'bi bi-grid-1x2-fill',
      route: '/dashboard'
    },

    // ==========================
    // MANAGEMENT
    // ==========================

    {
      section: 'MANAGEMENT',
      title: 'Students',
      icon: 'bi bi-people-fill',
      route: '/students'
    },
    {
      title: 'Drivers',
      icon: 'bi bi-person-badge-fill',
      route: '/drivers'
    },
    {
      title: 'Buses',
      icon: 'bi bi-bus-front-fill',
      route: '/buses'
    },
    {
      title: 'Routes',
      icon: 'bi bi-sign-turn-right-fill',
      route: '/routes'
    },
    {
      title: 'Stops',
      icon: 'bi bi-geo-alt-fill',
      route: '/stops'
    },

    // ==========================
    // OPERATIONS
    // ==========================

    {
      section: 'OPERATIONS',
      title: 'Attendance',
      icon: 'bi bi-calendar-check-fill',
      route: '/attendance'
    },
    {
      title: 'Assignments',
      icon: 'bi bi-diagram-2-fill',
      route: '/student-bus-assignment'
    },
    {
      title: 'Bus Occupancy',
      icon: 'bi bi-bar-chart-line-fill',
      route: '/bus-occupancy'
    },

    // ==========================
    // COMMUNICATION
    // ==========================

    {
      section: 'COMMUNICATION',
      title: 'Notifications',
      icon: 'bi bi-bell-fill',
      route: '/notifications'
    },
    {
      title: 'Complaints',
      icon: 'bi bi-chat-left-text-fill',
      route: '/complaints'
    },

    // ==========================
    // ACCOUNT
    // ==========================
    {
      section: 'ACCOUNT',
      title: 'Settings',
      icon: 'bi bi-gear-fill',
      route: '/settings'
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