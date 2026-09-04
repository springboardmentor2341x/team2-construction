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

  ngOnInit() {
    this.dashboardService.getAdminDashboard().subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.dashboardData.set(res.data);
        }
      },
      error: (err) => console.error("Error loading admin dashboard:", err)
    });
  }

  get activeModule(): string {
    return this.queryParams()?.['module'] || 'overview';
  }

  // Administrators custom user registry state (for role updates)
  usersRegistry = signal<User[]>([
    { id: '1', email: 'admin@buildtrack.com', name: 'Usha Admin', role: 'admin', company: 'BuildTrack Corp' },
    { id: '2', email: 'pm@buildtrack.com', name: 'Shradha S', role: 'project_manager', company: 'Apex Builders' },
    { id: '3', email: 'engineer@buildtrack.com', name: 'Sathvik S', role: 'site_engineer', company: 'Apex Builders' },
    { id: '4', email: 'contractor@buildtrack.com', name: 'Gaurav K', role: 'contractor', company: 'Vance Concrete Ltd' },
    { id: '5', email: 'worker@buildtrack.com', name: 'Jyoti S', role: 'worker', company: 'Vance Concrete Ltd' },
    { id: '6', email: 'client@buildtrack.com', name: 'Abhishek S', role: 'client', company: 'Vanguard Realty' }
  ]);

  // Static fallback workforce data shown when backend has no data
  staticWorkforce: WorkforceMember[] = [
    { id: 'wf1', name: 'Ramesh Kumar', role: 'Mason', assignedProject: 'Vanguard Heights Tower', phone: '+91-9812345678', status: 'Active', avatar: 'https://ui-avatars.com/api/?name=Ramesh+Kumar&background=0d6efd&color=fff' },
    { id: 'wf2', name: 'Priya Nair', role: 'Electrician', assignedProject: 'Riverfront Residency II', phone: '+91-9823456789', status: 'Active', avatar: 'https://ui-avatars.com/api/?name=Priya+Nair&background=198754&color=fff' },
    { id: 'wf3', name: 'Suresh Patil', role: 'Plumber', assignedProject: 'Metro Transit Hub', phone: '+91-9834567890', status: 'On Leave', avatar: 'https://ui-avatars.com/api/?name=Suresh+Patil&background=ffc107&color=000' },
    { id: 'wf4', name: 'Kavita Sharma', role: 'Site Supervisor', assignedProject: 'Vanguard Heights Tower', phone: '+91-9845678901', status: 'Active', avatar: 'https://ui-avatars.com/api/?name=Kavita+Sharma&background=0dcaf0&color=fff' },
    { id: 'wf5', name: 'Mohan Das', role: 'Welder', assignedProject: 'Eco-Resort Suites', phone: '+91-9856789012', status: 'Active', avatar: 'https://ui-avatars.com/api/?name=Mohan+Das&background=6f42c1&color=fff' },
    { id: 'wf6', name: 'Deepa Mehta', role: 'Carpenter', assignedProject: 'Metro Transit Hub', phone: '+91-9867890123', status: 'Inactive', avatar: 'https://ui-avatars.com/api/?name=Deepa+Mehta&background=dc3545&color=fff' },
    { id: 'wf7', name: 'Arjun Singh', role: 'Safety Officer', assignedProject: 'Riverfront Residency II', phone: '+91-9878901234', status: 'Active', avatar: 'https://ui-avatars.com/api/?name=Arjun+Singh&background=fd7e14&color=fff' },
    { id: 'wf8', name: 'Lakshmi Rao', role: 'Scaffolding Expert', assignedProject: 'Eco-Resort Suites', phone: '+91-9889012345', status: 'On Leave', avatar: 'https://ui-avatars.com/api/?name=Lakshmi+Rao&background=20c997&color=fff' },
  ];

  // Static fallback contractor data
  staticContractors: ContractorCompany[] = [
    { id: 'c1', name: 'Vance Concrete Ltd', contactPerson: 'Gaurav Kumar', specialty: 'Foundation & Concrete Works', activeProjects: 3, status: 'Active' },
    { id: 'c2', name: 'Apex Steel Fabricators', contactPerson: 'Rajiv Mehta', specialty: 'Structural Steel & Rebar', activeProjects: 2, status: 'Active' },
    { id: 'c3', name: 'SunBright Electricals', contactPerson: 'Sheela Rao', specialty: 'Electrical & MEP Works', activeProjects: 4, status: 'Active' },
    { id: 'c4', name: 'ProPipe Plumbing Co.', contactPerson: 'Dilip Joshi', specialty: 'Plumbing & Drainage', activeProjects: 2, status: 'Under Review' },
    { id: 'c5', name: 'QuickBuild Masonry', contactPerson: 'Anita Desai', specialty: 'Brick & Block Masonry', activeProjects: 1, status: 'Active' },
    { id: 'c6', name: 'SafeGuard HVAC Pvt.', contactPerson: 'Sanjay Patel', specialty: 'HVAC & Ventilation', activeProjects: 2, status: 'Active' },
    { id: 'c7', name: 'TerraFirm Groundworks', contactPerson: 'Prakash Nair', specialty: 'Excavation & Groundworks', activeProjects: 0, status: 'Suspended' },
  ];

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

  // Computed workforce: use backend data if available, else static
  workforceData = computed(() => {
    const live = this.projectService.workforce();
    return live.length > 0 ? live : this.staticWorkforce;
  });

  // Computed contractors: use backend data if available, else static
  contractorsData = computed(() => {
    const live = this.projectService.contractors();
    return live.length > 0 ? live : this.staticContractors;
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
    return this.dashboardData()?.projects?.reduce((sum: number, p: any) => sum + p.budget, 0) || 0;
  });

  totalSpentPool = computed(() => {
    return this.dashboardData()?.projects?.reduce((sum: number, p: any) => sum + p.spent, 0) || 0;
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
    const rows: string[][] = [
      ['BuildTrack – ' + rpt.title],
      ['Generated on: ' + new Date().toLocaleDateString()],
      [''],
      ['Section', 'Details']
    ];
    rpt.contents.forEach((c, i) => rows.push([(i + 1).toString(), c]));
    const csvContent = rows.map(r => r.map(c => `"${c}"`).join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = rpt.title.replace(/[^a-zA-Z0-9]/g, '_') + '.csv';
    a.click();
    URL.revokeObjectURL(url);
    this.closeReportModal();
  }

  exportPDF(report?: typeof this.reports[0]) {
    const rpt = report || this.selectedReport;
    if (!rpt) return;
    const htmlContent = `
      <html><head><title>${rpt.title}</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 40px; color: #222; }
        h1 { font-size: 20px; color: #0d6efd; border-bottom: 2px solid #0d6efd; padding-bottom: 8px; }
        p { color: #666; font-size: 13px; }
        ul { margin-top: 16px; }
        li { margin-bottom: 8px; font-size: 14px; }
        footer { margin-top: 40px; font-size: 11px; color: #aaa; }
      </style></head>
      <body>
        <h1>${rpt.title}</h1>
        <p>${rpt.description}</p>
        <p>Generated: ${new Date().toLocaleString()}</p>
        <ul>${rpt.contents.map(c => `<li>${c}</li>`).join('')}</ul>
        <footer>BuildTrack Administrative Console – Confidential</footer>
      </body></html>`;
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = rpt.title.replace(/[^a-zA-Z0-9]/g, '_') + '.html';
    a.click();
    URL.revokeObjectURL(url);
    this.closeReportModal();
  }
}
