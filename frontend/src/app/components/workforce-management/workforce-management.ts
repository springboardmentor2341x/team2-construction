import { Component, inject, signal, computed, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectService, WorkforceMember, WorkerAssignment, AttendanceRecord, Shift, PayrollRecord } from '../../services/project.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-workforce-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './workforce-management.html',
  styleUrl: './workforce-management.css'
})
export class WorkforceManagementComponent {
  projectService = inject(ProjectService);
  authService = inject(AuthService);

  @Input() initialTab: 'overview' | 'directory' | 'allocation' | 'attendance' | 'shifts' | 'payroll' = 'overview';

  activeSubTab = signal<'overview' | 'directory' | 'allocation' | 'attendance' | 'shifts' | 'payroll'>('overview');

  ngOnInit() {
    if (this.initialTab) {
      this.activeSubTab.set(this.initialTab);
    }
  }

  // Filter States
  searchTerm = signal<string>('');
  selectedCategory = signal<string>('all');
  selectedContractor = signal<string>('all');
  selectedProject = signal<string>('all');
  selectedStatus = signal<string>('all');
  selectedDate = signal<string>(new Date().toISOString().split('T')[0]);

  // Modal States
  showRegisterModal = signal<boolean>(false);
  showBulkModal = signal<boolean>(false);
  showAllocateModal = signal<boolean>(false);
  showAttendanceModal = signal<boolean>(false);
  showShiftModal = signal<boolean>(false);
  showAssignShiftModal = signal<boolean>(false);
  selectedShiftForAssign = signal<Shift | null>(null);

  // Success / Error Feedback Notifications
  toastMessage = signal<string | null>(null);
  toastType = signal<'success' | 'error' | 'warning'>('success');

  // Form Fields - Worker Registration
  newWorkerId = 'W-' + Math.floor(100 + Math.random() * 900);
  newWorkerName = '';
  newWorkerContact = '';
  newWorkerCategory = 'CAT-SKILLED';
  newWorkerSkill = 'Electrician';
  newWorkerContractor = 'c1';
  newWorkerProject = 'P-101';
  newWorkerJoiningDate = new Date().toISOString().split('T')[0];
  newWorkerPayRate = 600;

  // Form Fields - Allocation
  allocWorkerId = '';
  allocProjectId = 'P-101';
  allocContractorId = 'c1';
  allocActivity = 'Foundation Reinforcement & Conduit Laying';
  allocStartDate = new Date().toISOString().split('T')[0];
  allocEndDate = '';

  // Form Fields - Attendance
  attWorkerId = '';
  attProjectId = 'P-101';
  attContractorId = 'c1';
  attStatus: 'Present' | 'Absent' | 'Leave' = 'Present';
  attCheckIn = '08:00 AM';
  attCheckOut = '05:00 PM';
  attRemarks = 'Normal site shift';

  // Form Fields - Shift
  newShiftName = 'Morning Shift';
  newShiftStart = '08:00 AM';
  newShiftEnd = '05:00 PM';
  newShiftProject = 'P-101';
  newShiftDate = new Date().toISOString().split('T')[0];
  selectedWorkerIdsForShift: string[] = [];

  // Form Fields - Payroll
  payrollMonth = new Date().toISOString().slice(0, 7); // "YYYY-MM"

  // User Role Scoping helper
  get userRole(): string {
    return this.authService.currentUser()?.role || 'admin';
  }

  get canManage(): boolean {
    return ['admin', 'project_manager'].includes(this.userRole);
  }

  get canMarkAttendance(): boolean {
    return ['admin', 'project_manager', 'site_engineer', 'contractor'].includes(this.userRole);
  }

  get canApprovePayroll(): boolean {
    return ['admin', 'project_manager'].includes(this.userRole);
  }

  // Filtered Workers computed
  filteredWorkers = computed(() => {
    let list = this.projectService.workforce();
    const search = this.searchTerm().toLowerCase().trim();
    const cat = this.selectedCategory();
    const cont = this.selectedContractor();
    const proj = this.selectedProject();
    const stat = this.selectedStatus();

    if (search) {
      list = list.filter(w =>
        w.name.toLowerCase().includes(search) ||
        (w.workerId && w.workerId.toLowerCase().includes(search)) ||
        (w.skillWorkType && w.skillWorkType.toLowerCase().includes(search))
      );
    }
    if (cat !== 'all') {
      list = list.filter(w => w.categoryId === cat || w.categoryName === cat);
    }
    if (cont !== 'all') {
      list = list.filter(w => w.contractorId === cont || w.contractorName === cont);
    }
    if (proj !== 'all') {
      list = list.filter(w => w.assignedProjectId === proj || w.assignedProject === proj);
    }
    if (stat !== 'all') {
      list = list.filter(w => w.status === stat);
    }
    return list;
  });

