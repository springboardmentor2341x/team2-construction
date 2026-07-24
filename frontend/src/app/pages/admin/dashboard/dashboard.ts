import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProjectService } from '../../../services/project.service';
import { AuthService } from '../../../services/auth.service';
import { DashboardCardComponent } from '../../../components/dashboard-card/dashboard-card';
import { ChartsComponent } from '../../../components/charts/charts';
import { User, UserRole } from '../../../models/user.model';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, DashboardCardComponent, ChartsComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class AdministratorDashboard {
  projectService = inject(ProjectService);
  authService = inject(AuthService);
  route = inject(ActivatedRoute);

  queryParams = toSignal(this.route.queryParams);

  get activeModule(): string {
    return this.queryParams()?.['module'] || 'overview';
  }

  // Administrators custom user registry state (for role updates)
  usersRegistry = signal<User[]>([
    { id: '1', email: 'admin@buildtrack.com', name: 'John Admin', role: 'admin', company: 'BuildTrack Corp' },
    { id: '2', email: 'pm@buildtrack.com', name: 'Sarah Miller', role: 'project_manager', company: 'Apex Builders' },
    { id: '3', email: 'engineer@buildtrack.com', name: 'Alex Chen', role: 'site_engineer', company: 'Apex Builders' },
    { id: '4', email: 'contractor@buildtrack.com', name: 'Marcus Vance', role: 'contractor', company: 'Vance Concrete Ltd' },
    { id: '5', email: 'worker@buildtrack.com', name: 'David Smith', role: 'worker', company: 'Vance Concrete Ltd' },
    { id: '6', email: 'client@buildtrack.com', name: 'Emily Vanguard', role: 'client', company: 'Vanguard Realty' }
  ]);

  // Form Fields - User Management
  newUserName = '';
  newUserEmail = '';
  newUserRole: UserRole = 'worker';
  newUserCompany = '';

  // Form Fields - Project Provisioning
  newProjName = '';
  newProjLocation = '';
  newProjClient = '';
  newProjBudget = 1000000;
  newProjManager = 'Sarah Miller';
  newProjDesc = '';

  // Form Fields - System Broadcast
  broadcastTarget: 'all' | 'engineers' | 'contractors' | 'workers' = 'all';
  broadcastMessage = '';
  recentBroadcasts = signal<{ id: number; target: string; message: string; date: string }[]>([
    { id: 1, target: 'all', message: 'Platform upgrade schedule set for Saturday at 22:00 PST.', date: '2026-07-20' },
    { id: 2, target: 'workers', message: 'Please ensure timesheet submissions are finalized by Friday.', date: '2026-07-22' }
  ]);

  // Admin settings variables
  currencySymbol = '$';
  notificationsEnabled = true;
  apiCacheDuration = 60; // minutes

  // Computations
  totalBudgetPool = computed(() => 
    this.projectService.projects().reduce((sum, p) => sum + p.budget, 0)
  );

  totalSpentPool = computed(() => 
    this.projectService.projects().reduce((sum, p) => sum + p.spent, 0)
  );

  criticalStockCount = computed(() => 
    this.projectService.materials().filter(m => m.inStock <= m.reorderLevel).length
  );

  pendingRequestsCount = computed(() => 
    this.projectService.materialRequests().filter(r => r.status === 'Pending').length
  );

  // User Actions
  addUser() {
    if (!this.newUserName || !this.newUserEmail) {
      alert('User Name and Email are required.');
      return;
    }

    const newUser: User = {
      id: Math.random().toString(36).substring(2, 9),
      name: this.newUserName,
      email: this.newUserEmail,
      role: this.newUserRole,
      company: this.newUserCompany || 'Independent'
    };

    this.usersRegistry.update(users => [...users, newUser]);
    
    // reset form
    this.newUserName = '';
    this.newUserEmail = '';
    this.newUserCompany = '';
    alert('Platform user registered successfully!');
  }

  updateUserRole(userId: string, newRole: string) {
    this.usersRegistry.update(users =>
      users.map(u => (u.id === userId ? { ...u, role: newRole as UserRole } : u))
    );
    alert('User platform permissions updated.');
  }

  deleteUser(userId: string) {
    if (confirm('Are you sure you want to deactivate this user account?')) {
      this.usersRegistry.update(users => users.filter(u => u.id !== userId));
      alert('User deleted.');
    }
  }

  provisionProject() {
    if (!this.newProjName || !this.newProjLocation || !this.newProjClient) {
      alert('Project Name, Location, and Client Name are required.');
      return;
    }

    this.projectService.addProject({
      name: this.newProjName,
      location: this.newProjLocation,
      clientName: this.newProjClient,
      status: 'Planning',
      startDate: new Date().toISOString().split('T')[0],
      endDate: '2028-12-31',
      budget: this.newProjBudget,
      manager: this.newProjManager,
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600',
      description: this.newProjDesc || 'No project scope description provided.'
    });

    // reset form
    this.newProjName = '';
    this.newProjLocation = '';
    this.newProjClient = '';
    this.newProjBudget = 1000000;
    this.newProjDesc = '';
    
    alert('Project provisioned and dispatched to Project Manager queue!');
  }

  approveInventoryRequest(reqId: string) {
    this.projectService.respondToMaterialRequest(reqId, true);
    alert('Material request approved and stock balance deducted.');
  }

  rejectInventoryRequest(reqId: string) {
    this.projectService.respondToMaterialRequest(reqId, false);
    alert('Material request rejected.');
  }

  sendBroadcast() {
    if (!this.broadcastMessage) {
      alert('Broadcast message cannot be blank.');
      return;
    }

    this.recentBroadcasts.update(list => [
      {
        id: Math.floor(Math.random() * 1000),
        target: this.broadcastTarget,
        message: this.broadcastMessage,
        date: new Date().toISOString().split('T')[0]
      },
      ...list
    ]);

    this.broadcastMessage = '';
    alert('System broadcast bulletin published and pushed to respective role views!');
  }

  saveSettings() {
    alert('System configurations saved successfully.');
  }
}
