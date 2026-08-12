import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

// Interfaces for our application data models
export interface Project {
  id: string;
  name: string;
  location: string;
  clientName: string;
  status: 'Planning' | 'In Progress' | 'Completed' | 'Delayed';
  startDate: string;
  endDate: string;
  budget: number;
  spent: number;
  progress: number; // 0 to 100
  manager: string;
  image: string;
  description: string;
}

export interface WorkPackage {
  id: string;
  projectId: string;
  projectName: string;
  title: string;
  description: string;
  assignedTo: string; // Worker or Contractor
  assignedToRole: 'contractor' | 'worker';
  startDate: string;
  endDate: string;
  progress: number;
  status: 'Pending' | 'In Progress' | 'Completed';
}

export interface Material {
  id: string;
  name: string;
  unit: string;
  inStock: number;
  reorderLevel: number;
  costPerUnit: number;
}

export interface MaterialRequest {
  id: string;
  materialId: string;
  materialName: string;
  quantity: number;
  requestedBy: string; // e.g. "Vance Concrete Ltd"
  requestDate: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  projectName: string;
}

export interface WorkforceMember {
  id: string;
  name: string;
  role: string; // e.g. "Electrician", "Mason", "Plumber"
  assignedProject: string;
  status: 'Active' | 'On Leave' | 'Inactive';
  phone: string;
  avatar: string;
  company?: string;
}

export interface ContractorCompany {
  id: string;
  name: string;
  contactPerson: string;
  specialty: string;
  activeProjects: number;
  status: 'Active' | 'Under Review' | 'Suspended';
}

export interface DailyProgressReport {
  id: string;
  projectId: string;
  projectName?: string;
  reportDate: string;
  workCategory: string;
  activityPerformed: string;
  percentageWorkCompleted: number;
  contractorId?: string;
  contractorName?: string;
  workersPresent: number;
  workersAbsent: number;
  machineryUsed?: string;
  weatherConditions: string;
  safetyObservations?: string;
  qualityInspectionRemarks?: string;
  progressPhotograph?: string;
  delayEncountered: boolean;
  delayReason?: string;
  additionalComments?: string;
  siteEngineerId: string;
  siteEngineerName?: string;
  createdAt?: string;
  materialsConsumed: { materialId?: string; materialName: string; quantity: number; unit: string }[];
}

export type DailyProgressLog = DailyProgressReport | any;

export interface Milestone {
  id: string;
  projectId: string;
  projectName?: string;
  name: string;
  plannedStartDate: string;
  plannedEndDate: string;
  actualCompletionDate?: string;
  progressPercentage: number;
  status: 'Pending' | 'In Progress' | 'Completed' | 'Delayed';
  relatedActivities?: string;
  orderIndex: number;
}

export interface DelayRecord {
  id: string;
  projectId: string;
  projectName?: string;
  date: string;
  affectedActivity: string;
  delayReason: string;
  delayDuration: string;
  impactOnProject: 'Low' | 'Medium' | 'High' | 'Critical';
  additionalRemarks?: string;
  recordedById: string;
  recordedByName?: string;
  status: 'Active' | 'Mitigated' | 'Resolved';
  createdAt?: string;
}

export interface SiteActivityLog {
  id: string;
  projectId: string;
  projectName?: string;
  date: string;
  time: string;
  activityType: string;
  description: string;
  responsiblePerson: string;
  loggedById: string;
  loggedByName?: string;
  createdAt?: string;
}

export interface WeeklyProgressSummary {
  projectId: string;
  projectName: string;
  weekStartDate: string;
  weekEndDate: string;
  weeklyProgressPercentage: number;
  overallProjectProgress: number;
  projectStatus: string;
  totalReportsFiled: number;
  totalWorkersUtilized: number;
  majorActivitiesCompleted: string[];
  delaysEncounteredCount: number;
  delayDetails: { date: string; activity: string; reason: string }[];
  safetyObservationsCount: number;
  safetyObservations: string[];
  materialsConsumedSummary: { materialName: string; quantity: number; unit: string }[];
}

