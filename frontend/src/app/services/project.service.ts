import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

// ==========================================
// CORE PROJECT INTERFACES
// ==========================================

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
  progress: number;
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
  assignedTo: string;
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
  requestedBy: string;
  requestDate: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  projectName: string;
}

export interface WorkforceMember {
  id: string;
  workerId?: string;
  name: string;
  contactInfo?: string;
  phone?: string;
  role?: string;
  skillWorkType?: string;
  categoryId?: string;
  categoryName?: string;
  contractorId?: string;
  contractorName?: string;
  assignedProjectId?: string;
  assignedProject?: string;
  assignedProjectName?: string;
  joiningDate?: string;
  status: 'Active' | 'On Leave' | 'Inactive' | 'Transferred';
  payRate?: number;
  avatar?: string;
  company?: string;
}

export interface WorkforceCategory {
  id: string;
  name: string;
  description?: string;
  createdAt?: string;
}

export interface WorkerAssignment {
  id: string;
  workerId: string;
  workerName?: string;
  contractorId?: string;
  contractorName?: string;
  projectId: string;
  projectName?: string;
  workActivity: string;
  startDate: string;
  endDate?: string;
  status: 'Active' | 'Completed' | 'Transferred' | 'Cancelled';
  createdAt?: string;
}

export interface AttendanceRecord {
  id: string;
  workerId: string;
  workerName?: string;
  workerRole?: string;
  categoryName?: string;
  projectId?: string;
  projectName?: string;
  contractorId?: string;
  contractorName?: string;
  shiftId?: string;
  date: string;
  status: 'Present' | 'Absent' | 'Leave';
  checkIn?: string;
  checkOut?: string;
  workingHours: number;
  overtimeHours: number;
  remarks?: string;
}

export interface Shift {
  id: string;
  name: string;
  startTime: string;
  endTime: string;
  projectId: string;
  projectName?: string;
  shiftDate: string;
  status: 'Scheduled' | 'Active' | 'Completed' | 'Cancelled';
  assignedWorkersCount?: number;
  assignedWorkers?: {
    assignmentId?: string;
    workerId: string;
    workerName?: string;
    workerRole?: string;
    status?: string;
  }[];
  createdAt?: string;
}

export interface PayrollRecord {
  id: string;
  workerId: string;
  workerName?: string;
  workerCategory?: string;
  projectId?: string;
  projectName?: string;
  contractorId?: string;
  contractorName?: string;
  monthYear: string;
  payRate: number;
  workingDays: number;
  workingHours: number;
  overtimeHours: number;
  leaveDays: number;
  estimatedPay: number;
  status: 'Pending' | 'Processing' | 'Approved' | 'Paid';
  updatedAt?: string;
}

export interface WorkforceSummary {
  totalWorkers: number;
  activeWorkers: number;
  presentWorkersToday: number;
  absentWorkersToday: number;
  onLeaveWorkersToday: number;
  attendancePercentage: number;
  categoryBreakdown: Record<string, number>;
  projectBreakdown: Record<string, number>;
  contractorBreakdown: Record<string, number>;
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
  materialsConsumed: {
    materialId?: string;
    materialName: string;
    quantity: number;
    unit: string;
  }[];
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
  delayDetails: {
    date: string;
    activity: string;
    reason: string;
  }[];
  safetyObservationsCount: number;
  safetyObservations: string[];
  materialsConsumedSummary: {
    materialName: string;
    quantity: number;
    unit: string;
  }[];
}

// ==========================================
// MODULE 7: PROCUREMENT MANAGEMENT
// ==========================================

export interface ProcurementCategory {
  id: string;
  name: string;
  description?: string;
}

export interface ProcurementRequest {
  id: string;

  projectId: string;
  projectName?: string;

  requestedById?: string;
  requestedByName?: string;

  categoryId?: string;
  categoryName?: string;

  itemName: string;
  description?: string;

  quantity: number;
  unit: string;

  requiredDate?: string;
  estimatedCost?: number;
  purpose?: string;

  priority: 'Low' | 'Medium' | 'High' | 'Critical' | 'Urgent';

  remarks?: string;
  rejectionReason?: string;

  materialId?: string;
  resourceId?: string;

  availableQuantity?: number;
  shortageQuantity?: number;

  requestDate?: string;

  status:
    | 'Pending'
    | 'Approved'
    | 'Rejected'
    | 'Cancelled'
    | 'Processing'
    | 'Completed';
}

export interface ProcurementRequestCreate {
  projectId: string;
  categoryId?: string;
  itemName: string;
  description?: string;
  quantity: number;
  unit: string;
  requiredDate?: string;
  estimatedCost?: number;
  purpose?: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical' | 'Urgent';
  remarks?: string;
  materialId?: string;
  resourceId?: string;
}

export interface ProcurementVendor {
  id: string;
  name: string;
  contactPerson?: string;
  email?: string;
  phone?: string;
  address?: string;
  status?: 'Active' | 'Inactive';
}

export interface ProcurementSummary {
  total_vendors: number;
  active_vendors: number;

  total_procurement_requests: number;
  pending_requests: number;
  approved_requests: number;
  rejected_requests: number;

  active_purchase_orders: number;
  orders_pending_delivery: number;
  partially_received_orders: number;
  completed_orders: number;

