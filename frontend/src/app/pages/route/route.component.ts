import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Route } from '../../models/route';
import { RouteService } from '../../services/route.service';
import { ToastService } from '../../services/toast.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

  routes: Route[] = [];
  allRoutes: Route[] = [];
  searchText: string = '';

  constructor(
    private routeService: RouteService,
    private router: Router,
    private toast: ToastService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {

    this.loadRoutes();

  }

  loadRoutes(): void {

    this.routeService.getAllRoutes().subscribe({

      next: (data) => {

        console.log(data);

        this.allRoutes = data;
        this.filterRoutes();

      },

      error: (error) => {

        console.log(error);

        this.toast.error('Failed to Load Routes');

      }

    });

  }

  editRoute(id: number): void {

    this.router.navigate(['/edit-route', id]);

  }

  async deleteRoute(id: number): Promise<void> {

    const confirmed = await this.alert.confirmDelete('Route');

    if (!confirmed) {
      return;
    }

    this.routeService.deleteRoute(id).subscribe({

      next: () => {

        this.alert.success('Route Deleted Successfully');

        this.loadRoutes();

      },

      error: () => {

        this.alert.error('Failed to Delete Route');

      }

    });

  }

  filterRoutes(): void {
    if (!this.searchText.trim()) {
      this.routes = [...this.allRoutes];
    } else {
      const q = this.searchText.toLowerCase().trim();
      this.routes = this.allRoutes.filter(r => 
        (r.routeName && r.routeName.toLowerCase().includes(q)) ||
        (r.routeCode && r.routeCode.toLowerCase().includes(q)) ||
        (r.startPoint && r.startPoint.toLowerCase().includes(q)) ||
        (r.endPoint && r.endPoint.toLowerCase().includes(q))
      );
    }
  }
}