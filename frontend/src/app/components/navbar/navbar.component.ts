import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/services/layout.service';
import { AlertService } from 'src/app/services/alert.service';
import { GlobalSearchService, SearchResult } from 'src/app/services/adminglobal-search.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

interface Notification {

  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
  replies: string[];

}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  username = '';

  searchQuery = '';

  searchResults: SearchResult[] = [];

  showSearchResults = false;

  private searchSubject = new Subject<string>();

  showNotifications = false;

  activeReplyId: number | null = null;

  replyText = '';

  notifications: Notification[] = [

    {
      id: 1,
      title: 'Bus Occupancy',
      message: 'Bus 05 reached 92% occupancy.',
      time: '2 mins ago',
      read: false,
      replies: []
    },

    {
      id: 2,
      title: 'Route Update',
      message: 'Route 3 has a temporary traffic delay.',
      time: '15 mins ago',
      read: false,
      replies: []
    },

    {
      id: 3,
      title: 'Maintenance',
      message: 'Bus 12 scheduled for maintenance tomorrow.',
      time: 'Today',
      read: false,
      replies: []
    }

  ];

  constructor(
    private router: Router,
    public layoutService: LayoutService,
    private alert: AlertService,
    private globalSearch: GlobalSearchService
  ) {

    this.username =
      sessionStorage.getItem('fullName') ||
      sessionStorage.getItem('username') ||
      'Administrator';
    this.searchSubject
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(value => {

        if (!value.trim()) {

          this.searchResults = [];
          this.showSearchResults = false;
          return;

        }

        this.globalSearch.search(value).subscribe(results => {

          this.searchResults = results;
          this.showSearchResults = true;

        });

      });

  }

  get unreadCount(): number {

    return this.notifications.filter(x => !x.read).length;

  }

  toggleSidebar(): void {

    this.layoutService.toggleSidebar();

  }

  toggleNotifications(): void {

    this.showNotifications = !this.showNotifications;

  }

  closeNotifications(): void {

    this.showNotifications = false;

    this.activeReplyId = null;

  }

  markAllAsRead(): void {

    this.notifications.forEach(x => x.read = true);

  }

  toggleReply(id: number): void {

    this.activeReplyId =
      this.activeReplyId === id ? null : id;

    this.replyText = '';

  }

  submitReply(id: number): void {

    if (!this.replyText.trim()) {

      return;

    }

    const notification = this.notifications.find(x => x.id === id);

    if (!notification) {

      return;

    }

    notification.replies.push(this.replyText.trim());

    notification.read = true;

    this.replyText = '';

    this.activeReplyId = null;

  }
  performSearch(): void {

    if (this.searchResults.length > 0) {

      this.selectResult(this.searchResults[0]);

    }

  }

  onSearchChange(): void {

    this.searchSubject.next(this.searchQuery);

  }

  selectResult(result: SearchResult): void {

    this.searchQuery = '';

    this.showSearchResults = false;

    this.router.navigate([result.route]);

  }

  async logout(): Promise<void> {

    const confirmed = await this.alert.confirm(
      'Logout Confirmation',
      'Are you sure you want to log out of the Admin Portal?'
    );

    if (!confirmed) {
      return;
    }

    sessionStorage.clear();

    this.router.navigateByUrl('/', {

      replaceUrl: true

    });

  }

  @HostListener('document:click')
  clickedOutside(): void {

    this.closeNotifications();

    setTimeout(() => {
      this.showSearchResults = false;
    }, 150);

  }

  stopPropagation(event: MouseEvent): void {

    event.stopPropagation();

  }

}