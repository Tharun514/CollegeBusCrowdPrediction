import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ComplaintService } from '../../services/complaint.service';
import { Complaint } from '../../models/complaint';

import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-edit-complaint',
  templateUrl: './edit-complaint.component.html',
  styleUrls: ['./edit-complaint.component.css']
})
export class EditComplaintComponent implements OnInit {

  complaintForm!: FormGroup;

  complaintId!: number;

  complaint!: Complaint;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private complaintService: ComplaintService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {

    this.complaintId = Number(this.route.snapshot.paramMap.get('id'));

    this.complaintForm = this.fb.group({

      status: ['', Validators.required],

      resolvedBy: [''],

      resolvedAt: ['']

    });

    this.loadComplaint();

  }

  loadComplaint() {

    this.complaintService.getComplaintById(this.complaintId).subscribe({

      next: (data) => {

        this.complaint = data;

        this.complaintForm.patchValue({

          status: data.status,

          resolvedBy: data.resolvedBy,

          resolvedAt: data.resolvedAt

        });

      }

    });

  }

  updateComplaint() {

    const updatedComplaint: Complaint = {

      ...this.complaint,

      ...this.complaintForm.value

    };

    // Automatically set resolved date when complaint is resolved
    if (updatedComplaint.status === 'RESOLVED') {
      updatedComplaint.resolvedAt = new Date().toISOString();
    }

    this.complaintService
      .updateComplaint(this.complaintId, updatedComplaint)
      .subscribe({

        next: () => {

          this.alert.success('Complaint Updated Successfully');
          this.router.navigate(['/complaints']);

        },

        error: () => {

          this.alert.error('Failed to Update Complaint');

        }

      });

  }
}