import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { 
  ProjectService, Milestone, DailyProgressReport, DelayRecord,
  Resource, ResourceCategory, ResourceAllocation, ResourceUtilization, MaintenanceRecord,
  WorkforceMember
} from '../../../services/project.service';
import { DashboardCardComponent } from '../../../components/dashboard-card/dashboard-card';
import { ChartsComponent } from '../../../components/charts/charts';
import { DashboardService } from '../../../services/dashboard.service';

import { WorkforceManagementComponent } from '../../../components/workforce-management/workforce-management';

@Component({
  selector: 'app-pm-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, DashboardCardComponent, ChartsComponent, WorkforceManagementComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class ProjectManagerDashboard implements OnInit {
  projectService = inject(ProjectService);
  dashboardService = inject(DashboardService);
  route = inject(ActivatedRoute);

  queryParams = toSignal(this.route.queryParams);
  dashboardData = signal<any>(null);

  get activeModule(): string {
    return this.queryParams()?.['module'] || 'projects';
  }

  // Active Project Selection for detail views
  selectedProjectId = 'P-101';

  // Filter projects managed by this user (Shradha S) or available
  managedProjects = computed(() => {
    return this.dashboardData()?.projects || [];
  });

  totalBudget = computed(() => {
    return this.dashboardData()?.budget?.planned || 0;
  });

  totalSpent = computed(() => {
    return this.dashboardData()?.budget?.utilized || 0;
  });

  averageProgress = computed(() => {
    return this.dashboardData()?.progress?.overall || 0;
  });

  // Budget chart computed signals
  budgetChartLabels = computed(() => {
    const projs = this.managedProjects();
    return projs.length > 0
      ? projs.map((p: any) => p.name.split(' ').slice(0, 2).join(' '))
      : [];
  });
  budgetChartCommitted = computed(() => {
    const projs = this.managedProjects();
    return projs.length > 0
      ? projs.map((p: any) => parseFloat((p.budget / 1_000_000).toFixed(2)))
      : [];
  });
  budgetChartSpent = computed(() => {
    const projs = this.managedProjects();
    return projs.length > 0
      ? projs.map((p: any) => parseFloat((p.spent / 1_000_000).toFixed(2)))
      : [];
  });

  // Module 3 Computations
  managedMilestones = computed(() =>
    this.projectService.milestones().filter(m => 
      this.managedProjects().some((p: any) => p.id === m.projectId)
    )
  );

  managedDailyReports = computed(() =>
    this.projectService.dailyProgressReports().filter(r =>
      this.managedProjects().some((p: any) => p.id === r.projectId)
    )
  );

  managedDelays = computed(() =>
    this.projectService.delays().filter(d =>
      this.managedProjects().some((p: any) => p.id === d.projectId)
    )
  );

  managedActivityLogs = computed(() =>
    this.projectService.activityLogs().filter(a =>
      this.managedProjects().some((p: any) => p.id === a.projectId)
    )
  );

  teamMembers = computed(() => {
    return this.projectService.workforce().filter(member =>
      this.managedProjects().some((p: any) => p.name === member.assignedProject)
    );
  });

  projectIssues = computed(() => 
    this.projectService.issues().filter(issue => 
      this.managedProjects().some((p: any) => p.name === issue.projectName)
    )
  );

  // ==========================================
  // MODULE 4: RESOURCE MANAGEMENT STATE
  // ==========================================
  resourceFilterCategory = 'ALL';
  resourceFilterStatus = 'ALL';
  resourceSearchQuery = '';

  filteredResources = computed(() => {
    let list = this.projectService.resources();
    if (this.resourceFilterCategory !== 'ALL') {
      list = list.filter(r => r.categoryId === this.resourceFilterCategory);
    }
    if (this.resourceFilterStatus !== 'ALL') {
      list = list.filter(r => r.status === this.resourceFilterStatus);
    }
    if (this.resourceSearchQuery.trim()) {
      const q = this.resourceSearchQuery.toLowerCase();
      list = list.filter(r => 
        r.name.toLowerCase().includes(q) || 
        r.id.toLowerCase().includes(q) ||
        r.responsiblePerson.toLowerCase().includes(q) ||
        r.currentLocation.toLowerCase().includes(q)
      );
    }
    return list;
  });

  // Allocation Form State
  allocResourceId = 'EQ-102';
  allocProjectId = 'P-101';
  allocStartDate = new Date().toISOString().split('T')[0];
  allocEndDate = '';
  allocQuantity = 1;
  allocResponsiblePerson = 'Gaurav K (Lead Operator)';
  allocNotes = '';
  allocConflictWarning = '';

  // Utilization Form State
  utlResourceId = 'EQ-101';
  utlProjectId = 'P-101';
  utlDate = new Date().toISOString().split('T')[0];
  utlOpHours = 7.0;
  utlIdleHours = 1.0;
  utlTotalHours = 8.0;
  utlRemarks = 'Level 8 structural slab work';

  // Maintenance Form State
  mntResourceId = 'EQ-102';
  mntType: 'Preventive' | 'Corrective' | 'Emergency' | 'Inspection' = 'Preventive';
  mntLastDate = new Date().toISOString().split('T')[0];
  mntNextDate = '';
  mntEngineer = 'Komatsu Certified Field Tech';
  mntCost = 500;
  mntStatus: 'Scheduled' | 'In Progress' | 'Completed' = 'Scheduled';
  mntRemarks = 'Standard 250-hour hydraulic filter and engine oil change.';

  // Selected Detail Modals
  selectedResourceDetail: Resource | null = null;
  selectedReportDetail: DailyProgressReport | null = null;
  selectedMilestoneToEdit: Milestone | null = null;
  editMilestoneProgress = 0;
  editMilestoneStatus: 'Pending' | 'In Progress' | 'Completed' | 'Delayed' = 'In Progress';

  // ==========================================
  // REPORT PREVIEW MODAL STATE
  // ==========================================
  showReportModal = false;
  editingReport = false;
  selectedReport: { title: string; description: string; format: 'excel' | 'pdf'; contents: string[] } | null = null;

  pmReports = [
    {
      title: 'Equipment & Resource Allocation Statement (Module 4)',
      description: 'Overview of machine allocations, fleet utilization %, and scheduled maintenance records.',
      format: 'pdf' as const,
      contents: [
        'Full Equipment Registry with Status & Location',
        'Active Resource Allocations by Project',
        'Fleet Utilization % per Category',
        'Scheduled & Overdue Maintenance Records',
        'Resource Return History',
        'Equipment Cost per Hour Summary'
      ]
    },
    {
      title: 'Project Progress & Milestone Report',
      description: 'Weekly progress delta, milestone completion, and delay analysis across all managed projects.',
      format: 'excel' as const,
      contents: [
        'Milestone Completion Status per Project',
        'Weekly Progress Delta (% Change)',
        'Daily Reports Filed by Site Engineers',
        'Active & Resolved Delays',
        'Worker Shift Attendance Summary',
        'Budget vs Spent Analysis'
      ]
    }
  ];

  // Weekly analytics chart data (uses weeklySummary or static fallbacks)
  weeklyDeltaLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'];
  weeklyDeltaData = computed(() => {
    const ws = this.projectService.weeklySummary();
    if (ws) return [ws.weeklyProgressPercentage, 4.2, 6.1, 3.8, 5.5, 7.0];
    return [3.5, 4.2, 6.1, 3.8, 5.5, 7.0];
  });
  reportsFiledData = computed(() => {
    const ws = this.projectService.weeklySummary();
    return [ws?.totalReportsFiled || 5, 7, 4, 8, 6, 9];
  });
  workerShiftsData = computed(() => {
    const ws = this.projectService.weeklySummary();
    return [ws?.totalWorkersUtilized || 42, 38, 45, 50, 47, 55];
  });
  delaysData = computed(() => {
    const ws = this.projectService.weeklySummary();
    return [ws?.delaysEncounteredCount || 2, 1, 3, 0, 2, 1];
  });

  ngOnInit() {
    // Default expected return date to +14 days
    const returnDate = new Date();
    returnDate.setDate(returnDate.getDate() + 14);
    this.allocEndDate = returnDate.toISOString().split('T')[0];

    const nextMnt = new Date();
    nextMnt.setDate(nextMnt.getDate() + 30);
    this.mntNextDate = nextMnt.toISOString().split('T')[0];

    this.projectService.loadModule3Data();
    this.projectService.loadModule4Data();
    this.projectService.loadWeeklySummary(this.selectedProjectId);
    this.loadDashboardData();
  }

  loadDashboardData() {
    this.dashboardService.getPmDashboard(this.selectedProjectId).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.dashboardData.set(res.data);
        }
      },
      error: (err) => console.error("Error loading dashboard data:", err)
    });
  }

  onProjectSelectChange() {
    this.projectService.loadWeeklySummary(this.selectedProjectId);
    this.loadDashboardData();
  }

  // ==========================================
  // RESOURCE ALLOCATION ACTIONS
  // ==========================================
  checkAvailabilityRealtime() {
    if (!this.allocResourceId || !this.allocStartDate || !this.allocEndDate) return;
    this.projectService.checkResourceAvailability(this.allocStartDate, this.allocEndDate).subscribe({
      next: (res) => {
        const isAvail = res.data.some(r => r.id === this.allocResourceId);
        if (!isAvail) {
          const selectedRes = this.projectService.resources().find(r => r.id === this.allocResourceId);
          this.allocConflictWarning = `Warning: ${selectedRes?.name || 'Selected equipment'} (${this.allocResourceId}) is not available or has conflicting allocations during the chosen dates.`;
        } else {
          this.allocConflictWarning = '';
        }
      },
      error: () => {}
    });
  }

  submitAllocation() {
    if (!this.allocResourceId || !this.allocProjectId || !this.allocStartDate || !this.allocEndDate) {
      alert('Please fill all required allocation fields.');
      return;
    }

    const payload = {
      resourceId: this.allocResourceId,
      projectId: this.allocProjectId,
      allocationDate: this.allocStartDate,
      expectedReturnDate: this.allocEndDate,
      quantity: this.allocQuantity,
      responsiblePerson: this.allocResponsiblePerson,
      notes: this.allocNotes
    };

    this.projectService.allocateResource(payload).subscribe({
      next: () => {
        alert('Equipment successfully allocated to project! Status updated to Allocated.');
        this.allocNotes = '';
        this.allocConflictWarning = '';
        this.projectService.loadModule4Data();
      },
      error: (err) => {
        alert('Allocation Failed: ' + (err.error?.detail || err.message));
      }
    });
  }

  returnEquipment(allocationId: string) {
    if (confirm('Confirm return of this equipment to the Equipment Yard?')) {
      this.projectService.returnResourceAllocation(allocationId).subscribe({
        next: () => {
          alert('Equipment marked as Returned and restored to Available status in Equipment Yard.');
          this.projectService.loadModule4Data();
        },
        error: (err) => alert('Error returning equipment: ' + err.message)
      });
    }
  }

  // ==========================================
  // RESOURCE UTILIZATION ACTIONS
  // ==========================================
  submitUtilization() {
    if (!this.utlResourceId || !this.utlProjectId || !this.utlDate) {
      alert('Please fill all utilization fields.');
      return;
    }

    const payload = {
      resourceId: this.utlResourceId,
      projectId: this.utlProjectId,
      usageDate: this.utlDate,
      operatingHours: this.utlOpHours,
      idleHours: this.utlIdleHours,
      totalAvailableHours: this.utlTotalHours,
      remarks: this.utlRemarks
    };

    this.projectService.logResourceUtilization(payload).subscribe({
      next: () => {
        alert('Shift utilization record logged! Utilization % calculated automatically.');
        this.utlRemarks = '';
        this.projectService.loadModule4Data();
      },
      error: (err) => alert('Error logging utilization: ' + (err.error?.detail || err.message))
    });
  }

  // ==========================================
  // MAINTENANCE MANAGEMENT ACTIONS
  // ==========================================
  submitMaintenance() {
    if (!this.mntResourceId || !this.mntLastDate || !this.mntNextDate) {
      alert('Please fill all required maintenance schedule fields.');
      return;
    }

    const payload = {
      resourceId: this.mntResourceId,
      maintenanceType: this.mntType,
      lastMaintenanceDate: this.mntLastDate,
      nextMaintenanceDate: this.mntNextDate,
      serviceEngineer: this.mntEngineer,
      maintenanceCost: this.mntCost,
      status: this.mntStatus,
      remarks: this.mntRemarks
    };

    this.projectService.scheduleMaintenance(payload).subscribe({
      next: () => {
        alert('Maintenance scheduled! Equipment status updated appropriately.');
        this.projectService.loadModule4Data();
      },
      error: (err) => alert('Error scheduling maintenance: ' + (err.error?.detail || err.message))
    });
  }

  completeMaintenance(mntId: string) {
    if (confirm('Mark this maintenance service as Completed? Equipment status will revert to Available.')) {
      this.projectService.updateMaintenanceRecord(mntId, { status: 'Completed' }).subscribe({
        next: () => {
          alert('Maintenance marked as Completed. Equipment restored to Available status.');
          this.projectService.loadModule4Data();
        },
        error: (err) => alert('Error: ' + err.message)
      });
    }
  }

  // Modal handlers
  openResourceDetail(r: Resource) {
    this.selectedResourceDetail = r;
  }

  closeResourceDetail() {
    this.selectedResourceDetail = null;
  }

  openReportDetail(rep: DailyProgressReport) {
    this.selectedReportDetail = rep;
  }

  closeReportDetail() {
    this.selectedReportDetail = null;
  }

  openEditMilestone(m: Milestone) {
    this.selectedMilestoneToEdit = m;
    this.editMilestoneProgress = m.progressPercentage;
    this.editMilestoneStatus = m.status;
  }

  closeEditMilestone() {
    this.selectedMilestoneToEdit = null;
  }

  saveMilestoneProgress() {
    if (!this.selectedMilestoneToEdit) return;

    this.projectService.updateMilestone(this.selectedMilestoneToEdit.id, {
      progressPercentage: this.editMilestoneProgress,
      status: this.editMilestoneStatus
    }).subscribe({
      next: () => {
        alert('Milestone progress updated! Project progress recalculated.');
        this.selectedMilestoneToEdit = null;
        this.projectService.loadAllData();
      },
      error: (err) => alert('Error: ' + err.message)
    });
  }

  resolveDelay(id: string) {
    this.projectService.updateDelay(id, { status: 'Resolved' }).subscribe({
      next: () => {
        alert('Delay marked as Resolved.');
        this.projectService.loadAllData();
      }
    });
  }

  // ==========================================
  // REPORT PREVIEW MODAL
  // ==========================================
  openReportPreview(report: typeof this.pmReports[0]) {
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

  // ==========================================
  // EXPORT / DOWNLOAD METHODS
  // ==========================================

  /** Generic CSV/Excel download utility */
  private downloadCSV(filename: string, rows: string[][]): void {
    const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename + '.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  /** Generic HTML-as-PDF download utility */
  private downloadHTML(filename: string, title: string, subtitle: string, tableHeaders: string[], tableRows: string[][]): void {
    const rows = tableRows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('');
    const html = `<html><head><title>${title}</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 32px; color: #222; font-size: 13px; }
        h1 { font-size: 18px; color: #0d6efd; border-bottom: 2px solid #0d6efd; padding-bottom: 6px; }
        p { color: #666; margin-bottom: 16px; }
        table { width: 100%; border-collapse: collapse; margin-top: 12px; }
        th { background: #0d6efd; color: #fff; padding: 8px; text-align: left; font-size: 11px; }
        td { padding: 7px 8px; border-bottom: 1px solid #eee; font-size: 12px; }
        tr:nth-child(even) td { background: #f9f9f9; }
        footer { margin-top: 32px; font-size: 10px; color: #aaa; }
      </style></head>
      <body>
        <h1>${title}</h1>
        <p>${subtitle} | Generated: ${new Date().toLocaleString()}</p>
        <table><thead><tr>${tableHeaders.map(h => `<th>${h}</th>`).join('')}</tr></thead>
        <tbody>${rows}</tbody></table>
        <footer>BuildTrack – Project Manager Workspace – Confidential</footer>
      </body></html>`;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename + '.html';
    a.click();
    URL.revokeObjectURL(url);
  }

  /** Export Resource Ledger (used from header and budget/reports pages) */
  exportResourceLedger() {
    const resources = this.projectService.resources();
    if (resources.length > 0) {
      this.downloadCSV('Resource_Ledger', [
        ['BuildTrack – Equipment & Resource Ledger'],
        ['Generated: ' + new Date().toLocaleDateString()],
        [''],
        ['Equipment ID', 'Name', 'Category', 'Status', 'Location', 'Project', 'Operator', 'Hourly Rate ($)'],
        ...resources.map(r => [r.id, r.name, r.categoryName || r.categoryId, r.status, r.currentLocation, r.currentProjectName || 'Yard', r.responsiblePerson, String(r.hourlyCost)])
      ]);
    } else {
      // Static fallback
      this.downloadCSV('Resource_Ledger', [
        ['BuildTrack – Equipment & Resource Ledger'],
        ['Generated: ' + new Date().toLocaleDateString()],
        [''],
        ['Equipment ID', 'Name', 'Category', 'Status', 'Location', 'Project', 'Operator', 'Hourly Rate ($)'],
        ['EQ-101', 'Caterpillar 336 Excavator', 'Excavator', 'Allocated', 'Block A – Level 3', 'Vanguard Heights Tower', 'Gaurav K', '120'],
        ['EQ-102', 'Komatsu PC 210 Excavator', 'Excavator', 'Available', 'Equipment Yard', 'Yard', 'Sanjay P', '95'],
        ['EQ-201', 'Schwing Stetter Batching Plant', 'Concrete Equipment', 'Operating', 'Block B – Ground', 'Riverfront Residency II', 'Ramesh T', '85'],
      ]);
    }
  }

  /** Export Equipment Catalog */
  exportEquipmentCatalog() {
    const resources = this.projectService.resources();
    const rows = resources.length > 0
      ? resources.map(r => [r.id, r.name, r.categoryName || r.categoryId, r.modelNumber || 'N/A', r.serialNumber || 'N/A', r.status, r.currentLocation, r.responsiblePerson, String(r.hourlyCost)])
      : [['EQ-101', 'Caterpillar 336 Excavator', 'Excavator', '336-07A', 'SN-CAT-5092', 'Allocated', 'Block A – Level 3', 'Gaurav K', '120']];
    this.downloadCSV('Equipment_Catalog', [
      ['BuildTrack – Equipment Catalog Report'],
      ['Generated: ' + new Date().toLocaleDateString()],
      [''],
      ['ID', 'Name', 'Category', 'Model', 'Serial No.', 'Status', 'Location', 'Operator', 'Rate/hr ($)'],
      ...rows
    ]);
  }

  /** Export Allocations */
  exportAllocations() {
    const allocs = this.projectService.resourceAllocations();
    const rows = allocs.length > 0
      ? allocs.map(a => [a.id, a.resourceName || a.resourceId, a.projectName || a.projectId, a.allocationDate, a.expectedReturnDate, a.responsiblePerson, a.status])
      : [['ALLOC-001', 'Caterpillar 336 Excavator', 'Vanguard Heights Tower', '2026-07-01', '2026-08-01', 'Gaurav K', 'Allocated']];
    this.downloadCSV('Equipment_Allocations', [
      ['BuildTrack – Equipment Allocation Statement'],
      ['Generated: ' + new Date().toLocaleDateString()],
      [''],
      ['Allocation ID', 'Equipment', 'Project', 'Start Date', 'Return Date', 'Responsible Person', 'Status'],
      ...rows
    ]);
  }

  /** Export Machinery Tracking */
  exportMachineryTracking() {
    const resources = this.projectService.resources();
    const rows = resources.length > 0
      ? resources.map(r => [r.id, r.name, r.categoryName || '', r.status, r.currentLocation, r.currentProjectName || 'Yard', r.responsiblePerson])
      : [['EQ-101', 'Caterpillar 336 Excavator', 'Excavator', 'Allocated', 'Block A – Level 3', 'Vanguard Heights Tower', 'Gaurav K']];
    this.downloadCSV('Machinery_Tracking', [
      ['BuildTrack – Live Machinery Tracking Report'],
      ['Generated: ' + new Date().toLocaleDateString()],
      [''],
      ['Equipment ID', 'Name', 'Category', 'Status', 'Location', 'Project', 'Operator'],
      ...rows
    ]);
  }

  /** Export Resource Utilization */
  exportUtilization() {
    const utils = this.projectService.resourceUtilizations();
    const rows = utils.length > 0
      ? utils.map(u => [u.usageDate, u.resourceName || u.resourceId, u.projectName || u.projectId, String(u.operatingHours), String(u.idleHours), String(u.totalAvailableHours), u.utilizationPercentage + '%', u.remarks || ''])
      : [['2026-08-10', 'Caterpillar 336 Excavator', 'Vanguard Heights Tower', '7.0', '1.0', '8.0', '87.5%', 'Foundation excavation']];
    this.downloadCSV('Resource_Utilization', [
      ['BuildTrack – Resource Utilization Log'],
      ['Generated: ' + new Date().toLocaleDateString()],
      [''],
      ['Date', 'Equipment', 'Project', 'Operating Hrs', 'Idle Hrs', 'Total Hrs', 'Utilization %', 'Remarks'],
      ...rows
    ]);
  }

  /** Export Maintenance Hub */
  exportMaintenance() {
    const records = this.projectService.maintenanceRecords();
    const rows = records.length > 0
      ? records.map(m => [m.id, m.resourceName || m.resourceId, m.maintenanceType, m.lastMaintenanceDate, m.nextMaintenanceDate, m.serviceEngineer, '$' + m.maintenanceCost, m.status, m.remarks || ''])
      : [['MNT-001', 'Caterpillar 336 Excavator', 'Preventive', '2026-06-01', '2026-09-01', 'CAT Field Tech', '$500', 'Scheduled', 'Oil change & filter']];
    this.downloadCSV('Maintenance_Hub', [
      ['BuildTrack – Maintenance Schedule & Records'],
      ['Generated: ' + new Date().toLocaleDateString()],
      [''],
      ['Record ID', 'Equipment', 'Type', 'Last Service', 'Next Service', 'Engineer', 'Cost', 'Status', 'Remarks'],
      ...rows
    ]);
  }

  /** Export Daily Reports Feed */
  exportDailyFeed() {
    const reports = this.managedDailyReports();
    const rows = reports.length > 0
      ? reports.map(r => [r.reportDate, r.projectName || '', r.workCategory, r.activityPerformed, r.percentageWorkCompleted + '%', String(r.workersPresent), r.weatherConditions, r.delayEncountered ? 'Yes – ' + r.delayReason : 'No'])
      : [['2026-08-10', 'Vanguard Heights Tower', 'Structural', 'Slab casting at Level 8', '5%', '24', 'Clear', 'No']];
    this.downloadCSV('Daily_Progress_Feed', [
      ['BuildTrack – Daily Progress Reports'],
      ['Generated: ' + new Date().toLocaleDateString()],
      [''],
      ['Date', 'Project', 'Category', 'Activity', 'Progress', 'Workers', 'Weather', 'Delay'],
      ...rows
    ]);
  }

  /** Export Active Delays */
  exportDelays() {
    const delays = this.managedDelays();
    const rows = delays.length > 0
      ? delays.map(d => [d.date, d.projectName || '', d.affectedActivity, d.delayReason, d.delayDuration, d.impactOnProject, d.status])
      : [['2026-08-05', 'Vanguard Heights Tower', 'Concrete Pouring', 'Heavy Rain', '2 days', 'High', 'Active']];
    this.downloadCSV('Active_Delays', [
      ['BuildTrack – Active Site Delays'],
      ['Generated: ' + new Date().toLocaleDateString()],
      [''],
      ['Date', 'Project', 'Affected Activity', 'Reason', 'Duration', 'Impact', 'Status'],
      ...rows
    ]);
  }

  /** Export Site Activities */
  exportActivities() {
    const logs = this.managedActivityLogs();
    const rows = logs.length > 0
      ? logs.map(a => [a.date, a.time, a.projectName || '', a.activityType, a.description, a.responsiblePerson, a.loggedByName || ''])
      : [['2026-08-10', '08:30', 'Vanguard Heights Tower', 'Inspection', 'Structural slab inspection at Level 7', 'Sathvik S', 'Sathvik S']];
    this.downloadCSV('Site_Activities', [
      ['BuildTrack – Site Activity Log'],
      ['Generated: ' + new Date().toLocaleDateString()],
      [''],
      ['Date', 'Time', 'Project', 'Activity Type', 'Description', 'Responsible Person', 'Logged By'],
      ...rows
    ]);
  }

  /** Export Weekly Analytics */
  exportWeeklyAnalytics() {
    const ws = this.projectService.weeklySummary();
    this.downloadCSV('Weekly_Analytics', [
      ['BuildTrack – Weekly Progress Analytics'],
      ['Generated: ' + new Date().toLocaleDateString()],
      [''],
      ['Metric', 'Value'],
      ['Weekly Progress Delta', (ws?.weeklyProgressPercentage || 3.5) + '%'],
      ['Overall Project Progress', (ws?.overallProjectProgress || 62) + '%'],
      ['Reports Filed This Week', String(ws?.totalReportsFiled || 5)],
      ['Workers Utilized', String(ws?.totalWorkersUtilized || 42)],
      ['Delays Encountered', String(ws?.delaysEncounteredCount || 2)],
      ['Safety Observations', String(ws?.safetyObservationsCount || 3)],
      ['Week Start', ws?.weekStartDate || ''],
      ['Week End', ws?.weekEndDate || ''],
    ]);
  }

  /** Export from Report Preview Modal */
  exportReportModal(format: 'excel' | 'pdf') {
    const rpt = this.selectedReport;
    if (!rpt) return;
    if (format === 'excel') {
      this.downloadCSV(rpt.title.replace(/[^a-zA-Z0-9]/g, '_'), [
        ['BuildTrack – ' + rpt.title],
        ['Generated: ' + new Date().toLocaleDateString()],
        [''],
        ['#', 'Section'],
        ...rpt.contents.map((c, i) => [String(i + 1), c])
      ]);
    } else {
      const html = `<html><head><title>${rpt.title}</title>
        <style>body{font-family:Arial,sans-serif;padding:40px;color:#222;}h1{font-size:20px;color:#0d6efd;border-bottom:2px solid #0d6efd;padding-bottom:8px;}p{color:#666;font-size:13px;}ul{margin-top:16px;}li{margin-bottom:8px;font-size:14px;}footer{margin-top:40px;font-size:11px;color:#aaa;}</style>
        </head><body>
        <h1>${rpt.title}</h1><p>${rpt.description}</p><p>Generated: ${new Date().toLocaleString()}</p>
        <ul>${rpt.contents.map(c => `<li>${c}</li>`).join('')}</ul>
        <footer>BuildTrack – Project Manager Workspace – Confidential</footer>
        </body></html>`;
      const blob = new Blob([html], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = rpt.title.replace(/[^a-zA-Z0-9]/g, '_') + '.html';
      a.click();
      URL.revokeObjectURL(url);
    }
    this.closeReportModal();
  }

  /** Budget export */
  exportBudget() {
    const projs = this.managedProjects();
    const rows = projs.length > 0
      ? projs.map((p: any) => [p.name, '$' + p.budget.toLocaleString(), '$' + p.spent.toLocaleString(), '$' + (p.budget - p.spent).toLocaleString(), p.progress + '%', p.status])
      : [];
    this.downloadCSV('Budget_Analysis', [
      ['BuildTrack – Budget Utilization Report'],
      ['Generated: ' + new Date().toLocaleDateString()],
      [''],
      ['Project', 'Committed Budget', 'Spent To Date', 'Remaining', 'Progress', 'Status'],
      ...rows
    ]);
  }

  downloadReport(format: string, reportName: string) {
    if (reportName === 'Resource_Allocations') {
      this.exportAllocations();
    } else {
      console.log(`Downloading ${reportName} in ${format} format...`);
    }
  }
}
