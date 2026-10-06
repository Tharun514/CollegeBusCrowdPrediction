import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { LayoutService } from 'src/app/services/layout.service';
import { AlertService } from 'src/app/services/alert.service';
import { Notification } from '../../models/notification';

@Component({
  selector: 'app-student-navbar',
  templateUrl: './student-navbar.component.html',
  styleUrls: ['./student-navbar.component.css']
})
export class StudentNavbarComponent implements OnInit {

  studentName = '';

  searchQuery = '';

  showNotifications = false;

  notifications: Notification[] = [];

  activeReplyId: number | null = null;

  replyText = '';

  // ===========================
  // GLOBAL SEARCH
  // ===========================

  pages = [

    {
      title: 'Dashboard',
      description: 'Student Dashboard',
      route: '/student-dashboard',
      icon: 'bi bi-grid-1x2-fill'
    },

    {
      title: 'My Profile',
      description: 'Student Profile',
      route: '/student-profile',
      icon: 'bi bi-person-fill'
    },

    {
      title: 'My Bus',
      description: 'Assigned Bus',
      route: '/student-bus',
      icon: 'bi bi-bus-front-fill'
    },

    {
      title: 'My Route',
      description: 'Bus Route',
      route: '/student-route',
      icon: 'bi bi-sign-turn-right-fill'
    },

    {
      title: 'Attendance',
      description: 'Attendance Records',
      route: '/student-attendance',
      icon: 'bi bi-calendar-check-fill'
    },

    {
      title: 'Notifications',
      description: 'Alerts & Messages',
      route: '/student-notifications',
      icon: 'bi bi-bell-fill'
    },

    {
      title: 'Complaints',
      description: 'Student Complaints',
      route: '/student-complaint',
      icon: 'bi bi-chat-left-text-fill'
    },

    {
      title: 'Settings',
      description: 'Student Settings',
      route: '/student-settings',
      icon: 'bi bi-gear-fill'
    },

    {
      title: 'Theme',
      description: 'Appearance',
      route: '/student-theme',
      icon: 'bi bi-palette-fill'
    }

  ];

  filteredPages: any[] = [];

  selectedIndex = 0;

  constructor(
    private router: Router,
    private studentService: StudentService,
    public layoutService: LayoutService,
    private alert: AlertService
  ) {
    this.searchQuery = '';

  }

  ngOnInit(): void {

    // Clear Chrome autofill
    this.searchQuery = '';

    setTimeout(() => {
      this.searchQuery = '';
    }, 100);

    this.studentName =
      sessionStorage.getItem('studentName') || 'Student';

    const studentId =
      Number(sessionStorage.getItem('studentId'));

    if (studentId) {

      this.studentService.getNotifications(studentId).subscribe({

        next: (data) => {

          this.notifications = data;

        },

        error: () => {

          this.notifications = [

            {
              notificationId: 1,
              title: '🚨 Bus Crowd Alert',
              message: 'Your assigned Bus 5 has HIGH occupancy today.',
              type: 'alert',
              status: 'unread',
              createdAt: new Date().toISOString()
            },

            {
              notificationId: 2,
              title: '📍 Bus Departure',
              message: 'Bus 5 is leaving campus in 10 minutes.',
              type: 'info',
              status: 'unread',
              createdAt: new Date().toISOString()
            }

          ];

        }

      });

    }

  }

  // ===========================
  // SEARCH
  // ===========================

  onSearch(): void {

    const value =
      this.searchQuery.trim().toLowerCase();

    if (!value) {

      this.filteredPages = [];

      return;

    }

    this.filteredPages = this.pages.filter(page =>
      page.title.toLowerCase().includes(value) ||
      page.description.toLowerCase().includes(value)
    );

    this.selectedIndex = 0;

  }

  handleKeyDown(event: KeyboardEvent): void {

    if (!this.filteredPages.length) return;

    if (event.key === 'ArrowDown') {

      event.preventDefault();

      this.selectedIndex =
        (this.selectedIndex + 1) % this.filteredPages.length;

    }

    else if (event.key === 'ArrowUp') {

      event.preventDefault();

      this.selectedIndex =
        (this.selectedIndex - 1 + this.filteredPages.length) %
        this.filteredPages.length;

    }

    else if (event.key === 'Enter') {

      this.goToPage(
        this.filteredPages[this.selectedIndex].route
      );

    }

  }

  goToPage(route: string): void {

    this.router.navigate([route]);

    this.searchQuery = '';

    this.filteredPages = [];

  }

  // ===========================

  toggleSidebar(): void {

    this.layoutService.toggleSidebar();

  }

  toggleNotifications(): void {

    this.showNotifications =
      !this.showNotifications;

  }

  closeNotifications(): void {

    this.showNotifications = false;

    this.activeReplyId = null;

  }

  toggleReply(id?: number): void {

    if (!id) return;

    this.activeReplyId =
      this.activeReplyId === id ? null : id;

    this.replyText = '';

  }

  submitReply(id?: number): void {

    if (!id || !this.replyText.trim()) return;

    this.alert.success(
      'Note sent successfully!'
    );

    this.replyText = '';

    this.activeReplyId = null;

  }

  async logout(): Promise<void> {

    const confirmed =
      await this.alert.confirm(
        'Logout Confirmation',
        'Are you sure you want to logout?'
      );

    if (!confirmed) return;

    sessionStorage.clear();

    this.router.navigateByUrl('/student-login');

  }
  @HostListener('document:click')
  documentClick(): void {

    this.showNotifications = false;

  }

  stopPropagation(event: MouseEvent): void {

    event.stopPropagation();

  }

}