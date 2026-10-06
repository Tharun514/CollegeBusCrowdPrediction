import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RouteService } from '../../services/route.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-add-route',
  templateUrl: './add-route.component.html',
  styleUrls: ['./add-route.component.css']
})
export class AddRouteComponent {

  routeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private routeService: RouteService,
    private router: Router,
    private alert: AlertService
  ) {

    this.routeForm = this.fb.group({

      routeName: ['', Validators.required],

      routeCode: ['', Validators.required],

      startPoint: ['', Validators.required],

      endPoint: ['', Validators.required],

      distance: ['', Validators.required],

      expectedTime: ['', Validators.required],

      isActive: [true]

    });

  }

  saveRoute(): void {

    if (this.routeForm.valid) {

      this.routeService.saveRoute(this.routeForm.value).subscribe({

        next: (data) => {

          console.log(data);

          this.alert.success('Route Saved Successfully');

          this.router.navigate(['/routes']);

        },

        error: (error) => {

          console.log(error);

          this.alert.error('Failed to Save Route');

        }

      });

    } else {

      this.alert.warning('Please fill all required fields');

    }

  }

}