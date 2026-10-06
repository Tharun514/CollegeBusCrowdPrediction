import { Component, OnInit } from '@angular/core';
import { Notification } from '../../models/notification';
import { NotificationService } from '../../services/notification.service';
import { AlertService } from '../../services/alert.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications: Notification[] = [];
  allNotifications: Notification[] = [];

  searchText = '';
  p = 1;

  constructor(
    private notificationService: NotificationService,
    private alert: AlertService,
    private toast: ToastService
  ) { }

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications() {
    this.notificationService.getAllNotifications().subscribe({

      next: (data) => {
        this.notifications = data;
        this.allNotifications = data;
      },

      error: () => {
        this.toast.error('Failed to Load Notifications');
      }

    });
  }

  searchNotifications() {

    const search = this.searchText.toLowerCase().trim();

    if (search === '') {
      this.notifications = this.allNotifications;
      return;
    }

    this.notifications = this.allNotifications.filter(n =>

      n.title.toLowerCase().includes(search) ||

      n.type.toLowerCase().includes(search) ||

      n.status.toLowerCase().includes(search)

    );

  }

  async deleteNotification(id: number) {

    const confirmed = await this.alert.confirmDelete('Notification');

    if (!confirmed) return;

    this.notificationService.deleteNotification(id).subscribe({

      next: () => {

        this.alert.success('Notification Deleted');

        this.loadNotifications();

      },

      error: () => {

        this.alert.error('Failed to Delete Notification');

      }

    });

  }

}