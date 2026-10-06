import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  selectedTheme = 'light';

  constructor(
    private settingsService: SettingsService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

    this.settingsService.getSettings().subscribe({

      next: (data: any) => {

        if (data.theme) {

          this.selectedTheme = data.theme;

          this.applyTheme(this.selectedTheme);

        }

      }

    });

  }

  saveTheme(): void {

    this.settingsService.saveTheme(this.selectedTheme).subscribe({

      next: () => {

        this.applyTheme(this.selectedTheme);

        this.toastr.success('Theme Updated Successfully', 'Success');

      },

      error: () => {

        this.toastr.error('Failed to save theme', 'Error');

      }

    });

  }

  applyTheme(theme: string): void {

    if (theme === 'dark') {

      document.body.classList.add('dark-theme');

    } else {

      document.body.classList.remove('dark-theme');

    }

  }

}