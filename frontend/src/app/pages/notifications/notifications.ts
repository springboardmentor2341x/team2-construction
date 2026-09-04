import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotificationService, Notification } from '../../services/notification.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './notifications.html'
})
export class NotificationsComponent implements OnInit {
  notificationService = inject(NotificationService);

  notifications: Notification[] = [];
  filterUnreadOnly: boolean = false;
  isLoading = true;

  ngOnInit() {
    this.loadNotifications();
  }

  loadNotifications() {
    this.isLoading = true;
    this.notificationService.getNotifications(this.filterUnreadOnly).subscribe({
      next: (data) => {
        this.notifications = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  toggleFilter() {
    this.filterUnreadOnly = !this.filterUnreadOnly;
    this.loadNotifications();
  }

  markAsRead(id: string) {
    this.notificationService.markAsRead(id).subscribe(() => {
      const note = this.notifications.find(n => n.id === id);
      if (note) {
        note.is_read = true;
      }
      if (this.filterUnreadOnly) {
        this.loadNotifications();
      }
    });
  }

  markAllAsRead() {
    this.notificationService.markAllAsRead().subscribe(() => {
      this.notifications.forEach(n => n.is_read = true);
      if (this.filterUnreadOnly) {
        this.loadNotifications();
      }
    });
  }

  getRouteForNotification(n: Notification): any[] | null {
    if (!n.related_entity_type || !n.related_entity_id) return null;
    
    switch (n.related_entity_type) {
      case 'PROCUREMENT':
        return ['/procurement/requests'];
      case 'PROJECT':
        return ['/project-manager/projects', n.related_entity_id];
      case 'ATTENDANCE':
        return ['/workforce-management/attendance'];
      default:
        return null;
    }
  }
}
