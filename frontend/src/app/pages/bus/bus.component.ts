import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Bus } from '../../models/bus';
import { BusService } from '../../services/bus.service';
import { ToastService } from '../../services/toast.service';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {

  buses: Bus[] = [];
  allBuses: Bus[] = [];
  searchText: string = '';

  constructor(
    private busService: BusService,
    private router: Router,
    private toast: ToastService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {

    this.loadBuses();

  }

  loadBuses(): void {

    this.busService.getAllBuses().subscribe({

      next: (data) => {

        console.log(data);

        this.allBuses = data;
        this.filterBuses();

      },

      error: (error) => {

        console.log(error);

        this.toast.error('Failed to Load Buses');

      }

    });

  }

  editBus(id: number): void {

    this.router.navigate(['/edit-bus', id]);

  }

  async deleteBus(id: number): Promise<void> {

  const confirmed = await this.alert.confirmDelete('Bus');

  if (!confirmed) {
    return;
  }

  this.busService.deleteBus(id).subscribe({

    next: () => {

      this.alert.success('Bus Deleted Successfully');

      this.loadBuses();

    },

    error: () => {

      this.alert.error('Failed to Delete Bus');

    }

  });

}

  filterBuses(): void {
    if (!this.searchText.trim()) {
      this.buses = [...this.allBuses];
    } else {
      const q = this.searchText.toLowerCase().trim();
      this.buses = this.allBuses.filter(b => 
        (b.busNo && b.busNo.toLowerCase().includes(q)) ||
        (b.registrationNumber && b.registrationNumber.toLowerCase().includes(q)) ||
        (b.status && b.status.toLowerCase().includes(q)) ||
        (b.currentStop && b.currentStop.toLowerCase().includes(q)) ||
        (b.nextStop && b.nextStop.toLowerCase().includes(q))
      );
    }
  }
}