// ==========================================
// MODULE 4: RESOURCE MANAGEMENT INTERFACES
// ==========================================
export interface ResourceCategory {
  id: string;
  name: string;
  description?: string;
  createdAt?: string;
}

export interface Resource {
  id: string;
  name: string;
  categoryId: string;
  categoryName?: string;
  quantity: number;
  currentLocation: string;
  currentProjectId?: string;
  currentProjectName?: string;
  status: 'Available' | 'Allocated' | 'Under Maintenance' | 'Out of Service' | 'Idle' | 'Operating';
  responsiblePerson: string;
  modelNumber?: string;
  serialNumber?: string;
  purchaseDate?: string;
  hourlyCost: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface ResourceAllocation {
  id: string;
  resourceId: string;
  resourceName?: string;
  resourceCategory?: string;
  projectId: string;
  projectName?: string;
  allocationDate: string;
  expectedReturnDate: string;
  actualReturnDate?: string;
  quantity: number;
  responsiblePerson: string;
  allocatedById: string;
  allocatedByName?: string;
  status: 'Allocated' | 'Active' | 'Returned' | 'Cancelled';
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ResourceUtilization {
  id: string;
  resourceId: string;
  resourceName?: string;
  resourceCategory?: string;
  projectId: string;
  projectName?: string;
  usageDate: string;
  operatingHours: number;
  idleHours: number;
  totalAvailableHours: number;
  utilizationPercentage: number;
  dailyReportId?: string;
  recordedById?: string;
  recordedByName?: string;
  remarks?: string;
  createdAt?: string;
}

export interface MaintenanceRecord {
  id: string;
  resourceId: string;
  resourceName?: string;
  resourceCategory?: string;
  lastMaintenanceDate: string;
  nextMaintenanceDate: string;
  maintenanceType: 'Preventive' | 'Corrective' | 'Emergency' | 'Inspection';
  serviceEngineer: string;
  maintenanceCost: number;
  status: 'Scheduled' | 'In Progress' | 'Completed' | 'Overdue';
  remarks?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ResourceSummary {
  totalEquipment: number;
  availableCount: number;
  allocatedCount: number;
  operatingCount: number;
  idleCount: number;
  maintenanceCount: number;
  outOfServiceCount: number;
  averageUtilization: number;
  categoryCounts: { categoryId: string; categoryName: string; count: number }[];
}

export interface UtilizationSummary {
  totalOperatingHours: number;
  totalIdleHours: number;
  totalAvailableHours: number;
  overallUtilizationPercentage: number;
  byCategory: { categoryId: string; categoryName: string; operatingHours: number; utilizationPercentage: number }[];
  byProject: { projectId: string; projectName: string; operatingHours: number; utilizationPercentage: number }[];
}

export interface SitePhoto {
  id: string;
  projectId: string;
  url: string;
  caption: string;
  date: string;
  uploadedBy: string;
}

export interface IssueReport {
  id: string;
  projectId: string;
  projectName: string;
  title: string;
  description: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  status: 'Open' | 'In Review' | 'Resolved';
  reportedBy: string;
  reportedDate: string;
}

export interface WorkerPayslip {
  id: string;
  workerId: string;
  month: string;
  basicSalary: number;
  overtimePay: number;
  deductions: number;
  netPay: number;
  status: 'Paid' | 'Processing';
  paymentDate?: string;
}

export interface FeedbackMessage {
  id: string;
  clientName: string;
  projectName: string;
  rating: number; // 1-5
  message: string;
  date: string;
}

export interface ProjectDocument {
  id: string;
  projectId: string;
  name: string;
  size: string;
  type: 'pdf' | 'dwg' | 'xlsx' | 'docx' | 'image';
  uploadDate: string;
  uploadedBy: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private http = inject(HttpClient);

  // Signals containing the list states for reactive updates in views
  private readonly projectsSignal = signal<Project[]>([]);
  private readonly workPackagesSignal = signal<WorkPackage[]>([]);
  private readonly materialsSignal = signal<Material[]>([]);
  private readonly materialRequestsSignal = signal<MaterialRequest[]>([]);
  private readonly workforceSignal = signal<WorkforceMember[]>([]);
  private readonly contractorsSignal = signal<ContractorCompany[]>([]);
  private readonly dailyLogsSignal = signal<DailyProgressLog[]>([]);
  private readonly sitePhotosSignal = signal<SitePhoto[]>([]);
  private readonly issuesSignal = signal<IssueReport[]>([]);
  private readonly payslipsSignal = signal<WorkerPayslip[]>([]);
  private readonly feedbackSignal = signal<FeedbackMessage[]>([]);
  private readonly documentsSignal = signal<ProjectDocument[]>([]);

  // Module 3 Signals
  private readonly dailyProgressReportsSignal = signal<DailyProgressReport[]>([]);
  private readonly milestonesSignal = signal<Milestone[]>([]);
  private readonly delaysSignal = signal<DelayRecord[]>([]);
  private readonly activityLogsSignal = signal<SiteActivityLog[]>([]);
  private readonly weeklySummarySignal = signal<WeeklyProgressSummary | null>(null);

  // Module 4 Signals
  private readonly resourcesSignal = signal<Resource[]>([]);
  private readonly resourceCategoriesSignal = signal<ResourceCategory[]>([]);
  private readonly resourceAllocationsSignal = signal<ResourceAllocation[]>([]);
  private readonly resourceUtilizationsSignal = signal<ResourceUtilization[]>([]);
  private readonly maintenanceRecordsSignal = signal<MaintenanceRecord[]>([]);
  private readonly resourceSummarySignal = signal<ResourceSummary | null>(null);
  private readonly utilizationSummarySignal = signal<UtilizationSummary | null>(null);

  // Computed states
  readonly projects = this.projectsSignal.asReadonly();
  readonly workPackages = this.workPackagesSignal.asReadonly();
  readonly materials = this.materialsSignal.asReadonly();
  readonly materialRequests = this.materialRequestsSignal.asReadonly();
  readonly workforce = this.workforceSignal.asReadonly();
  readonly contractors = this.contractorsSignal.asReadonly();
  readonly dailyLogs = this.dailyLogsSignal.asReadonly();
  readonly sitePhotos = this.sitePhotosSignal.asReadonly();
  readonly issues = this.issuesSignal.asReadonly();
  readonly payslips = this.payslipsSignal.asReadonly();
  readonly feedback = this.feedbackSignal.asReadonly();
  readonly documents = this.documentsSignal.asReadonly();

  // Module 3 Readonly Signals
  readonly dailyProgressReports = this.dailyProgressReportsSignal.asReadonly();
  readonly milestones = this.milestonesSignal.asReadonly();
  readonly delays = this.delaysSignal.asReadonly();
  readonly activityLogs = this.activityLogsSignal.asReadonly();
  readonly weeklySummary = this.weeklySummarySignal.asReadonly();

  // Module 4 Readonly Signals
  readonly resources = this.resourcesSignal.asReadonly();
  readonly resourceCategories = this.resourceCategoriesSignal.asReadonly();
  readonly resourceAllocations = this.resourceAllocationsSignal.asReadonly();
  readonly resourceUtilizations = this.resourceUtilizationsSignal.asReadonly();
  readonly maintenanceRecords = this.maintenanceRecordsSignal.asReadonly();
  readonly resourceSummary = this.resourceSummarySignal.asReadonly();
  readonly utilizationSummary = this.utilizationSummarySignal.asReadonly();

  constructor() {
    this.loadAllData();
  }

  loadAllData() {
    this.http.get<{ success: boolean; data: any[] }>('/api/projects').subscribe(res => {
      if (res.success && res.data) {
        const projs = res.data;
        this.projectsSignal.set(projs.map(p => ({
          id: p.id,
          name: p.name,
          location: p.location,
          clientName: p.clientName,
          status: p.status,
          startDate: p.startDate?.split('T')[0],
          endDate: p.endDate?.split('T')[0],
          budget: p.budget,
          spent: p.spent,
          progress: p.progress,
          manager: p.manager?.name || 'Unassigned',
          image: p.image,
          description: p.description
        })));
        
        this.workPackagesSignal.set(projs.flatMap(p => p.workPackages.map((wp: any) => ({
          id: wp.id,
          projectId: wp.projectId,
          projectName: p.name,
          title: wp.title,
          description: wp.description,
          assignedTo: wp.assignedToId || 'Unassigned',
          assignedToRole: 'contractor',
          startDate: wp.startDate?.split('T')[0],
          endDate: wp.endDate?.split('T')[0],
          progress: wp.progress,
          status: wp.status
        }))));

        this.issuesSignal.set(projs.flatMap(p => p.issueReports.map((iss: any) => ({
          id: iss.id,
          projectId: iss.projectId,
          projectName: p.name,
          title: iss.title,
          description: iss.description,
          severity: iss.severity,
          status: iss.status,
          reportedBy: iss.reportedById,
          reportedDate: iss.reportedDate?.split('T')[0]
        }))));

        this.sitePhotosSignal.set(projs.flatMap(p => p.sitePhotos.map((ph: any) => ({
          id: ph.id,
          projectId: ph.projectId,
          url: ph.url,
          caption: ph.caption,
          date: ph.date?.split('T')[0],
          uploadedBy: ph.uploadedById
        }))));

        this.feedbackSignal.set(projs.flatMap(p => p.feedback.map((fb: any) => ({
          id: fb.id,
          clientName: fb.clientName,
          projectName: p.name,
          rating: fb.rating,
          message: fb.message,
          date: fb.date?.split('T')[0]
        }))));
      }
    });

    this.http.get<{ success: boolean; data: any[] }>('/api/materials').subscribe(res => {
      if (res.success && res.data) {
        this.materialsSignal.set(res.data);
      }
    });

    this.http.get<{ success: boolean; data: any[] }>('/api/materials/requests/all').subscribe(res => {
      if (res.success && res.data) {
        this.materialRequestsSignal.set(res.data.map(r => ({
          id: r.id,
          materialId: r.materialId,
          materialName: r.material?.name || 'Unknown',
          quantity: r.quantity,
          requestedBy: r.requestedBy?.name || 'Contractor',
          requestDate: r.requestDate?.split('T')[0],
          status: r.status,
          projectName: r.project?.name || 'Tower'
        })));
      }
    });

    this.http.get<{ success: boolean; data: any[] }>('/api/users').subscribe(res => {
      if (res.success && res.data) {
        const users = res.data;
        const wfMembers = users.filter((u: any) => u.role === 'worker').map((u: any) => ({
          id: u.profile?.id || u.id,
          name: u.name,
          role: u.profile?.role || 'Laborer',
          assignedProject: 'Vanguard Heights Commercial Tower',
          status: u.profile?.status || 'Active',
          phone: u.phone || '',
          avatar: u.avatar || '',
          company: u.company || ''
        }));
        this.workforceSignal.set(wfMembers);

        const contractorCompanies = users.filter((u: any) => u.role === 'contractor').map((u: any) => ({
          id: u.profile?.id || u.id,
          name: u.company || u.name,
          contactPerson: u.name,
          specialty: u.profile?.specialty || 'Foundation & Concrete Rigs',
          activeProjects: 1,
          status: u.profile?.status || 'Active'
        }));
        this.contractorsSignal.set(contractorCompanies);
      }
    });

    this.http.get<{ success: boolean; data: any[] }>('/api/reports').subscribe(res => {
      if (res.success && res.data) {
        this.dailyLogsSignal.set(res.data);
      }
    });

    this.http.get<{ success: boolean; data: any[] }>('/api/payments').subscribe(res => {
      if (res.success && res.data) {
        this.payslipsSignal.set(res.data.map((p: any) => ({
          id: p.id,
          workerId: p.workerId,
          month: p.month,
          basicSalary: p.basicSalary,
          overtimePay: p.overtimePay,
          deductions: p.deductions,
          netPay: p.netPay,
          status: p.status,
          paymentDate: p.paymentDate?.split('T')[0]
        })));
      }
    });

    // Load Module 3 Data
    this.loadModule3Data();

    // Load Module 4 Data
    this.loadModule4Data();
  }

  loadModule3Data(projectId?: string) {
    const pParam = projectId ? `?projectId=${projectId}` : '';
    
    // Daily progress reports
    this.http.get<{ success: boolean; data: DailyProgressReport[] }>(`/api/progress/daily${pParam}`).subscribe({
      next: res => {
        if (res.success && res.data) {
          this.dailyProgressReportsSignal.set(res.data);
        }
      },
      error: () => {}
    });

    // Milestones
    this.http.get<{ success: boolean; data: Milestone[] }>(`/api/progress/milestones${pParam}`).subscribe({
      next: res => {
        if (res.success && res.data) {
          this.milestonesSignal.set(res.data);
        }
      },
      error: () => {}
    });

    // Delays
    this.http.get<{ success: boolean; data: DelayRecord[] }>(`/api/progress/delays${pParam}`).subscribe({
      next: res => {
        if (res.success && res.data) {
          this.delaysSignal.set(res.data);
        }
      },
      error: () => {}
    });

    // Site activity logs
    this.http.get<{ success: boolean; data: SiteActivityLog[] }>(`/api/progress/activity-logs${pParam}`).subscribe({
      next: res => {
        if (res.success && res.data) {
          this.activityLogsSignal.set(res.data);
        }
      },
      error: () => {}
    });
  }

  // ==========================================
  // MODULE 4: RESOURCE MANAGEMENT API METHODS
  // ==========================================
  loadModule4Data(projectId?: string) {
    const pParam = projectId ? `?projectId=${projectId}` : '';

    // Categories
    this.http.get<{ success: boolean; data: ResourceCategory[] }>('/api/resources/categories').subscribe({
      next: res => {
        if (res.success && res.data) {
          this.resourceCategoriesSignal.set(res.data);
        }
      },
      error: () => {}
    });

    // Resources / Equipment
    this.http.get<{ success: boolean; data: Resource[] }>(`/api/resources${pParam}`).subscribe({
      next: res => {
        if (res.success && res.data) {
          this.resourcesSignal.set(res.data);
        }
      },
      error: () => {}
    });

    // Allocations
    this.http.get<{ success: boolean; data: ResourceAllocation[] }>(`/api/resource-allocations${pParam}`).subscribe({
      next: res => {
        if (res.success && res.data) {
          this.resourceAllocationsSignal.set(res.data);
        }
      },
      error: () => {}
    });

    // Utilizations
    this.http.get<{ success: boolean; data: ResourceUtilization[] }>(`/api/resource-utilization${pParam}`).subscribe({
      next: res => {
        if (res.success && res.data) {
          this.resourceUtilizationsSignal.set(res.data);
        }
      },
      error: () => {}
    });

    // Maintenance Records
    this.http.get<{ success: boolean; data: MaintenanceRecord[] }>('/api/maintenance').subscribe({
      next: res => {
        if (res.success && res.data) {
          this.maintenanceRecordsSignal.set(res.data);
        }
      },
      error: () => {}
    });

    // Resource KPI Summary
    this.loadResourceSummary();

    // Utilization Summary
    this.loadUtilizationSummary();
  }

  loadResourceSummary() {
    this.http.get<{ success: boolean; data: ResourceSummary }>('/api/resources/summary').subscribe({
      next: res => {
        if (res.success && res.data) {
          this.resourceSummarySignal.set(res.data);
        }
      },
      error: () => {}
    });
  }

  loadUtilizationSummary() {
    this.http.get<{ success: boolean; data: UtilizationSummary }>('/api/resource-utilization/summary').subscribe({
      next: res => {
        if (res.success && res.data) {
          this.utilizationSummarySignal.set(res.data);
        }
      },
      error: () => {}
    });
  }

  checkResourceAvailability(startDate: string, endDate: string, categoryId?: string): Observable<{ success: boolean; data: Resource[] }> {
    let url = `/api/resources/available?startDate=${startDate}&endDate=${endDate}`;
    if (categoryId) {
      url += `&categoryId=${categoryId}`;
    }
    return this.http.get<{ success: boolean; data: Resource[] }>(url);
  }

  addResource(resource: any): Observable<any> {
    return this.http.post<any>('/api/resources', resource);
  }

  updateResource(id: string, resource: any): Observable<any> {
    return this.http.put<any>(`/api/resources/${id}`, resource);
  }

  deleteResource(id: string): Observable<any> {
    return this.http.delete<any>(`/api/resources/${id}`);
  }

  allocateResource(alloc: any): Observable<any> {
    return this.http.post<any>('/api/resource-allocations', alloc);
  }

  updateAllocation(id: string, alloc: any): Observable<any> {
    return this.http.put<any>(`/api/resource-allocations/${id}`, alloc);
  }

  returnResourceAllocation(id: string, notes?: string): Observable<any> {
    const params = notes ? `?notes=${encodeURIComponent(notes)}` : '';
    return this.http.put<any>(`/api/resource-allocations/${id}/return${params}`, {});
  }

  deleteAllocation(id: string): Observable<any> {
    return this.http.delete<any>(`/api/resource-allocations/${id}`);
  }

  logResourceUtilization(utl: any): Observable<any> {
    return this.http.post<any>('/api/resource-utilization', utl);
  }

  scheduleMaintenance(mnt: any): Observable<any> {
    return this.http.post<any>('/api/maintenance', mnt);
  }

  updateMaintenanceRecord(id: string, mnt: any): Observable<any> {
    return this.http.put<any>(`/api/maintenance/${id}`, mnt);
  }

  deleteMaintenanceRecord(id: string): Observable<any> {
    return this.http.delete<any>(`/api/maintenance/${id}`);
  }

  loadWeeklySummary(projectId: string, weekStartDate?: string) {
    let url = `/api/progress/weekly-summary?projectId=${projectId}`;
    if (weekStartDate) {
      url += `&weekStartDate=${weekStartDate}`;
    }
    this.http.get<{ success: boolean; data: WeeklyProgressSummary }>(url).subscribe({
      next: res => {
        if (res.success && res.data) {
          this.weeklySummarySignal.set(res.data);
        }
      },
      error: () => {}
    });
  }

  // Add Daily Progress Report (Module 3)
  addDailyProgressReport(report: any): Observable<any> {
    return this.http.post<any>('/api/progress/daily', report);
  }

  updateDailyProgressReport(id: string, report: any): Observable<any> {
    return this.http.put<any>(`/api/progress/daily/${id}`, report);
  }

  deleteDailyProgressReport(id: string): Observable<any> {
    return this.http.delete<any>(`/api/progress/daily/${id}`);
  }

  // Milestones CRUD
  addMilestone(milestone: any): Observable<any> {
    return this.http.post<any>('/api/progress/milestones', milestone);
  }

  updateMilestone(id: string, milestone: any): Observable<any> {
    return this.http.put<any>(`/api/progress/milestones/${id}`, milestone);
  }

  deleteMilestone(id: string): Observable<any> {
    return this.http.delete<any>(`/api/progress/milestones/${id}`);
  }

  // Delay Records CRUD
  addDelayRecord(delay: any): Observable<any> {
    return this.http.post<any>('/api/progress/delays', delay);
  }

  updateDelay(id: string, delay: any): Observable<any> {
    return this.http.put<any>(`/api/progress/delays/${id}`, delay);
  }

  deleteDelayRecord(id: string): Observable<any> {
    return this.http.delete<any>(`/api/progress/delays/${id}`);
  }

  // Site Activity Logs CRUD
  addSiteActivityLog(log: any): Observable<any> {
    return this.http.post<any>('/api/progress/activity-logs', log);
  }

  updateSiteActivityLog(id: string, log: any): Observable<any> {
    return this.http.put<any>(`/api/progress/activity-logs/${id}`, log);
  }

  deleteSiteActivityLog(id: string): Observable<any> {
    return this.http.delete<any>(`/api/progress/activity-logs/${id}`);
  }

  // Add Daily Progress Log (Legacy compatibility)
  addDailyLog(log: Omit<DailyProgressLog, 'id'>) {
    this.http.post<any>('/api/reports', log).subscribe(() => {
      this.loadAllData();
    });
  }

  // Add Site Photo
  addSitePhoto(photo: Omit<SitePhoto, 'id' | 'date'>) {
    this.http.post<any>(`/api/projects/${photo.projectId}/photos`, photo).subscribe(() => {
      this.loadAllData();
    });
  }

  // Report Issue
  reportIssue(issue: Omit<IssueReport, 'id' | 'status' | 'reportedDate'>) {
    this.http.post<any>(`/api/projects/${issue.projectId}/issues`, issue).subscribe(() => {
      this.loadAllData();
    });
  }

  // Resolve Issue
  resolveIssue(id: string) {
    const issue = this.issues().find(i => i.id === id);
    if (issue) {
      this.http.put<any>(`/api/projects/${issue.projectId}/issues/${id}`, { status: 'Resolved' }).subscribe(() => {
        this.loadAllData();
      });
    }
  }

  // Submit Material Request (Contractor)
  submitMaterialRequest(req: Omit<MaterialRequest, 'id' | 'requestDate' | 'status'>) {
    this.http.post<any>('/api/materials/requests/submit', req).subscribe(() => {
      this.loadAllData();
    });
  }

  // Approve/Reject Material Request (Admin)
  respondToMaterialRequest(id: string, approve: boolean) {
    this.http.put<any>(`/api/materials/requests/${id}/respond`, { approve }).subscribe(() => {
      this.loadAllData();
    });
  }

  // Submit Client Feedback
  submitFeedback(fb: Omit<FeedbackMessage, 'id' | 'date'>) {
    const proj = this.projects().find(p => p.name === fb.projectName);
    const projectId = proj?.id || 'P-101';
    this.http.post<any>(`/api/projects/${projectId}/feedback`, fb).subscribe(() => {
      this.loadAllData();
    });
  }

  // Assign Task to Worker / Contractor (Admin / PM)
  assignWorkPackage(wp: Omit<WorkPackage, 'id' | 'progress' | 'status'>) {
    this.http.post<any>(`/api/projects/${wp.projectId}/tasks`, wp).subscribe(() => {
      this.loadAllData();
    });
  }

  // Update Work Package Progress (Worker / Contractor)
  updateWorkPackageStatus(id: string, progress: number, status: 'Pending' | 'In Progress' | 'Completed') {
    const wp = this.workPackages().find(w => w.id === id);
    if (wp) {
      this.http.put<any>(`/api/projects/${wp.projectId}/tasks/${id}`, { progress, status }).subscribe(() => {
        this.loadAllData();
      });
    }
  }

  // Add Workforce Member (Admin)
  addWorkforceMember(member: Omit<WorkforceMember, 'id' | 'status'>) {
    const nameSplit = member.name.split(' ');
    const email = `${nameSplit[0]?.toLowerCase() || 'user'}_${Math.floor(Math.random() * 100)}@buildtrack.com`;
    this.http.post<any>('/api/users', {
      name: member.name,
      email,
      password: 'password123',
      role: 'worker',
      phone: member.phone,
      trade: member.role
    }).subscribe(() => {
      this.loadAllData();
    });
  }

  // Edit Workforce Member Status
  updateWorkforceStatus(id: string, status: 'Active' | 'On Leave' | 'Inactive') {
    this.http.put<any>(`/api/users/${id}`, { status }).subscribe(() => {
      this.loadAllData();
    });
  }

  // Add Project (Admin)
  addProject(project: Omit<Project, 'id' | 'spent' | 'progress'>) {
    const projId = `P-${Math.floor(100 + Math.random() * 900)}`;
    this.http.post<any>('/api/projects', { ...project, id: projId }).subscribe(() => {
      this.loadAllData();
    });
  }
}

