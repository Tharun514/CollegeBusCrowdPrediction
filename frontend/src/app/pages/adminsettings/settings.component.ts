import { Component, OnInit } from '@angular/core';
import { SettingsService, Settings } from 'src/app/services/settings.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings: Settings = {
    collegeName: '',
    collegeCode: '',
    email: '',
    phone: '',
    website: '',
    address: ''
  };

  constructor(
    private settingsService: SettingsService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loadSettings();
  }

  loadSettings(): void {
    this.settingsService.getSettings().subscribe({
      next: (data) => {
        if (data) {
          this.settings = data;
        }
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  saveSettings(): void {
    this.settingsService.saveSettings(this.settings).subscribe({
      next: (res) => {
        this.settings = res;
        this.toastr.success(
          'College information saved successfully.',
          'Success'
        );
      },
      error: (err) => {
        console.error(err);
        this.toastr.error(
          'Unable to save settings.',
          'Error'
        );
      }
    });
  }

}