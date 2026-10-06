import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { BusService } from '../../services/bus.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-edit-bus',
  templateUrl: './edit-bus.component.html',
  styleUrls: ['./edit-bus.component.css']
})
export class EditBusComponent implements OnInit {

  busForm!: FormGroup;
  id!: number;

  constructor(
    private fb: FormBuilder,
    private busService: BusService,
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertService
  ) { }

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (!this.id) {
      this.alert.error('Invalid Bus ID');
      this.router.navigate(['/buses']);
      return;
    }

    this.busForm = this.fb.group({

      busNo: ['', Validators.required],

      registrationNumber: ['', Validators.required],

      capacity: ['', [
        Validators.required,
        Validators.min(1)
      ]],

      currentLat: ['', Validators.required],

      currentLng: ['', Validators.required],

      status: ['', Validators.required],

      driverId: ['', [
        Validators.required,
        Validators.min(1)
      ]],

      routeId: ['', [
        Validators.required,
        Validators.min(1)
      ]],

      speed: ['', [
        Validators.required,
        Validators.min(0)
      ]],

      currentStop: ['', Validators.required],

      nextStop: ['', Validators.required]

    });

    this.loadBus();

  }

  loadBus(): void {

    this.busService.getBusById(this.id).subscribe({

      next: (data) => {

        console.log(data);

        this.busForm.patchValue(data);

      },

      error: (error) => {

        console.error(error);

        this.alert.error('Failed to Load Bus');

        this.router.navigate(['/buses']);

      }

    });

  }

  updateBus(): void {

    if (this.busForm.invalid) {

      this.busForm.markAllAsTouched();

      this.alert.warning('Please fill all required fields');

      return;

    }

    this.busService.updateBus(this.id, this.busForm.value).subscribe({

      next: () => {

        this.alert.success('Bus Updated Successfully');

        setTimeout(() => {

          this.router.navigate(['/buses']);

        }, 1000);

      },

      error: (error) => {

        console.error(error);

        if (error.status === 400) {

          this.alert.error('Invalid Bus Details');

        } else if (error.status === 404) {

          this.alert.error('Bus Not Found');

        } else if (error.status === 500) {

          this.alert.error('Internal Server Error');

        } else {

          this.alert.error('Failed to Update Bus');

        }

      }

    });

  }

  get f() {
    return this.busForm.controls;
  }

}