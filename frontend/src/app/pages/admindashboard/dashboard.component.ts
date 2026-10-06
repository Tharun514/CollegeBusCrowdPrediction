import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../../models/dashboard';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboard: Dashboard = {
    totalStudents: 0,
    totalDrivers: 0,
    totalBuses: 0,
    totalRoutes: 0,
    totalAttendance: 0,
    totalComplaints: 0
  };

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.loadDashboard();
  }

  loadDashboard(): void {

    this.dashboardService.getDashboardCounts().subscribe({

      next: (data) => {

        this.dashboard = data;

      },

      error: (error) => {

        console.error('Error loading dashboard:', error);

      }

    });

  }

}