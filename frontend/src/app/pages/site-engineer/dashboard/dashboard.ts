import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProjectService } from '../../../services/project.service';
import { DashboardCardComponent } from '../../../components/dashboard-card/dashboard-card';

@Component({
  selector: 'app-site-engineer-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, DashboardCardComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class SiteEngineerDashboard {
  projectService = inject(ProjectService);
  route = inject(ActivatedRoute);

  queryParams = toSignal(this.route.queryParams);

  get activeModule(): string {
    return this.queryParams()?.['module'] || 'progress';
  }

  // Active Site Engineer Project Context (Vanguard Heights Commercial Tower)
  selectedProjectId = 'P-101';
  
  engineerProject = computed(() => 
    this.projectService.projects().find(p => p.id === this.selectedProjectId)
  );

  // Form Fields - Daily Log
  logWorkDone = '';
  logWeather = 'Sunny, 28°C';
  selectedMaterialId = 'M-01';
  materialQty = 0;
  tempMaterialsUsed: { materialId: string; materialName: string; quantity: number; unit: string }[] = [];

  // Form Fields - Site Photo
  photoUrl = '';
  photoCaption = '';

  // Form Fields - Report Issue
  issueTitle = '';
  issueDescription = '';
  issueSeverity: 'Low' | 'Medium' | 'High' | 'Critical' = 'High';

  // Filters for dynamic rendering
  projectLogs = computed(() => 
    this.projectService.dailyLogs().filter(log => log.projectId === this.selectedProjectId)
  );

  projectPhotos = computed(() => 
    this.projectService.sitePhotos().filter(photo => photo.projectId === this.selectedProjectId)
  );

  activeIssues = computed(() => 
    this.projectService.issues().filter(issue => issue.projectId === this.selectedProjectId)
  );

  attendanceRoster = computed(() => 
    this.projectService.workforce().filter(w => w.assignedProject === 'Vanguard Heights Commercial Tower')
  );

  addMaterialToLog() {
    const mat = this.projectService.materials().find(m => m.id === this.selectedMaterialId);
    if (mat && this.materialQty > 0) {
      this.tempMaterialsUsed.push({
        materialId: mat.id,
        materialName: mat.name,
        quantity: this.materialQty,
        unit: mat.unit
      });
      // reset qty
      this.materialQty = 0;
    }
  }

  removeMaterialFromLog(index: number) {
    this.tempMaterialsUsed.splice(index, 1);
  }

  submitDailyLog() {
    if (!this.logWorkDone) {
      alert('Please specify the work completed.');
      return;
    }

    // Call service to write log
    this.projectService.addDailyLog({
      projectId: this.selectedProjectId,
      date: new Date().toISOString().split('T')[0],
      workDone: this.logWorkDone,
      weather: this.logWeather,
      siteEngineer: 'Sathvik S',
      materialsUsed: this.tempMaterialsUsed.map(m => ({ materialName: m.materialName, quantity: m.quantity, unit: m.unit }))
    });

    // Reset Form
    this.logWorkDone = '';
    this.tempMaterialsUsed = [];
    alert('Daily progress log submitted successfully!');
  }

  submitSitePhoto() {
    if (!this.photoUrl || !this.photoCaption) {
      alert('Photo URL and Caption are required.');
      return;
    }

    this.projectService.addSitePhoto({
      projectId: this.selectedProjectId,
      url: this.photoUrl,
      caption: this.photoCaption,
      uploadedBy: 'Sathvik S'
    });

    // Reset Form
    this.photoUrl = '';
    this.photoCaption = '';
    alert('Site photo uploaded and logged!');
  }

  submitIssue() {
    if (!this.issueTitle || !this.issueDescription) {
      alert('Issue Title and Description are required.');
      return;
    }

    this.projectService.reportIssue({
      projectId: this.selectedProjectId,
      projectName: this.engineerProject()?.name || 'Vanguard Heights Commercial Tower',
      title: this.issueTitle,
      description: this.issueDescription,
      severity: this.issueSeverity,
      reportedBy: 'Sathvik S'
    });

    // Reset Form
    this.issueTitle = '';
    this.issueDescription = '';
    alert('Safety issue logged and flagged to Project Manager.');
  }

  resolveIssue(id: string) {
    this.projectService.resolveIssue(id);
    alert('Issue marked as resolved.');
  }
}
