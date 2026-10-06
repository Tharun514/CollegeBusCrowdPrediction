import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-student-layout',
  templateUrl: './student-layout.component.html',
  styleUrls: ['./student-layout.component.css']
})
export class StudentLayoutComponent implements OnInit {

  studentName: string = '';

  loading = false;

  isSidebarCollapsed = false;

  constructor(
    private router: Router,
    public layoutService: LayoutService
  ) {

    this.studentName = sessionStorage.getItem('studentName') || '';

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
  }

  toggleSidebar(): void {
    this.layoutService.toggleSidebar();
  }

  logout(): void {

    sessionStorage.clear();

    this.router.navigateByUrl('/student-login', { replaceUrl: true });

  }

}