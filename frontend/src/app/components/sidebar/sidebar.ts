import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {
  authService = inject(AuthService);
  route = inject(ActivatedRoute);

  @Input() collapsed = false;

  // Reactively track the query parameters
  queryParams = toSignal(this.route.queryParams);

  get activeModule(): string {
    // Return custom default based on role if no module query param is active
    const moduleParam = this.queryParams()?.['module'];
    if (moduleParam) return moduleParam;

    const role = this.authService.userRole();
    if (role === 'worker') return 'attendance';
    return 'overview';
  }

  // Generate dynamic links depending on the logged-in role
  get menuItems() {
    const role = this.authService.userRole();
    if (!role) return [];

    switch (role) {
      case 'admin':
        return [
          { module: 'overview', label: 'Overview', icon: 'bi-grid-fill' },
          { module: 'users', label: 'Users', icon: 'bi-people-fill' },
          { module: 'projects', label: 'Projects', icon: 'bi-building-fill' },
          { module: 'workforce', label: 'Workforce', icon: 'bi-person-badge' },
          { module: 'contractors', label: 'Contractors', icon: 'bi-shield-check' },
          { module: 'resources', label: 'Inventory', icon: 'bi-box-seam-fill' },
          { module: 'budget', label: 'Budget & Expenses', icon: 'bi-wallet-fill' },
          { module: 'reports', label: 'Reports', icon: 'bi-graph-up-arrow' },
          { module: 'notifications', label: 'Notifications', icon: 'bi-chat-dots-fill' },
          { module: 'settings', label: 'Settings', icon: 'bi-gear-fill' }
        ];
      case 'project_manager':
        return [
          { module: 'projects', label: 'Assigned Projects', icon: 'bi-building-fill' },
          { module: 'team', label: 'Team Members', icon: 'bi-people-fill' },
          { module: 'timeline', label: 'Timeline', icon: 'bi-calendar-range' },
          { module: 'budget', label: 'Budget Progress', icon: 'bi-cash-coin' },
          { module: 'reports', label: 'Reports', icon: 'bi-file-earmark-bar-graph' }
        ];
      case 'site_engineer':
        return [
          { module: 'progress', label: 'Daily Progress', icon: 'bi-calendar-check-fill' },
          { module: 'photos', label: 'Site Photos', icon: 'bi-images' },
          { module: 'attendance', label: 'Attendance Logs', icon: 'bi-person-check-fill' },
          { module: 'materials', label: 'Materials Used', icon: 'bi-bricks' },
          { module: 'issues', label: 'Issues Reporting', icon: 'bi-exclamation-triangle-fill' }
        ];
      case 'contractor':
        return [
          { module: 'work', label: 'Assigned Work', icon: 'bi-list-task' },
          { module: 'workers', label: 'Worker Roster', icon: 'bi-people-fill' },
          { module: 'material_requests', label: 'Material Requests', icon: 'bi-truck' },
          { module: 'progress', label: 'Work Progress', icon: 'bi-speedometer' }
        ];
      case 'worker':
        return [
          { module: 'attendance', label: 'Attendance Punch', icon: 'bi-clock-history' },
          { module: 'tasks', label: 'Assigned Tasks', icon: 'bi-check2-square' },
          { module: 'status', label: 'Daily Status', icon: 'bi-journal-check' },
          { module: 'payslips', label: 'Payslips', icon: 'bi-receipt' },
          { module: 'notifications', label: 'Notifications', icon: 'bi-bell-fill' }
        ];
      case 'client':
        return [
          { module: 'progress', label: 'Project Progress', icon: 'bi-activity' },
          { module: 'timeline', label: 'Milestones', icon: 'bi-calendar-event' },
          { module: 'budget', label: 'Budget Summary', icon: 'bi-pie-chart-fill' },
          { module: 'documents', label: 'Documents Locker', icon: 'bi-file-earmark-pdf-fill' },
          { module: 'images', label: 'Site Images', icon: 'bi-camera-fill' },
          { module: 'feedback', label: 'Submit Feedback', icon: 'bi-chat-left-text-fill' }
        ];
      default:
        return [];
    }
  }

  get dashboardPath(): string {
    const role = this.authService.userRole();
    return this.authService.getDashboardUrl(role || 'worker');
  }
}
