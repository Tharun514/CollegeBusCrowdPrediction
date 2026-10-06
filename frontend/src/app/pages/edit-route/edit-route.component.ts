import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { RouteService } from '../../services/route.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-edit-route',
  templateUrl: './edit-route.component.html',
  styleUrls: ['./edit-route.component.css']
})
export class EditRouteComponent implements OnInit {

  routeForm!: FormGroup;
  id!: number;

  constructor(
    private fb: FormBuilder,
    private routeService: RouteService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alert: AlertService
  ) { }

  ngOnInit(): void {

    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    if (!this.id) {
      this.alert.error('Invalid Route ID');
      this.router.navigate(['/routes']);
      return;
    }

    this.routeForm = this.fb.group({

      routeName: ['', Validators.required],

      routeCode: ['', Validators.required],

      startPoint: ['', Validators.required],

      endPoint: ['', Validators.required],

      distance: ['', [
        Validators.required,
        Validators.min(0)
      ]],

      expectedTime: ['', Validators.required],

      isActive: [true]

    });

    this.loadRoute();

  }

  loadRoute(): void {

    this.routeService.getRouteById(this.id).subscribe({

      next: (data) => {

        console.log(data);

        this.routeForm.patchValue(data);

      },

      error: (error) => {

        console.error(error);

        this.alert.error('Failed to Load Route');

        this.router.navigate(['/routes']);

      }

    });

  }

  updateRoute(): void {

    if (this.routeForm.invalid) {

      this.routeForm.markAllAsTouched();

      this.alert.warning('Please fill all required fields');

      return;

    }

    this.routeService.updateRoute(this.id, this.routeForm.value).subscribe({

      next: () => {

        this.alert.success('Route Updated Successfully');

        setTimeout(() => {

          this.router.navigate(['/routes']);

        }, 1000);

      },

      error: (error) => {

        console.error(error);

        if (error.status === 400) {

          this.alert.error('Invalid Route Details');

        } else if (error.status === 404) {

          this.alert.error('Route Not Found');

        } else if (error.status === 500) {

          this.alert.error('Internal Server Error');

        } else {

          this.alert.error('Failed to Update Route');

        }

      }

    });

  }

  get f() {
    return this.routeForm.controls;
  }

}