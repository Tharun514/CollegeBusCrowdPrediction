import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { StopService } from '../../services/stop.service';
import { RouteService } from '../../services/route.service';

import { Stop } from '../../models/stop';
import { Route } from '../../models/route';

import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-edit-stop',
  templateUrl: './edit-stop.component.html',
  styleUrls: ['./edit-stop.component.css']
})
export class EditStopComponent implements OnInit {

  stopForm!: FormGroup;

  stopId!: number;

  routes: Route[] = [];

  constructor(
    private fb: FormBuilder,
    private stopService: StopService,
    private routeService: RouteService,
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertService
  ) { }

  ngOnInit(): void {

    this.stopForm = this.fb.group({

      routeId: ['', Validators.required],
      stopName: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      sequence: ['', Validators.required],
      isMajorStop: [false]

    });

    this.stopId = Number(this.route.snapshot.paramMap.get('id'));

    this.loadRoutes();

    this.loadStop();

  }

  loadRoutes(): void {

    this.routeService.getAllRoutes().subscribe({

      next: (data) => {

        this.routes = data;

      },

      error: () => {

        this.alert.error('Failed to Load Routes');

      }

    });

  }

  loadStop(): void {

    this.stopService.getStopById(this.stopId).subscribe({

      next: (data: Stop) => {

        this.stopForm.patchValue(data);

      },

      error: () => {

        this.alert.error('Failed to Load Stop');

        this.router.navigate(['/stops']);

      }

    });

  }

  updateStop(): void {

    if (this.stopForm.invalid) {

      this.stopForm.markAllAsTouched();

      this.alert.warning('Please fill all required fields');

      return;

    }

    const stop: Stop = this.stopForm.value;

    this.stopService.updateStop(this.stopId, stop).subscribe({

      next: () => {

        this.alert.success('Stop Updated Successfully');

        setTimeout(() => {

          this.router.navigate(['/stops']);

        }, 1000);

      },

      error: () => {

        this.alert.error('Failed to Update Stop');

      }

    });

  }

}