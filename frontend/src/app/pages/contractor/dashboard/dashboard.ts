import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProjectService } from '../../../services/project.service';
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
  route = inject(ActivatedRoute);

  queryParams = toSignal(this.route.queryParams);

  get activeModule(): string {
    return this.queryParams()?.['module'] || 'work';
  }

  // Active Contractor Company context (Vance Concrete Ltd)
  contractorName = 'Vance Concrete Ltd';

  // Form Fields - Material Request
  reqMaterialId = 'M-01';
  reqQty = 50;

  // Form Fields - Add Subcontracted Worker
  newWorkerName = '';
  newWorkerRole = 'Mason';
  newWorkerPhone = '';

  // Selectable list for contractor specialties
  workerRoles = ['Mason', 'Ironworker', 'Concrete Finisher', 'Formwork Carpenter', 'General Laborer'];

  // Subcontractor Work Packages
  contractorWorkPackages = computed(() => 
    this.projectService.workPackages().filter(wp => wp.assignedTo === this.contractorName)
  );

  // Material requests submitted by this contractor
  contractorRequests = computed(() => 
    this.projectService.materialRequests().filter(req => req.requestedBy === this.contractorName)
  );

  // Workers belonging to this contractor
  contractorWorkers = computed(() => 
    this.projectService.workforce().filter(w => w.company === this.contractorName || w.assignedProject === 'Vanguard Heights Commercial Tower')
  );

  submitMaterialRequest() {
    const mat = this.projectService.materials().find(m => m.id === this.reqMaterialId);
    if (!mat || this.reqQty <= 0) {
      alert('Please specify a valid material and quantity.');
      return;
    }

    this.projectService.submitMaterialRequest({
      materialId: mat.id,
      materialName: mat.name,
      quantity: this.reqQty,
      requestedBy: this.contractorName,
      projectName: 'Vanguard Heights Commercial Tower'
    });

    this.reqQty = 50; // reset
    alert('Inventory request submitted. Awaiting Administrator approval.');
  }

  addWorkerToRoster() {
    if (!this.newWorkerName || !this.newWorkerPhone) {
      alert('Worker name and phone are required.');
      return;
    }

    this.projectService.addWorkforceMember({
      name: this.newWorkerName,
      role: this.newWorkerRole,
      assignedProject: 'Vanguard Heights Commercial Tower',
      phone: this.newWorkerPhone,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
      company: this.contractorName
    });

    this.newWorkerName = '';
    this.newWorkerPhone = '';
    alert('Worker added and assigned to Vanguard Heights!');
  }

  updatePackageProgress(wpId: string, progressVal: number) {
    const status = progressVal >= 100 ? 'Completed' : 'In Progress';
    this.projectService.updateWorkPackageStatus(wpId, progressVal, status);
  }
}