  total_invoices: number;
  pending_invoices: number;
  overdue_invoices: number;

  total_procurement_value: number;

  recent_requests?: any[];
  recent_purchase_orders?: any[];
  upcoming_deliveries?: any[];
}

// ==========================================
// MODULE 4: RESOURCE MANAGEMENT
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
  status:
    | 'Available'
    | 'Allocated'
    | 'Under Maintenance'
    | 'Out of Service'
    | 'Idle'
    | 'Operating';
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
  categoryCounts: {
    categoryId: string;
    categoryName: string;
    count: number;
  }[];
}

export interface UtilizationSummary {
  totalOperatingHours: number;
  totalIdleHours: number;
  totalAvailableHours: number;
  overallUtilizationPercentage: number;
  byCategory: {
    categoryId: string;
    categoryName: string;
    operatingHours: number;
    utilizationPercentage: number;
  }[];
  byProject: {
    projectId: string;
    projectName: string;
    operatingHours: number;
    utilizationPercentage: number;
  }[];
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
  rating: number;
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

// ==========================================
// PROJECT SERVICE
// ==========================================

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private http = inject(HttpClient);

  // ==========================================
  // MAIN SIGNALS
  // ==========================================

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

  // Module 3
  private readonly dailyProgressReportsSignal =
    signal<DailyProgressReport[]>([]);
  private readonly milestonesSignal = signal<Milestone[]>([]);
  private readonly delaysSignal = signal<DelayRecord[]>([]);
  private readonly activityLogsSignal = signal<SiteActivityLog[]>([]);
  private readonly weeklySummarySignal =
    signal<WeeklyProgressSummary | null>(null);

  // Module 4
  private readonly resourcesSignal = signal<Resource[]>([]);
  private readonly resourceCategoriesSignal =
    signal<ResourceCategory[]>([]);
  private readonly resourceAllocationsSignal =
    signal<ResourceAllocation[]>([]);
  private readonly resourceUtilizationsSignal =
    signal<ResourceUtilization[]>([]);
  private readonly maintenanceRecordsSignal =
    signal<MaintenanceRecord[]>([]);
  private readonly resourceSummarySignal =
    signal<ResourceSummary | null>(null);
  private readonly utilizationSummarySignal =
    signal<UtilizationSummary | null>(null);

  // Module 6
  private readonly workforceCategoriesSignal =
    signal<WorkforceCategory[]>([]);
  private readonly workerAssignmentsSignal =
    signal<WorkerAssignment[]>([]);
  private readonly attendanceRecordsSignal =
    signal<AttendanceRecord[]>([]);
  private readonly shiftsSignal = signal<Shift[]>([]);
  private readonly payrollRecordsSignal =
    signal<PayrollRecord[]>([]);
  private readonly workforceSummarySignal =
    signal<WorkforceSummary | null>(null);

  // Module 7
  private readonly procurementCategoriesSignal =
    signal<ProcurementCategory[]>([]);
  private readonly procurementRequestsSignal =
    signal<ProcurementRequest[]>([]);
  private readonly procurementVendorsSignal =
    signal<ProcurementVendor[]>([]);
  private readonly procurementSummarySignal =
    signal<ProcurementSummary | null>(null);

  // ==========================================
  // READONLY SIGNALS
  // ==========================================

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

  readonly dailyProgressReports =
    this.dailyProgressReportsSignal.asReadonly();
  readonly milestones = this.milestonesSignal.asReadonly();
  readonly delays = this.delaysSignal.asReadonly();
  readonly activityLogs = this.activityLogsSignal.asReadonly();
  readonly weeklySummary = this.weeklySummarySignal.asReadonly();

  readonly resources = this.resourcesSignal.asReadonly();
  readonly resourceCategories =
    this.resourceCategoriesSignal.asReadonly();
  readonly resourceAllocations =
    this.resourceAllocationsSignal.asReadonly();
  readonly resourceUtilizations =
    this.resourceUtilizationsSignal.asReadonly();
  readonly maintenanceRecords =
    this.maintenanceRecordsSignal.asReadonly();
  readonly resourceSummary =
    this.resourceSummarySignal.asReadonly();
  readonly utilizationSummary =
    this.utilizationSummarySignal.asReadonly();

  readonly workforceCategories =
    this.workforceCategoriesSignal.asReadonly();
  readonly workerAssignments =
    this.workerAssignmentsSignal.asReadonly();
  readonly attendanceRecords =
    this.attendanceRecordsSignal.asReadonly();
  readonly shifts = this.shiftsSignal.asReadonly();
  readonly payrollRecords =
    this.payrollRecordsSignal.asReadonly();
  readonly workforceSummary =
    this.workforceSummarySignal.asReadonly();

  // Module 7 readonly
  readonly procurementCategories =
    this.procurementCategoriesSignal.asReadonly();
  readonly procurementRequests =
    this.procurementRequestsSignal.asReadonly();
  readonly procurementVendors =
    this.procurementVendorsSignal.asReadonly();
  readonly procurementSummary =
    this.procurementSummarySignal.asReadonly();

  constructor() {
    this.loadAllData();
  }

  // ==========================================
  // LOAD ALL DATA
  // ==========================================