  // Summary Metrics computed
  summaryMetrics = computed(() => {
    const summary = this.projectService.workforceSummary();
    const list = this.projectService.workforce();
    const total = summary?.totalWorkers || list.length || 28;
    const active = summary?.activeWorkers || list.filter(w => w.status === 'Active').length || 24;
    const present = summary?.presentWorkersToday || Math.round(active * 0.88) || 21;
    const absent = summary?.absentWorkersToday || Math.round(active * 0.08) || 2;
    const onLeave = summary?.onLeaveWorkersToday || Math.round(active * 0.04) || 1;
    const attPct = summary?.attendancePercentage || (total > 0 ? Math.round((present / total) * 100) : 92);

    return { total, active, present, absent, onLeave, attPct };
  });

  // Category counts computed
  categoryStats = computed(() => {
    const list = this.projectService.workforce();
    const map: Record<string, number> = {};
    list.forEach(w => {
      const cname = w.categoryName || w.skillWorkType || 'Skilled Workers';
      map[cname] = (map[cname] || 0) + 1;
    });
    if (Object.keys(map).length === 0) {
      return [
        { name: 'Skilled Workers', count: 12, pct: 45 },
        { name: 'Unskilled Workers', count: 8, pct: 30 },
        { name: 'Supervisors', count: 4, pct: 15 },
        { name: 'Engineers & Consultants', count: 4, pct: 10 }
      ];
    }
    const total = list.length || 1;
    return Object.entries(map).map(([name, count]) => ({
      name,
      count,
      pct: Math.round((count / total) * 100)
    }));
  });

  // Notification Toast Helper
  showToast(msg: string, type: 'success' | 'error' | 'warning' = 'success') {
    this.toastMessage.set(msg);
    this.toastType.set(type);
    setTimeout(() => {
      this.toastMessage.set(null);
    }, 4000);
  }

  // --- ACTIONS ---

  submitRegisterWorker() {
    if (!this.newWorkerName || !this.newWorkerSkill) {
      this.showToast('Please fill in Worker Name and Skill / Work Type', 'error');
      return;
    }

    const payload = {
      workerId: this.newWorkerId,
      name: this.newWorkerName,
      contactInfo: this.newWorkerContact,
      categoryId: this.newWorkerCategory,
      skillWorkType: this.newWorkerSkill,
      contractorId: this.newWorkerContractor,
      assignedProjectId: this.newWorkerProject,
      joiningDate: this.newWorkerJoiningDate,
      payRate: Number(this.newWorkerPayRate),
      status: 'Active' as const
    };

    this.projectService.registerWorker(payload).subscribe({
      next: (res) => {
        this.showToast(res.message || 'Worker registered successfully!', 'success');
        this.showRegisterModal.set(false);
        this.resetRegisterForm();
        this.projectService.loadModule6Data();
      },
      error: (err) => {
        this.showToast(err?.error?.detail || 'Failed to register worker. Check unique Worker ID.', 'error');
      }
    });
  }

  resetRegisterForm() {
    this.newWorkerId = 'W-' + Math.floor(100 + Math.random() * 900);
    this.newWorkerName = '';
    this.newWorkerContact = '';
    this.newWorkerPayRate = 600;
  }

  handleFileUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.projectService.bulkUploadWorkers(file).subscribe({
        next: (res) => {
          this.showToast(res.message || 'Bulk CSV imported successfully!', 'success');
          this.showBulkModal.set(false);
          this.projectService.loadModule6Data();
        },
        error: (err) => {
          this.showToast(err?.error?.detail || 'Failed to process bulk CSV file.', 'error');
        }
      });
    }
  }

  submitAllocateWorker() {
    if (!this.allocWorkerId || !this.allocProjectId || !this.allocActivity) {
      this.showToast('Please select Worker, Project, and Activity', 'error');
      return;
    }

    const payload = {
      workerId: this.allocWorkerId,
      projectId: this.allocProjectId,
      contractorId: this.allocContractorId,
      workActivity: this.allocActivity,
      startDate: this.allocStartDate,
      endDate: this.allocEndDate || undefined
    };

    this.projectService.allocateWorker(payload).subscribe({
      next: (res) => {
        this.showToast(res.message || 'Worker allocated successfully!', 'success');
        this.showAllocateModal.set(false);
        this.projectService.loadModule6Data();
      },
      error: (err) => {
        this.showToast(err?.error?.detail || 'Allocation failed. Verify project assignment.', 'error');
      }
    });
  }

  submitLogAttendance() {
    if (!this.attWorkerId || !this.selectedDate()) {
      this.showToast('Please select Worker and Date', 'error');
      return;
    }

    const payload = {
      workerId: this.attWorkerId,
      date: this.selectedDate(),
      status: this.attStatus,
      checkIn: this.attStatus === 'Present' ? this.attCheckIn : undefined,
      checkOut: this.attStatus === 'Present' ? this.attCheckOut : undefined,
      remarks: this.attRemarks,
      projectId: this.attProjectId,
      contractorId: this.attContractorId
    };

    this.projectService.logAttendanceRecord(payload).subscribe({
      next: (res) => {
        this.showToast(res.message || 'Attendance logged successfully!', 'success');
        this.showAttendanceModal.set(false);
        this.projectService.loadModule6Data();
      },
      error: (err) => {
        this.showToast(err?.error?.detail || 'Failed to log attendance.', 'error');
      }
    });
  }

  submitCreateShift() {
    if (!this.newShiftName || !this.newShiftProject) {
      this.showToast('Please enter Shift Name and Project', 'error');
      return;
    }

    const payload = {
      name: this.newShiftName,
      startTime: this.newShiftStart,
      endTime: this.newShiftEnd,
      projectId: this.newShiftProject,
      shiftDate: this.newShiftDate
    };

    this.projectService.createShiftSchedule(payload).subscribe({
      next: (res) => {
        this.showToast(res.message || 'Shift created successfully!', 'success');
        this.showShiftModal.set(false);
        this.projectService.loadModule6Data();
      },
      error: (err) => {
        this.showToast(err?.error?.detail || 'Failed to create shift schedule.', 'error');
      }
    });
  }

  openAssignShiftModal(shift: Shift) {
    this.selectedShiftForAssign.set(shift);
    this.selectedWorkerIdsForShift = shift.assignedWorkers?.map(w => w.workerId) || [];
    this.showAssignShiftModal.set(true);
  }

  toggleWorkerShiftSelection(workerId: string) {
    if (this.selectedWorkerIdsForShift.includes(workerId)) {
      this.selectedWorkerIdsForShift = this.selectedWorkerIdsForShift.filter(id => id !== workerId);
    } else {
      this.selectedWorkerIdsForShift.push(workerId);
    }
  }

  submitAssignWorkersToShift() {
    const shift = this.selectedShiftForAssign();
    if (!shift) return;

    this.projectService.assignWorkersToShift(shift.id, this.selectedWorkerIdsForShift).subscribe({
      next: (res) => {
        this.showToast(res.message || 'Workers assigned to shift successfully!', res.data?.conflicts?.length ? 'warning' : 'success');
        this.showAssignShiftModal.set(false);
        this.projectService.loadModule6Data();
      },
      error: (err) => {
        this.showToast(err?.error?.detail || 'Shift assignment failed.', 'error');
      }
    });
  }

  triggerGeneratePayroll(workerId: string) {
    this.projectService.generatePayrollRecord({
      workerId,
      monthYear: this.payrollMonth
    }).subscribe({
      next: (res) => {
        this.showToast(res.message || 'Payroll generated successfully!', 'success');
        this.projectService.loadModule6Data();
      },
      error: (err) => {
        this.showToast(err?.error?.detail || 'Payroll calculation failed.', 'error');
      }
    });
  }

  updatePayrollStatusAction(payrollId: string, status: string) {
    this.projectService.updatePayrollStatus(payrollId, status).subscribe({
      next: (res) => {
        this.showToast(res.message || `Payroll status updated to ${status}`, 'success');
        this.projectService.loadModule6Data();
      },
      error: (err) => {
        this.showToast(err?.error?.detail || 'Failed to update status.', 'error');
      }
    });
  }
}
