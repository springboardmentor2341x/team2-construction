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

export interface DailyProgressLog {
  id: string;
  projectId: string;
  date: string;
  workDone: string;
  weather: string;
  siteEngineer: string;
  materialsUsed: { materialName: string; quantity: number; unit: string }[];
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
  }

  // Add Daily Progress Log (Site Engineer)
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
