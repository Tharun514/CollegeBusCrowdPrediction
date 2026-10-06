import { Component, OnInit } from '@angular/core';
import { Stop } from '../../models/stop';
import { StopService } from '../../services/stop.service';
import { ToastService } from '../../services/toast.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.css']
})
export class StopsComponent implements OnInit {

  stops: Stop[] = [];
  allStops: Stop[] = [];

  searchText: string = '';
  p: number = 1;

  constructor(
    private stopService: StopService,
    private toast: ToastService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    this.loadStops();
  }

  loadStops(): void {

    this.stopService.getAllStops().subscribe({

      next: (data: Stop[]) => {

        console.log('Stops Loaded:', data);

        this.stops = data;
        this.allStops = data;

      },

      error: (error: any) => {

        console.error('Load Stops Error:', error);

        this.toast.error('Failed to Load Stops');

      }

    });

  }

  searchStops(): void {

    const search = this.searchText.toLowerCase().trim();

    if (search === '') {

      this.stops = this.allStops;

      return;

    }

    this.stops = this.allStops.filter(stop =>

      stop.stopName.toLowerCase().includes(search) ||

      stop.routeId.toString().includes(search)

    );

  }

  async deleteStop(id: number): Promise<void> {

    const confirmed = await this.alert.confirmDelete('Stop');

    if (!confirmed) {
      return;
    }

    this.stopService.deleteStop(id).subscribe({

      next: () => {

        this.alert.success('Stop Deleted Successfully');

        this.loadStops();

      },

      error: (error: any) => {

        console.error('Delete Stop Error:', error);

        this.alert.error('Failed to Delete Stop');

      }

    });

  }

}