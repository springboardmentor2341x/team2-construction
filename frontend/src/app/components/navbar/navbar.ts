import { Component, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  authService = inject(AuthService);
  notificationService = inject(NotificationService);
  
  @Output() toggleSidebar = new EventEmitter<void>();

  showNotifications = false;
  showProfileMenu = false;

  notifications: any[] = [];
  unreadCount = 0;

  constructor() {
    this.notificationService.unreadCount$.subscribe(count => {
      this.unreadCount = count;
    });
  }

  get userRoleLabel(): string {
    const role = this.authService.userRole();
    if (!role) return '';
    return role.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  toggleNotify() {
    this.showNotifications = !this.showNotifications;
    this.showProfileMenu = false;
    
    if (this.showNotifications) {
      // Load latest unread/read notifications when opening dropdown
      this.notificationService.getNotifications().subscribe(data => {
        this.notifications = data.slice(0, 5); // Just show top 5 in dropdown
      });
    }
  }

  toggleProfile() {
    this.showProfileMenu = !this.showProfileMenu;
    this.showNotifications = false;
  }

  markAllAsRead() {
    this.notificationService.markAllAsRead().subscribe(() => {
      this.notifications.forEach(n => n.is_read = true);
    });
  }

  markAsRead(id: string) {
    this.notificationService.markAsRead(id).subscribe(() => {
      const note = this.notifications.find(n => n.id === id);
      if (note) note.is_read = true;
    });
  }

  logout() {
    this.authService.logout();
  }
}