  loadAllData() {
    this.http
      .get<{ success: boolean; data: any[] }>('/api/projects')
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            const projs = res.data;

            this.projectsSignal.set(
              projs.map((p: any) => ({
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
              }))
            );

            this.workPackagesSignal.set(
              projs.flatMap((p: any) =>
                (p.workPackages || []).map((wp: any) => ({
                  id: wp.id,
                  projectId: wp.projectId,
                  projectName: p.name,
                  title: wp.title,
                  description: wp.description,
                  assignedTo:
                    wp.assignedTo?.name ||
                    wp.assignedToName ||
                    wp.assignedToId ||
                    'Unassigned',
                  assignedToRole: 'contractor',
                  startDate: wp.startDate?.split('T')[0],
                  endDate: wp.endDate?.split('T')[0],
                  progress: wp.progress,
                  status: wp.status
                }))
              )
            );

            this.issuesSignal.set(
              projs.flatMap((p: any) =>
                (p.issueReports || []).map((iss: any) => ({
                  id: iss.id,
                  projectId: iss.projectId,
                  projectName: p.name,
                  title: iss.title,
                  description: iss.description,
                  severity: iss.severity,
                  status: iss.status,
                  reportedBy: iss.reportedById,
                  reportedDate: iss.reportedDate?.split('T')[0]
                }))
              )
            );

            this.sitePhotosSignal.set(
              projs.flatMap((p: any) =>
                (p.sitePhotos || []).map((ph: any) => ({
                  id: ph.id,
                  projectId: ph.projectId,
                  url: ph.url,
                  caption: ph.caption,
                  date: ph.date?.split('T')[0],
                  uploadedBy: ph.uploadedById
                }))
              )
            );

            this.feedbackSignal.set(
              projs.flatMap((p: any) =>
                (p.feedback || []).map((fb: any) => ({
                  id: fb.id,
                  clientName: fb.clientName,
                  projectName: p.name,
                  rating: fb.rating,
                  message: fb.message,
                  date: fb.date?.split('T')[0]
                }))
              )
            );
          }
        },
        error: (err) => console.error('Failed to load projects', err)
      });

    this.http
      .get<{ success: boolean; data: any[] }>('/api/materials')
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.materialsSignal.set(res.data);
          }
        },
        error: () => {}
      });

    this.http
      .get<{ success: boolean; data: any[] }>(
        '/api/materials/requests/all'
      )
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.materialRequestsSignal.set(
              res.data.map((r: any) => ({
                id: r.id,
                materialId: r.materialId,
                materialName: r.material?.name || 'Unknown',
                quantity: r.quantity,
                requestedBy:
                  r.requestedBy?.company ||
                  r.requestedBy?.name ||
                  r.requestedByName ||
                  'Contractor',
                requestDate:
                  r.requestDate?.split('T')[0] ||
                  r.createdAt?.split('T')[0],
                status: r.status,
                projectName:
                  r.project?.name ||
                  r.projectName ||
                  'Project'
              }))
            );
          }
        },
        error: () => {}
      });

    this.http
      .get<{ success: boolean; data: any[] }>('/api/users')
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            const users = res.data;

            const wfMembers = users
              .filter((u: any) => u.role === 'worker')
              .map((u: any) => ({
                id: u.profile?.id || u.id,
                workerId: u.id,
                name: u.name,
                role: u.profile?.role || 'Laborer',
                assignedProject:
                  u.profile?.assignedProject ||
                  'Vanguard Heights Commercial Tower',
                status: u.profile?.status || 'Active',
                phone: u.phone || '',
                avatar: u.avatar || '',
                company: u.company || ''
              }));

            this.workforceSignal.set(wfMembers);

            const contractorCompanies = users
              .filter((u: any) => u.role === 'contractor')
              .map((u: any) => ({
                id: u.profile?.id || u.id,
                name: u.company || u.name,
                contactPerson: u.name,
                specialty:
                  u.profile?.specialty ||
                  'Foundation & Concrete Rigs',
                activeProjects: 1,
                status: u.profile?.status || 'Active'
              }));

            this.contractorsSignal.set(contractorCompanies);
          }
        },
        error: () => {}
      });

    this.http
      .get<{ success: boolean; data: any[] }>('/api/reports')
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.dailyLogsSignal.set(res.data);
          }
        },
        error: () => {}
      });

    this.http
      .get<{ success: boolean; data: any[] }>('/api/payments')
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.payslipsSignal.set(
              res.data.map((p: any) => ({
                id: p.id,
                workerId: p.workerId,
                month: p.month,
                basicSalary: p.basicSalary,
                overtimePay: p.overtimePay,
                deductions: p.deductions,
                netPay: p.netPay,
                status: p.status,
                paymentDate: p.paymentDate?.split('T')[0]
              }))
            );
          }
        },
        error: () => {}
      });

    this.loadModule3Data();
    this.loadModule4Data();
    this.loadModule6Data();
    this.loadModule7Data();
  }

  // ==========================================
  // MODULE 3
  // ==========================================

  loadModule3Data(projectId?: string) {
    const pParam = projectId ? `?projectId=${projectId}` : '';

    this.http
      .get<{ success: boolean; data: DailyProgressReport[] }>(
        `/api/progress/daily${pParam}`
      )
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.dailyProgressReportsSignal.set(res.data);
          }
        },
        error: () => {}
      });

    this.http
      .get<{ success: boolean; data: Milestone[] }>(
        `/api/progress/milestones${pParam}`
      )
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.milestonesSignal.set(res.data);
          }
        },
        error: () => {}
      });

    this.http
      .get<{ success: boolean; data: DelayRecord[] }>(
        `/api/progress/delays${pParam}`
      )
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.delaysSignal.set(res.data);
          }
        },
        error: () => {}
      });

    this.http
      .get<{ success: boolean; data: SiteActivityLog[] }>(
        `/api/progress/activity-logs${pParam}`
      )
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.activityLogsSignal.set(res.data);
          }
        },
        error: () => {}
      });
  }

  loadWeeklySummary(projectId: string, weekStartDate?: string) {
    let url = `/api/progress/weekly-summary?projectId=${projectId}`;

    if (weekStartDate) {
      url += `&weekStartDate=${weekStartDate}`;
    }

    this.http
      .get<{ success: boolean; data: WeeklyProgressSummary }>(url)
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.weeklySummarySignal.set(res.data);
          }
        },
        error: () => {}
      });
  }

  addDailyProgressReport(report: any): Observable<any> {
    return this.http.post<any>('/api/progress/daily', report);
  }

  updateDailyProgressReport(
    id: string,
    report: any
  ): Observable<any> {
    return this.http.put<any>(
      `/api/progress/daily/${id}`,
      report
    );
  }

  deleteDailyProgressReport(id: string): Observable<any> {
    return this.http.delete<any>(
      `/api/progress/daily/${id}`
    );
  }

  addMilestone(milestone: any): Observable<any> {
    return this.http.post<any>(
      '/api/progress/milestones',
      milestone
    );
  }

  updateMilestone(
    id: string,
    milestone: any
  ): Observable<any> {
    return this.http.put<any>(
      `/api/progress/milestones/${id}`,
      milestone
    );
  }

  deleteMilestone(id: string): Observable<any> {
    return this.http.delete<any>(
      `/api/progress/milestones/${id}`
    );
  }

  addDelayRecord(delay: any): Observable<any> {
    return this.http.post<any>(
      '/api/progress/delays',
      delay
    );
  }

  updateDelay(id: string, delay: any): Observable<any> {
    return this.http.put<any>(
      `/api/progress/delays/${id}`,
      delay
    );
  }

  deleteDelayRecord(id: string): Observable<any> {
    return this.http.delete<any>(
      `/api/progress/delays/${id}`
    );
  }

  addSiteActivityLog(log: any): Observable<any> {
    return this.http.post<any>(
      '/api/progress/activity-logs',
      log
    );
  }

  updateSiteActivityLog(
    id: string,
    log: any
  ): Observable<any> {
    return this.http.put<any>(
      `/api/progress/activity-logs/${id}`,
      log
    );
  }

  deleteSiteActivityLog(id: string): Observable<any> {
    return this.http.delete<any>(
      `/api/progress/activity-logs/${id}`
    );
  }

  // ==========================================
  // MODULE 4
  // ==========================================

  loadModule4Data(projectId?: string) {
    const pParam = projectId ? `?projectId=${projectId}` : '';

    this.http
      .get<{ success: boolean; data: ResourceCategory[] }>(
        '/api/resources/categories'
      )
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.resourceCategoriesSignal.set(res.data);
          }
        },
        error: () => {}
      });

    this.http
      .get<{ success: boolean; data: Resource[] }>(
        `/api/resources${pParam}`
      )
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.resourcesSignal.set(res.data);
          }
        },
        error: () => {}
      });

    this.http
      .get<{ success: boolean; data: ResourceAllocation[] }>(
        `/api/resource-allocations${pParam}`
      )
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.resourceAllocationsSignal.set(res.data);
          }
        },
        error: () => {}
      });

    this.http
      .get<{ success: boolean; data: ResourceUtilization[] }>(
        `/api/resource-utilization${pParam}`
      )
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.resourceUtilizationsSignal.set(res.data);
          }
        },
        error: () => {}
      });

    this.http
      .get<{ success: boolean; data: MaintenanceRecord[] }>(
        '/api/maintenance'
      )
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.maintenanceRecordsSignal.set(res.data);
          }
        },
        error: () => {}
      });

    this.loadResourceSummary();
    this.loadUtilizationSummary();
  }

  loadResourceSummary() {
    this.http
      .get<{ success: boolean; data: ResourceSummary }>(
        '/api/resources/summary'
      )
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.resourceSummarySignal.set(res.data);
          }
        },
        error: () => {}
      });
  }

  loadUtilizationSummary() {
    this.http
      .get<{ success: boolean; data: UtilizationSummary }>(
        '/api/resource-utilization/summary'
      )
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.utilizationSummarySignal.set(res.data);
          }
        },
        error: () => {}
      });
  }

  checkResourceAvailability(
    startDate: string,
    endDate: string,
    categoryId?: string
  ): Observable<{ success: boolean; data: Resource[] }> {
    let url =
      `/api/resources/available?startDate=${startDate}` +
      `&endDate=${endDate}`;

    if (categoryId) {
      url += `&categoryId=${categoryId}`;
    }

    return this.http.get<{
      success: boolean;
      data: Resource[];
    }>(url);
  }

  addResource(resource: any): Observable<any> {
    return this.http.post<any>(
      '/api/resources',
      resource
    );
  }

  updateResource(
    id: string,
    resource: any
  ): Observable<any> {
    return this.http.put<any>(
      `/api/resources/${id}`,
      resource
    );
  }

  deleteResource(id: string): Observable<any> {
    return this.http.delete<any>(
      `/api/resources/${id}`
    );
  }

  allocateResource(alloc: any): Observable<any> {
    return this.http.post<any>(
      '/api/resource-allocations',
      alloc
    );
  }

  updateAllocation(
    id: string,
    alloc: any
  ): Observable<any> {
    return this.http.put<any>(
      `/api/resource-allocations/${id}`,
      alloc
    );
  }

  returnResourceAllocation(
    id: string,
    notes?: string
  ): Observable<any> {
    const params = notes
      ? `?notes=${encodeURIComponent(notes)}`
      : '';

    return this.http.put<any>(
      `/api/resource-allocations/${id}/return${params}`,
      {}
    );
  }

  deleteAllocation(id: string): Observable<any> {
    return this.http.delete<any>(
      `/api/resource-allocations/${id}`
    );
  }

  logResourceUtilization(utl: any): Observable<any> {
    return this.http.post<any>(
      '/api/resource-utilization',
      utl
    );
  }

  scheduleMaintenance(mnt: any): Observable<any> {
    return this.http.post<any>(
      '/api/maintenance',
      mnt
    );
  }

  updateMaintenanceRecord(
    id: string,
    mnt: any
  ): Observable<any> {
    return this.http.put<any>(
      `/api/maintenance/${id}`,
      mnt
    );
  }

  deleteMaintenanceRecord(id: string): Observable<any> {
    return this.http.delete<any>(
      `/api/maintenance/${id}`
    );
  }

  // ==========================================
  // MODULE 7 PROCUREMENT
  // ==========================================

  // Module 7 component uses these wrappers when a single API refresh must update the shared signal.
  mapProcurementRequestForModule7(r: any): ProcurementRequest {
    return this.mapProcurementRequest(r);
  }

  setProcurementRequestsForModule7(requests: ProcurementRequest[]): void {
    this.procurementRequestsSignal.set(requests);
  }

  private mapProcurementRequest(r: any): ProcurementRequest {
    return {
      id: r.id,

      projectId:
        r.projectId ||
        r.project_id ||
        r.project?.id ||
        '',

      projectName:
        r.projectName ||
        r.project_name ||
        r.project?.name ||
        '',

      requestedById:
        r.requestedById ||
        r.requested_by_id ||
        r.requestedBy?.id ||
        '',

      requestedByName:
        r.requestedByName ||
        r.requested_by_name ||
        r.requestedBy?.company ||
        r.requestedBy?.name ||
        '',

      categoryId:
        r.categoryId ||
        r.category_id ||
        r.category?.id ||
        undefined,

      categoryName:
        r.categoryName ||
        r.category_name ||
        r.category?.name ||
        undefined,

      itemName:
        r.itemName ||
        r.item_name ||
        '',

      description:
        r.description ||
        undefined,

      quantity:
        Number(r.quantity || 0),

      unit:
        r.unit || '',

      requiredDate:
        r.requiredDate?.split('T')[0] ||
        r.required_date?.split('T')[0] ||
        undefined,

      estimatedCost:
        r.estimatedCost ??
        r.estimated_cost ??
        undefined,

      purpose:
        r.purpose ||
        undefined,

      priority:
        r.priority || 'Medium',

      remarks:
        r.remarks ||
        undefined,

      rejectionReason:
        r.rejectionReason ||
        r.rejection_reason ||
        undefined,

      materialId:
        r.materialId ||
        r.material_id ||
        undefined,

      resourceId:
        r.resourceId ||
        r.resource_id ||
        undefined,

      availableQuantity:
        r.availableQuantity ??
        r.available_quantity ??
        undefined,

      shortageQuantity:
        r.shortageQuantity ??
        r.shortage_quantity ??
        undefined,

      requestDate:
        r.requestDate?.split('T')[0] ||
        r.request_date?.split('T')[0] ||
        r.createdAt?.split('T')[0] ||
        r.created_at?.split('T')[0] ||
        undefined,

      status:
        r.status || 'Pending'
    };
  }

  loadModule7Data() {
    // Safe shared preload for every logged-in role. Role-restricted data (vendors, summary,
    // POs and invoices) is loaded by ProcurementManagementComponent only for allowed roles.
    this.http.get<{ success: boolean; data: ProcurementCategory[] }>('/api/procurement/categories').subscribe({
      next: (res) => { if (res.success && res.data) this.procurementCategoriesSignal.set(res.data); },
      error: () => {}
    });
    this.loadProcurementRequests();
  }

  loadProcurementSummary() {
    this.http
      .get<{ success: boolean; data: ProcurementSummary }>(
        '/api/procurement/summary'
      )
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.procurementSummarySignal.set(res.data);
          }
        },
        error: (err) => {
          console.error(
            'Failed to load procurement summary',
            err
          );
        }
      });
  }

  loadProcurementRequests() {
    this.http
      .get<{ success: boolean; data: any[] }>(
        '/api/procurement/requests'
      )
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            const mappedRequests =
              res.data.map((request: any) =>
                this.mapProcurementRequest(request)
              );

            this.procurementRequestsSignal.set(
              mappedRequests
            );
          }
        },
        error: (err) => {
          console.error(
            'Failed to load procurement requests',
            err
          );
        }
      });
  }

  // CREATE PROCUREMENT REQUEST
  // Contractor / Site Engineer
  createProcurementRequest(
    request: ProcurementRequestCreate
  ): Observable<any> {
    const payload = {
      project_id: request.projectId,

      category_id:
        request.categoryId || null,

      item_name: request.itemName,

      description:
        request.description || null,

      quantity:
        Number(request.quantity),

      unit:
        request.unit,

      required_date:
        request.requiredDate || null,

      estimated_cost:
        request.estimatedCost ?? null,

      purpose:
        request.purpose || null,

      priority:
        request.priority,

      remarks:
        request.remarks || null,

      material_id:
        request.materialId || null,

      resource_id:
        request.resourceId || null
    };

    return this.http
      .post<any>(
        '/api/procurement/requests',
        payload
      )
      .pipe(
        tap((res) => {
          console.log(
            'Procurement request created:',
            res
          );

          // IMPORTANT:
          // POST ke turant baad latest requests load
          // Isse Contractor History aur Admin List update hogi
          this.loadProcurementRequests();

          // Admin dashboard counters update
          this.loadProcurementSummary();
        })
      );
  }

  // UPDATE / APPROVE / REJECT / CANCEL
  updateProcurementRequest(
    id: string,
    data: {
      status?: string;
      rejection_reason?: string;
      priority?: string;
      remarks?: string;
    }
  ): Observable<any> {
    return this.http
      .put<any>(
        `/api/procurement/requests/${id}`,
        data
      )
      .pipe(
        tap(() => {
          // Status change ke baad dono dashboard refresh
          this.loadProcurementRequests();
          this.loadProcurementSummary();
        })
      );
  }

  approveProcurementRequest(id: string): Observable<any> {
    return this.http.post<any>(`/api/procurement/requests/${id}/approve`, {}).pipe(
      tap(() => this.refreshProcurementData())
    );
  }

  rejectProcurementRequest(id: string, rejectionReason: string): Observable<any> {
    return this.http.post<any>(`/api/procurement/requests/${id}/reject`, { rejection_reason: rejectionReason }).pipe(
      tap(() => this.refreshProcurementData())
    );
  }

  cancelProcurementRequest(
    id: string
  ): Observable<any> {
    return this.updateProcurementRequest(
      id,
      {
        status: 'Cancelled'
      }
    );
  }

  refreshProcurementData() {
    this.loadProcurementRequests();
    this.loadProcurementSummary();

    this.http
      .get<{ success: boolean; data: ProcurementCategory[] }>(
        '/api/procurement/categories'
      )
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.procurementCategoriesSignal.set(res.data);
          }
        },
        error: () => {}
      });

    this.http
      .get<{ success: boolean; data: ProcurementVendor[] }>(
        '/api/procurement/vendors'
      )
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.procurementVendorsSignal.set(res.data);
          }
        },
        error: () => {}
      });
  }

  getProcurementRequests() {
    return this.http.get<any>(
      '/api/procurement/requests'
    );
  }

  // Full Module 7 API helpers
  getProcurementCategories(): Observable<any> {
    return this.http.get<any>('/api/procurement/categories');
  }

  createProcurementCategory(data: any): Observable<any> {
    return this.http.post<any>('/api/procurement/categories', data).pipe(
      tap(() => {
        this.refreshProcurementData();
        this.loadProcurementSummary();
      })
    );
  }

  updateProcurementCategory(id: string, data: any): Observable<any> {
    return this.http.put<any>(`/api/procurement/categories/${id}`, data).pipe(
      tap(() => this.refreshProcurementData())
    );
  }

  deleteProcurementCategory(id: string): Observable<any> {
    return this.http.delete<any>(`/api/procurement/categories/${id}`).pipe(
      tap(() => {
        this.refreshProcurementData();
        this.loadProcurementSummary();
      })
    );
  }

  getProcurementVendors(): Observable<any> {
    return this.http.get<any>('/api/procurement/vendors');
  }

  createProcurementVendor(data: any): Observable<any> {
    return this.http.post<any>('/api/procurement/vendors', data).pipe(
      tap(() => {
        this.refreshProcurementData();
        this.loadProcurementSummary();
      })
    );
  }

  updateProcurementVendor(id: string, data: any): Observable<any> {
    return this.http.put<any>(`/api/procurement/vendors/${id}`, data).pipe(
      tap(() => this.refreshProcurementData())
    );
  }

  deleteProcurementVendor(id: string): Observable<any> {
    return this.http.delete<any>(`/api/procurement/vendors/${id}`).pipe(
      tap(() => {
        this.refreshProcurementData();
        this.loadProcurementSummary();
      })
    );
  }

  getPurchaseOrders(): Observable<any> {
    return this.http.get<any>('/api/procurement/purchase-orders');
  }

  createPurchaseOrder(data: any): Observable<any> {
    return this.http.post<any>('/api/procurement/purchase-orders', data).pipe(
      tap(() => {
        this.refreshProcurementData();
        this.loadProcurementSummary();
      })
    );
  }

  updatePurchaseOrder(id: string, data: any): Observable<any> {
    return this.http.put<any>(`/api/procurement/purchase-orders/${id}`, data).pipe(
      tap(() => {
        this.refreshProcurementData();
        this.loadProcurementSummary();
      })
    );
  }

  getGoodsReceipts(poId: string): Observable<any> {
    return this.http.get<any>(`/api/procurement/purchase-orders/${poId}/goods-receipts`);
  }

  receiveGoods(data: any): Observable<any> {
    return this.http.post<any>('/api/procurement/goods-receipts', data).pipe(
      tap(() => {
        this.loadAllData();
        this.refreshProcurementData();
        this.loadProcurementSummary();
      })
    );
  }

  getProcurementInvoices(): Observable<any> {
    return this.http.get<any>('/api/procurement/invoices');
  }

  createProcurementInvoice(data: any): Observable<any> {
    return this.http.post<any>('/api/procurement/invoices', data).pipe(
      tap(() => {
        this.refreshProcurementData();
        this.loadProcurementSummary();
      })
    );
  }

  updateProcurementInvoice(id: string, data: any): Observable<any> {
    return this.http.put<any>(`/api/procurement/invoices/${id}`, data).pipe(
      tap(() => {
        this.refreshProcurementData();
        this.loadProcurementSummary();
      })
    );
  }

  getInvoicePayments(invoiceId: string): Observable<any> {
    return this.http.get<any>(`/api/procurement/invoices/${invoiceId}/payments`);
  }

  recordInvoicePayment(invoiceId: string, data: any): Observable<any> {
    return this.http.post<any>(`/api/procurement/invoices/${invoiceId}/payments`, data).pipe(
      tap(() => {
        this.refreshProcurementData();
        this.loadProcurementSummary();
      })
    );
  }

  getProcurementSummary(): Observable<any> {
    return this.http.get<any>('/api/procurement/summary');
  }

  setProcurementSummary(summary: ProcurementSummary | null): void {
    this.procurementSummarySignal.set(summary);
  }

  // ==========================================
  // LEGACY / OTHER MODULE METHODS
  // ==========================================

  addDailyLog(
    log: Omit<DailyProgressLog, 'id'>
  ) {
    this.http
      .post<any>('/api/reports', log)
      .subscribe(() => {
        this.loadAllData();
      });
  }

  addSitePhoto(
    photo: Omit<SitePhoto, 'id' | 'date'>
  ) {
    this.http
      .post<any>(
        `/api/projects/${photo.projectId}/photos`,
        photo
      )
      .subscribe(() => {
        this.loadAllData();
      });
  }

  reportIssue(
    issue: Omit<
      IssueReport,
      'id' | 'status' | 'reportedDate'
    >
  ) {
    this.http
      .post<any>(
        `/api/projects/${issue.projectId}/issues`,
        issue
      )
      .subscribe(() => {
        this.loadAllData();
      });
  }

  resolveIssue(id: string) {
    const issue = this.issues().find(
      (i) => i.id === id
    );

    if (issue) {
      this.http
        .put<any>(
          `/api/projects/${issue.projectId}/issues/${id}`,
          { status: 'Resolved' }
        )
        .subscribe(() => {
          this.loadAllData();
        });
    }
  }

  submitMaterialRequest(
    req: Omit<
      MaterialRequest,
      'id' | 'requestDate' | 'status'
    >
  ) {
    this.http
      .post<any>(
        '/api/materials/requests/submit',
        req
      )
      .subscribe(() => {
        this.loadAllData();
      });
  }

  respondToMaterialRequest(
    id: string,
    approve: boolean
  ) {
    this.http
      .put<any>(
        `/api/materials/requests/${id}/respond`,
        { approve }
      )
      .subscribe(() => {
        this.loadAllData();
      });
  }

  submitFeedback(
    fb: Omit<FeedbackMessage, 'id' | 'date'>
  ) {
    const proj = this.projects().find(
      (p) => p.name === fb.projectName
    );

    const projectId = proj?.id || 'P-101';

    this.http
      .post<any>(
        `/api/projects/${projectId}/feedback`,
        fb
      )
      .subscribe(() => {
        this.loadAllData();
      });
  }

  assignWorkPackage(
    wp: Omit<
      WorkPackage,
      'id' | 'progress' | 'status'
    >
  ) {
    this.http
      .post<any>(
        `/api/projects/${wp.projectId}/tasks`,
        wp
      )
      .subscribe(() => {
        this.loadAllData();
      });
  }

  updateWorkPackageStatus(
    id: string,
    progress: number,
    status: 'Pending' | 'In Progress' | 'Completed'
  ) {
    const wp = this.workPackages().find(
      (w) => w.id === id
    );

    if (wp) {
      this.http
        .put<any>(
          `/api/projects/${wp.projectId}/tasks/${id}`,
          { progress, status }
        )
        .subscribe(() => {
          this.loadAllData();
        });
    }
  }

  addWorkforceMember(
    member: Omit<
      WorkforceMember,
      'id' | 'status'
    >
  ) {
    const nameSplit = member.name.split(' ');

    const email =
      `${nameSplit[0]?.toLowerCase() || 'user'}_` +
      `${Math.floor(Math.random() * 100)}@buildtrack.com`;

    this.http
      .post<any>('/api/users', {
        name: member.name,
        email,
        password: 'password123',
        role: 'worker',
        phone: member.phone,
        trade: member.role
      })
      .subscribe(() => {
        this.loadAllData();
      });
  }

  updateWorkforceStatus(
    id: string,
    status: 'Active' | 'On Leave' | 'Inactive'
  ) {
    this.http
      .put<any>(
        `/api/users/${id}`,
        { status }
      )
      .subscribe(() => {
        this.loadAllData();
      });
  }

  addProject(
    project: Omit<
      Project,
      'id' | 'spent' | 'progress'
    >
  ) {
    const projId =
      `P-${Math.floor(100 + Math.random() * 900)}`;

    this.http
      .post<any>(
        '/api/projects',
        {
          ...project,
          id: projId
        }
      )
      .subscribe(() => {
        this.loadAllData();
      });
  }

  // ==========================================
  // MODULE 6
  // ==========================================

  loadModule6Data(
    projectId?: string,
    contractorId?: string
  ) {
    const params: string[] = [];

    if (projectId) {
      params.push(`projectId=${projectId}`);
    }

    if (contractorId) {
      params.push(`contractorId=${contractorId}`);
    }

    const query =
      params.length > 0
        ? `?${params.join('&')}`
        : '';

    this.http
      .get<{ success: boolean; data: WorkforceMember[] }>(
        `/api/workers${query}`
      )
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.workforceSignal.set(res.data);
          }
        },
        error: () => {}
      });

    this.http
      .get<{ success: boolean; data: WorkforceCategory[] }>(
        '/api/workers/categories'
      )
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.workforceCategoriesSignal.set(res.data);
          }
        },
        error: () => {}
      });

    this.http
      .get<{ success: boolean; data: WorkerAssignment[] }>(
        `/api/worker-assignments${query}`
      )
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.workerAssignmentsSignal.set(res.data);
          }
        },
        error: () => {}
      });

    this.http
      .get<{ success: boolean; data: AttendanceRecord[] }>(
        `/api/attendance${query}`
      )
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.attendanceRecordsSignal.set(res.data);
          }
        },
        error: () => {}
      });

    this.http
      .get<{ success: boolean; data: Shift[] }>(
        `/api/shifts${query}`
      )
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.shiftsSignal.set(res.data);
          }
        },
        error: () => {}
      });

    this.http
      .get<{ success: boolean; data: PayrollRecord[] }>(
        `/api/payroll${query}`
      )
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.payrollRecordsSignal.set(res.data);
          }
        },
        error: () => {}
      });

    this.http
      .get<{ success: boolean; data: WorkforceSummary }>(
        '/api/workforce/summary'
      )
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.workforceSummarySignal.set(res.data);
          }
        },
        error: () => {}
      });
  }

  registerWorker(
    workerData: Partial<WorkforceMember>
  ) {
    return this.http.post<{
      success: boolean;
      message: string;
      data: any;
    }>('/api/workers', workerData);
  }

  bulkUploadWorkers(file: File) {
    const formData = new FormData();

    formData.append('file', file);

    return this.http.post<{
      success: boolean;
      message: string;
      data: any;
    }>('/api/workers/bulk-csv', formData);
  }

  updateWorker(
    id: string,
    workerData: Partial<WorkforceMember>
  ) {
    return this.http.put<{
      success: boolean;
      message: string;
      data: any;
    }>(
      `/api/workers/${id}`,
      workerData
    );
  }

  allocateWorker(
    assignmentData: {
      workerId: string;
      projectId: string;
      contractorId?: string;
      workActivity: string;
      startDate: string;
      endDate?: string;
    }
  ) {
    return this.http.post<{
      success: boolean;
      message: string;
      data: any;
    }>(
      '/api/worker-assignments',
      assignmentData
    );
  }

  logAttendanceRecord(
    attendanceData: {
      workerId: string;
      status: string;
      checkIn?: string;
      checkOut?: string;
      date: string;
      remarks?: string;
      projectId?: string;
      contractorId?: string;
      shiftId?: string;
    }
  ) {
    return this.http.post<{
      success: boolean;
      message: string;
      data: any;
    }>(
      '/api/attendance',
      attendanceData
    );
  }

  createShiftSchedule(
    shiftData: {
      name: string;
      startTime: string;
      endTime: string;
      projectId: string;
      shiftDate: string;
    }
  ) {
    return this.http.post<{
      success: boolean;
      message: string;
      data: any;
    }>(
      '/api/shifts',
      shiftData
    );
  }

  assignWorkersToShift(
    shiftId: string,
    workerIds: string[]
  ) {
    return this.http.post<{
      success: boolean;
      message: string;
      data: any;
    }>(
      '/api/shifts/assign',
      {
        shiftId,
        workerIds
      }
    );
  }

  generatePayrollRecord(
    payrollData: {
      workerId: string;
      monthYear: string;
      payRate?: number;
      projectId?: string;
      contractorId?: string;
    }
  ) {
    return this.http.post<{
      success: boolean;
      message: string;
      data: any;
    }>(
      '/api/payroll',
      payrollData
    );
  }

  updatePayrollStatus(
    payrollId: string,
    status: string
  ) {
    return this.http.put<{
      success: boolean;
      message: string;
      data: any;
    }>(
      `/api/payroll/${payrollId}`,
      { status }
    );
  }
}