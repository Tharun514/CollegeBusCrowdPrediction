import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/services/layout.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  username: string = '';

  loading = false;

  isSidebarCollapsed = false;

  isDarkTheme = false;

  constructor(
    private router: Router,
    public layoutService: LayoutService,
    private settingsService: SettingsService
  ) {

    this.username = sessionStorage.getItem('username') || '';

    this.router.events.subscribe(() => {

      this.loading = true;

      setTimeout(() => {

        this.loading = false;

      }, 350);

    });

  }

  ngOnInit(): void {
    this.layoutService.sidebarCollapsed$.subscribe(collapsed => {
      this.isSidebarCollapsed = collapsed;
    });
    this.settingsService.theme$.subscribe(theme => {
      this.isDarkTheme = theme === 'dark';
    });
  }

  toggleSidebar(): void {
    this.layoutService.toggleSidebar();
  }

  logout(): void {

    sessionStorage.clear();

    this.router.navigateByUrl('/', { replaceUrl: true });

  }

}