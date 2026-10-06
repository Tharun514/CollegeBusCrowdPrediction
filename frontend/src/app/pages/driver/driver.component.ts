import { Component, OnInit } from '@angular/core';
import { Driver } from '../../models/driver';
import { DriverService } from '../../services/driver.service';
import { ToastService } from '../../services/toast.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  drivers: Driver[] = [];
  allDrivers: Driver[] = [];
  searchText: string = '';

  constructor(
    private driverService: DriverService,
    private toast: ToastService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    this.loadDrivers();
  }

  loadDrivers(): void {

    this.driverService.getAllDrivers().subscribe({

      next: (data) => {

        console.log(data);

        this.allDrivers = data;
        this.filterDrivers();

      },

      error: (error) => {

        console.log(error);

        this.toast.error('Failed to Load Drivers');

      }

    });

  }

  async deleteDriver(id: number): Promise<void> {

    const confirmed = await this.alert.confirmDelete('Driver');

    if (!confirmed) {
      return;
    }

    this.driverService.deleteDriver(id).subscribe({

      next: () => {

        this.alert.success('Driver Deleted Successfully');

        this.loadDrivers();

      },

      error: () => {

        this.alert.error('Failed to Delete Driver');

      }

    });

  }

  filterDrivers(): void {
    if (!this.searchText.trim()) {
      this.drivers = [...this.allDrivers];
    } else {
      const q = this.searchText.toLowerCase().trim();
      this.drivers = this.allDrivers.filter(d => 
        (d.name && d.name.toLowerCase().includes(q)) ||
        (d.phone && d.phone.toLowerCase().includes(q)) ||
        (d.license && d.license.toLowerCase().includes(q)) ||
        (d.status && d.status.toLowerCase().includes(q))
      );
    }
  }
}