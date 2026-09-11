import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProjectService, WorkforceMember, ContractorCompany } from '../../../services/project.service';
import { AuthService } from '../../../services/auth.service';
import { DashboardCardComponent } from '../../../components/dashboard-card/dashboard-card';
import { ChartsComponent } from '../../../components/charts/charts';
import { User, UserRole } from '../../../models/user.model';
import { DashboardService } from '../../../services/dashboard.service';

import { WorkforceManagementComponent } from '../../../components/workforce-management/workforce-management';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, DashboardCardComponent, ChartsComponent, WorkforceManagementComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class AdministratorDashboard {
  projectService = inject(ProjectService);
  dashboardService = inject(DashboardService);
  authService = inject(AuthService);
  route = inject(ActivatedRoute);

  queryParams = toSignal(this.route.queryParams);
  dashboardData = signal<any>(null);

  hasApiError = signal<boolean>(false);

  ngOnInit() {
    this.dashboardService.getAdminDashboard().subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.dashboardData.set(res.data);
          this.usersRegistry.set(res.data.users || []);
          this.workforceData.set(res.data.workforce || []);
          this.contractorsData.set(res.data.contractors || []);
          this.hasApiError.set(false);
        }
      },
      error: (err) => {
        console.error("Error loading admin dashboard:", err);
        this.hasApiError.set(true);
      }
    });
  }

  get activeModule(): string {
    return this.queryParams()?.['module'] || 'overview';
  }

  // Dynamic User Registry state (mapped from backend)
  usersRegistry = signal<any[]>([]);

  // Dynamic workforce data
  workforceData = signal<any[]>([]);

  // Dynamic contractor data
  contractorsData = signal<any[]>([]);

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
  newProjManager = 'Shireen F';
  newProjDesc = '';

  // Form Fields - System Broadcast
  broadcastTarget: 'all' | 'engineers' | 'contractors' | 'workers' = 'all';
  broadcastMessage = '';
  recentBroadcasts = signal<{ id: number; target: string; message: string; date: string }[]>([
    { id: 1, target: 'all', message: 'Platform upgrade schedule set for Saturday at 22:00 PST.', date: '2026-07-20' },
    { id: 2, target: 'workers', message: 'Please ensure timesheet submissions are finalized by Friday.', date: '2026-07-22' }
  ]);

  // Report Preview Modal State
  showReportModal = false;
  editingReport = false;
  selectedReport: { title: string; description: string; format: 'excel' | 'pdf'; contents: string[] } | null = null;

  reports = [
    {
      title: 'Corporate Revenue and Tax Ledger (Q2 2026)',
      description: 'Contains all contractor billing reconciliations, invoice files, and project deposits.',
      format: 'excel' as const,
      contents: [
        'Project Budget Allocations by Site',
        'Contractor Billing & Invoice Reconciliations',
        'Tax Deductions & GST Submissions (Q2)',
        'Revenue Inflows from Client Deposits',
        'Platform Expenditure Velocity Summary',
        'Budget vs Actuals Comparison Table'
      ]
    },
    {
      title: 'Subcontractor Activity Performance Indices',
      description: 'Ranks contractors based on timesheet accuracies, budget safety, and task schedules.',
      format: 'pdf' as const,
      contents: [
        'Contractor Performance Score Card',
        'Timesheet Accuracy Reports by Company',
        'Budget Compliance & Cost Overruns',
        'Task Schedule Adherence Metrics',
        'Site Safety Observations per Contractor',
        'Active Project Count & Delivery Status'
      ]
    }
  ];

  // Budget chart computed data from real projects
  budgetChartLabels = computed(() => {
    const data = this.dashboardData();
    return data?.projects?.map((p: any) => p.name.split(' ').slice(0,2).join(' ')) || [];
  });
  budgetChartCommitted = computed(() => {
    const data = this.dashboardData();
    return data?.projects?.map((p: any) => parseFloat((p.budget / 1_000_000).toFixed(2))) || [];
  });
  budgetChartSpent = computed(() => {
    const data = this.dashboardData();
    return data?.projects?.map((p: any) => parseFloat((p.spent / 1_000_000).toFixed(2))) || [];
  });

  projectStatusLabels = computed(() => {
    const counts = this.dashboardData()?.projectMonitoring?.projectsByStatus;
    if (!counts) return ['In Progress', 'Planning', 'Completed', 'Delayed'];
    return Object.keys(counts);
  });
  
  projectStatusData = computed(() => {
    const counts = this.dashboardData()?.projectMonitoring?.projectsByStatus;
    if (!counts) return [2, 1, 0, 1];
    return Object.values(counts) as number[];
  });


  // Admin settings variables
  currencySymbol = '$';
  notificationsEnabled = true;
  apiCacheDuration = 60; // minutes

  // Form Fields - Module 4 Equipment Provisioning
  newEqId = 'EQ-' + Math.floor(100 + Math.random() * 900);
  newEqName = '';
  newEqCategory = 'CAT-EXCAVATOR';
  newEqLocation = 'Equipment Yard';
  newEqPerson = 'Sathvik S (Site Engineer)';
  newEqModel = '';
  newEqSerial = '';
  newEqCost = 75;

  addEquipment() {
    if (!this.newEqId || !this.newEqName) {
      alert('Equipment ID and Machinery Name are required.');
      return;
    }

    this.projectService.addResource({
      id: this.newEqId,
      name: this.newEqName,
      categoryId: this.newEqCategory,
      quantity: 1,
      currentLocation: this.newEqLocation,
      currentProjectId: null,
      status: 'Available',
      responsiblePerson: this.newEqPerson,
      modelNumber: this.newEqModel,
      serialNumber: this.newEqSerial,
      hourlyCost: this.newEqCost
    }).subscribe({
      next: () => {
        alert('Equipment successfully registered into Enterprise Resource Registry!');
        this.newEqId = 'EQ-' + Math.floor(100 + Math.random() * 900);
        this.newEqName = '';
        this.newEqModel = '';
        this.newEqSerial = '';
        this.projectService.loadModule4Data();
      },
      error: (err) => alert('Error adding equipment: ' + (err.error?.detail || err.message))
    });
  }

  deleteEquipment(id: string) {
    if (confirm(`Permanently delete equipment ${id}?`)) {
      this.projectService.deleteResource(id).subscribe({
        next: () => {
          alert(`Equipment ${id} deleted.`);
          this.projectService.loadModule4Data();
        },
        error: (err) => alert('Error: ' + err.message)
      });
    }
  }

  // Computations
  totalBudgetPool = computed(() => {
    return this.dashboardData()?.systemAnalytics?.totalBudget || 0;
  });

  totalSpentPool = computed(() => {
    return this.dashboardData()?.systemAnalytics?.totalSpent || 0;
  });

  criticalStockCount = computed(() => {
    return this.projectService.materials().filter(m => m.inStock <= m.reorderLevel).length;
  });

  pendingRequestsCount = computed(() => {
    return this.projectService.materialRequests().filter(r => r.status === 'Pending').length;
  });

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

  // ── Report Modal Methods ──────────────────────────────────────────
  openReportPreview(report: typeof this.reports[0]) {
    this.selectedReport = report;
    this.editingReport = false;
    this.showReportModal = true;
  }

  closeReportModal() {
    this.showReportModal = false;
    this.selectedReport = null;
    this.editingReport = false;
  }

  toggleEditReport() {
    this.editingReport = !this.editingReport;
  }

  exportExcel(report?: typeof this.reports[0]) {
    const rpt = report || this.selectedReport;
    if (!rpt) return;
    
    let reportType = 'progress';
    if (rpt.title.includes('Revenue') || rpt.title.includes('Budget')) {
        reportType = 'budget';
    }
    
    const projectId = this.dashboardData()?.projects?.[0]?.id || 'P-101';
    
    this.dashboardService.exportAnalyticsReport(reportType, projectId, 'excel').subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${rpt.title.replace(/[^a-zA-Z0-9]/g, '_')}.xlsx`;
        a.click();
        URL.revokeObjectURL(url);
      },
      error: (err) => alert('Error generating report: ' + err.message)
    });
    
    this.closeReportModal();
  }

  exportPDF(report?: typeof this.reports[0]) {
    const rpt = report || this.selectedReport;
    if (!rpt) return;
    
    let reportType = 'progress';
    if (rpt.title.includes('Revenue') || rpt.title.includes('Budget')) {
        reportType = 'budget';
    }
    
    const projectId = this.dashboardData()?.projects?.[0]?.id || 'P-101';
    
    this.dashboardService.exportAnalyticsReport(reportType, projectId, 'pdf').subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${rpt.title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
        a.click();
        URL.revokeObjectURL(url);
      },
      error: (err) => alert('Error generating report: ' + err.message)
    });
    
    this.closeReportModal();
  }
}
