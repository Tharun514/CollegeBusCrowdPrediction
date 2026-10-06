import { Component, OnInit, OnDestroy } from '@angular/core';

import { Bus } from 'src/app/models/bus';
import { BusOccupancy } from 'src/app/models/bus-occupancy';

import { BusService } from 'src/app/services/bus.service';
import { BusOccupancyService } from 'src/app/services/bus-occupancy.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-bus-occupancy',
  templateUrl: './bus-occupancy.component.html',
  styleUrls: ['./bus-occupancy.component.css']
})
export class BusOccupancyComponent implements OnInit, OnDestroy {

  occupancies: BusOccupancy[] = [];
  buses: Bus[] = [];
  selectedBusId: number = 0;
  totalBuses = 0;
  totalOccupied = 0;
  totalAvailable = 0;
  averageOccupancy = 0;
  searchText = '';
  currentPage = 1;
  itemsPerPage = 5;
  refreshInterval: any;
  lastUpdated = '';

  constructor(
    private busService: BusService,
    private busOccupancyService: BusOccupancyService,
    private toast: ToastService
  ) { }

  ngOnInit(): void {

    this.loadBuses();

    this.loadOccupancy();

    this.refreshInterval = setInterval(() => {

      this.loadOccupancy();

    }, 15000);

  }

  ngOnDestroy(): void {

    if (this.refreshInterval) {

      clearInterval(this.refreshInterval);

    }

  }

  loadBuses(): void {

    this.busService.getAllBuses().subscribe({

      next: (data: Bus[]) => {

        this.buses = data;

      },

      error: (error: any) => {

        console.error(error);

      }

    });

  }

  loadOccupancy(): void {

    this.busOccupancyService.getAllOccupancy().subscribe({

      next: (data: BusOccupancy[]) => {

        this.occupancies = data;

        this.calculateSummary();

        this.lastUpdated = new Date().toLocaleTimeString();

      },

      error: (error: any) => {

        console.error(error);

      }

    });

  }

  generateOccupancy(): void {

    if (this.selectedBusId === 0) {

      alert('Please select a Bus');

      return;

    }

    this.busOccupancyService.generateOccupancy(this.selectedBusId).subscribe({

      next: (response: any) => {

        alert(response);

        this.loadOccupancy();

      },

      error: (error: any) => {

        console.error(error);

      }

    });

  }

  getBusNumber(busId: number): string {

    const bus = this.buses.find(b => b.busId === busId);

    return bus ? bus.busNo : 'N/A';

  }

  calculateSummary(): void {

    this.totalBuses = this.occupancies.length;

    this.totalOccupied = this.occupancies.reduce(
      (sum, item) => sum + (item.occupied || 0), 0
    );

    this.totalAvailable = this.occupancies.reduce(
      (sum, item) => sum + (item.available || 0), 0
    );

    const totalPercentage = this.occupancies.reduce(
      (sum, item) => sum + Number(item.occupancyPercentage || 0), 0
    );

    this.averageOccupancy = this.totalBuses > 0
      ? +(totalPercentage / this.totalBuses).toFixed(2)
      : 0;

  }
  get filteredOccupancies(): BusOccupancy[] {

    return this.occupancies.filter(o =>
      this.getBusNumber(o.busId!)
        .toLowerCase()
        .includes(this.searchText.toLowerCase())
    );

  }

  get paginatedOccupancies(): BusOccupancy[] {

    const start = (this.currentPage - 1) * this.itemsPerPage;

    return this.filteredOccupancies.slice(start, start + this.itemsPerPage);

  }

  get totalPages(): number {

    return Math.ceil(this.filteredOccupancies.length / this.itemsPerPage);

  }

  nextPage(): void {

    if (this.currentPage < this.totalPages) {

      this.currentPage++;

    }

  }

  previousPage(): void {

    if (this.currentPage > 1) {

      this.currentPage--;

    }

  }

  generateAllOccupancy(): void {

    this.busOccupancyService.generateAllOccupancy().subscribe({

      next: (response: any) => {

        this.toast.success('Occupancy generated successfully.');

        this.loadOccupancy();

      },

      error: (error: any) => {

        console.error(error);

        this.toast.error('Unable to generate occupancy.');

      }

    });

  }

}