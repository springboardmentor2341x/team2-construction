import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProjectService } from '../../../services/project.service';
import { AuthService } from '../../../services/auth.service';
import { DashboardCardComponent } from '../../../components/dashboard-card/dashboard-card';

import { WorkforceManagementComponent } from '../../../components/workforce-management/workforce-management';

@Component({
  selector: 'app-contractor-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, DashboardCardComponent, WorkforceManagementComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class ContractorDashboard {
  projectService = inject(ProjectService);
  authService = inject(AuthService);
  route = inject(ActivatedRoute);

  queryParams = toSignal(this.route.queryParams);

  get activeModule(): string {
    return this.queryParams()?.['module'] || 'work';
  }

  // Logged-in user context — driven by AuthService, not hardcoded
  currentUser = this.authService.currentUser;

  // The contractor's user name (e.g. 'Gaurav K') — used for work-package and material-request filtering
  contractorUserName = computed(() => this.currentUser()?.name || '');

  // The contractor's company name (e.g. 'Vance Concrete Ltd') — displayed in header
  contractorName = computed(() => this.currentUser()?.company || this.currentUser()?.name || '');

  // The logged-in user's ID (e.g. 'u4') — used for ID-based filtering
  contractorUserId = computed(() => this.currentUser()?.id || '');

  // The logged-in user's profile ID (e.g. 'c1') — used for assigning workers
  contractorProfileId = computed(() => this.currentUser()?.profile?.id || '');

  // Form Fields - Material Request
  reqMaterialId = 'M-01';
  reqQty = 50;

  // Form Fields - Add Subcontracted Worker
  newWorkerName = '';
  newWorkerRole = 'Mason';
  newWorkerPhone = '';

  // Selectable list for contractor specialties
  workerRoles = ['Mason', 'Ironworker', 'Concrete Finisher', 'Formwork Carpenter', 'General Laborer'];

  // Subcontractor Work Packages — filter by user name (from API: assignedTo = User.name)
  contractorWorkPackages = computed(() => {
    const userName = this.contractorUserName();
    const userId = this.contractorUserId();
    return this.projectService.workPackages().filter(wp =>
      wp.assignedTo === userName || wp.assignedToId === userId
    );
  });

  // Material requests submitted by this contractor — filter by user name (API returns requestedBy = User.name)
  contractorRequests = computed(() => {
    const userName = this.contractorUserName();
    return this.projectService.materialRequests().filter(req =>
      req.requestedBy === userName
    );
  });

  // Workers belonging to this contractor — filter by contractorName field (API returns contractorName = User.name of the contractor)
  contractorWorkers = computed(() => {
    const userName = this.contractorUserName();
    return this.projectService.workforce().filter(w =>
      w.contractorName === userName
    );
  });

  // Average progress across all assigned work packages
  averageProgress = computed(() => {
    const wps = this.contractorWorkPackages();
    if (wps.length === 0) return 0;
    const total = wps.reduce((sum, wp) => sum + (wp.progress || 0), 0);
    return Math.round(total / wps.length);
  });

  // Projects this contractor is working on (derived from their work packages)
  contractorProjects = computed(() => {
    const projectIds = [...new Set(this.contractorWorkPackages().map(wp => wp.projectId))];
    return this.projectService.projects().filter(p => projectIds.includes(p.id));
  });

  submitMaterialRequest() {
    const mat = this.projectService.materials().find(m => m.id === this.reqMaterialId);
    if (!mat || this.reqQty <= 0) {
      alert('Please specify a valid material and quantity.');
      return;
    }

    // Use the first contractor project or fall back to P-101
    const firstProject = this.contractorProjects()[0];
    const projectName = firstProject?.name || 'Vanguard Heights Commercial Tower';

    this.projectService.submitMaterialRequest({
      materialId: mat.id,
      materialName: mat.name,
      quantity: this.reqQty,
      requestedBy: this.contractorUserName(),
      projectName
    });

    this.reqQty = 50; // reset
    alert('Inventory request submitted. Awaiting Administrator approval.');
  }

  addWorkerToRoster() {
    if (!this.newWorkerName || !this.newWorkerPhone) {
      alert('Worker name and phone are required.');
      return;
    }

    const firstProject = this.contractorProjects()[0];
    const projectId = firstProject?.id || 'P-101';

    this.projectService.registerWorker({
      name: this.newWorkerName,
      contactInfo: this.newWorkerPhone,
      categoryId: 'CAT-SKILLED',
      skillWorkType: this.newWorkerRole,
      contractorId: this.contractorProfileId(),
      assignedProjectId: projectId,
      payRate: 500,
      status: 'Active'
    }).subscribe({
      next: () => {
        this.newWorkerName = '';
        this.newWorkerPhone = '';
        alert('Worker added and assigned!');
        this.projectService.loadModule6Data();
      },
      error: () => alert('Failed to add worker')
    });
  }

  updatePackageProgress(wpId: string, progressVal: number) {
    const status = progressVal >= 100 ? 'Completed' : 'In Progress';
    this.projectService.updateWorkPackageStatus(wpId, progressVal, status);
  }
}
