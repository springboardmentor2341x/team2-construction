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
  get menuItems(): any[] {
    const role = this.authService.userRole();
    if (!role) return [];

    switch (role) {
      case 'admin':
        return [
          { module: 'overview', label: 'Overview', icon: 'bi-grid-fill' },
          { module: 'users', label: 'Users', icon: 'bi-people-fill' },
          { module: 'projects', label: 'Projects', icon: 'bi-building-fill' },
          { module: 'resources', label: 'Equipment Registry', icon: 'bi-truck' },
          { module: 'allocations', label: 'Equipment Allocations', icon: 'bi-calendar2-range' },
          { module: 'maintenance', label: 'Maintenance Hub', icon: 'bi-tools' },
          { module: 'workforce', label: 'Workforce', icon: 'bi-person-badge' },
          { module: 'contractors', label: 'Contractors', icon: 'bi-shield-check' },
          { module: 'inventory', label: 'Material Inventory', icon: 'bi-box-seam-fill' },
          { module: 'budget', label: 'Budget & Expenses', icon: 'bi-wallet-fill' },
          { module: 'reports', label: 'Reports', icon: 'bi-graph-up-arrow' },
          { module: 'notifications', label: 'Notifications', icon: 'bi-chat-dots-fill' },
          { module: 'settings', label: 'Settings', icon: 'bi-gear-fill' }
        ];
      case 'project_manager':
        return [
          { module: 'projects', label: 'Assigned Projects', icon: 'bi-building-fill' },
          { module: 'resources', label: 'Equipment Catalog', icon: 'bi-truck' },
          { module: 'allocations', label: 'Equipment Allocation', icon: 'bi-calendar2-range' },
          { module: 'tracking', label: 'Machinery Tracking', icon: 'bi-geo-alt-fill' },
          { module: 'utilization', label: 'Resource Utilization', icon: 'bi-speedometer2' },
          { module: 'maintenance', label: 'Maintenance Hub', icon: 'bi-tools' },
          { module: 'milestones', label: 'Milestones & Progress', icon: 'bi-flag-fill' },
          { module: 'daily_feed', label: 'Daily Reports Feed', icon: 'bi-journal-check' },
          { module: 'delays', label: 'Active Delays', icon: 'bi-hourglass-split' },
          { module: 'activities', label: 'Site Activities', icon: 'bi-clipboard2-data-fill' },
          { module: 'weekly', label: 'Weekly Analytics', icon: 'bi-calendar-week-fill' },
          { module: 'team', label: 'Team Members', icon: 'bi-people-fill' },
          { module: 'budget', label: 'Budget Progress', icon: 'bi-cash-coin' },
          { module: 'reports', label: 'Reports', icon: 'bi-file-earmark-bar-graph' }
        ];
      case 'site_engineer':
        return [
          { module: 'progress', label: 'Daily Progress', icon: 'bi-calendar-check-fill' },
          { module: 'machinery_usage', label: 'Machinery Usage', icon: 'bi-speedometer2' },
          { module: 'weekly', label: 'Weekly Summary', icon: 'bi-calendar-week-fill' },
          { module: 'milestones', label: 'Milestones', icon: 'bi-flag-fill' },
          { module: 'delays', label: 'Delay Tracking', icon: 'bi-hourglass-split' },
          { module: 'activities', label: 'Site Activity Logs', icon: 'bi-clipboard2-data-fill' },
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
          { module: 'workforce', label: 'Workforce Overview', icon: 'bi-people-fill' },
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
