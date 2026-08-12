import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProjectService, DailyProgressReport, Milestone, DelayRecord, SiteActivityLog } from '../../../services/project.service';
import { DashboardCardComponent } from '../../../components/dashboard-card/dashboard-card';

@Component({
  selector: 'app-site-engineer-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, DashboardCardComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class SiteEngineerDashboard implements OnInit {
  projectService = inject(ProjectService);
  route = inject(ActivatedRoute);

  queryParams = toSignal(this.route.queryParams);

  get activeModule(): string {
    return this.queryParams()?.['module'] || 'progress';
  }

  // Active Project Selection
  selectedProjectId = 'P-101';

  engineerProject = computed(() =>
    this.projectService.projects().find(p => p.id === this.selectedProjectId)
  );

  // ==========================================
  // 1. DAILY PROGRESS REPORT STATE & FORM
  // ==========================================
  reportDate = new Date().toISOString().split('T')[0];
  workCategory = 'Structural';
  activityPerformed = '';
  percentageWorkCompleted = 3.0;
  selectedContractorId = 'u4';
  workersPresent = 16;
  workersAbsent = 1;
  machineryUsed = 'Tower Crane #1 (8 hrs), Scissor Lift #2 (4 hrs)';
  weatherConditions = 'Sunny, 28°C';
  safetyObservations = 'Full harness & PPE compliance verified on deck.';
  qualityInspectionRemarks = 'Rebar spacing and weld points inspected and verified.';
  progressPhotograph = '';
  delayEncountered = false;
  delayReason = 'Material delivery delay';
  additionalComments = '';

  // Materials sub-form
  selectedMaterialId = 'M-01';
  materialQty = 0;
  tempMaterialsConsumed: { materialId?: string; materialName: string; quantity: number; unit: string }[] = [];

  // Selected Daily Report Modal detail state
  selectedReportDetail: DailyProgressReport | null = null;
  reportFilterCategory = 'ALL';

  // ==========================================
  // 2. WEEKLY SUMMARY STATE
  // ==========================================
  selectedWeekStart = '';

  // ==========================================
  // 3. MILESTONES STATE & FORM
  // ==========================================
  selectedMilestoneToEdit: Milestone | null = null;
  editMilestoneProgress = 0;
  editMilestoneStatus: 'Pending' | 'In Progress' | 'Completed' | 'Delayed' = 'In Progress';

  // ==========================================
  // 4. DELAY TRACKING STATE & FORM
  // ==========================================
  delayDate = new Date().toISOString().split('T')[0];
  delayAffectedActivity = '';
  delayReasonSelect = 'Material delivery delay';
  delayDuration = '1 day';
  delayImpact: 'Low' | 'Medium' | 'High' | 'Critical' = 'Medium';
  delayRemarks = '';

  // ==========================================
  // 5. SITE ACTIVITY LOG STATE & FORM
  // ==========================================
  activityDate = new Date().toISOString().split('T')[0];
  activityTime = '10:00';
  activityType = 'Material arrival';
  activityDescription = '';
  activityResponsiblePerson = 'Sathvik S (Site Engineer)';
  activityFilterType = 'ALL';

  // ==========================================
  // 6. PHOTO ATTACHMENT / UPLOAD
  // ==========================================
  photoUrl = '';
  photoCaption = '';

  // ==========================================
  // 7. MODULE 4: MACHINERY USAGE STATE & FORM
  // ==========================================
  machineryResourceId = 'EQ-101';
  machineryUsageDate = new Date().toISOString().split('T')[0];
  machineryOperatingHours = 7.0;
  machineryIdleHours = 1.0;
  machineryTotalHours = 8.0;
  machineryRemarks = 'Daily site shift run-time';

  // Machinery assigned to this project
  projectEquipment = computed(() =>
    this.projectService.resources().filter(r => r.currentProjectId === this.selectedProjectId)
  );

  // Machinery utilization logs for this project
  projectMachineryLogs = computed(() =>
    this.projectService.resourceUtilizations().filter(u => u.projectId === this.selectedProjectId)
  );

  submitMachineryUsage() {
    if (!this.machineryResourceId || !this.machineryUsageDate) {
      alert('Please select equipment and usage date.');
      return;
    }

    this.projectService.logResourceUtilization({
      resourceId: this.machineryResourceId,
      projectId: this.selectedProjectId,
      usageDate: this.machineryUsageDate,
      operatingHours: this.machineryOperatingHours,
      idleHours: this.machineryIdleHours,
      totalAvailableHours: this.machineryTotalHours,
      remarks: this.machineryRemarks
    }).subscribe({
      next: () => {
        alert('Machinery shift usage successfully recorded! Utilization updated.');
        this.machineryRemarks = '';
        this.projectService.loadModule4Data();
      },
      error: (err) => alert('Error: ' + (err.error?.detail || err.message))
    });
  }

  // ==========================================
  // 8. ISSUES FORM
  // ==========================================
  issueTitle = '';
  issueDescription = '';
  issueSeverity: 'Low' | 'Medium' | 'High' | 'Critical' = 'High';

  // ==========================================
  // COMPUTED SIGNALS
  // ==========================================
  projectDailyReports = computed(() => {
    let list = this.projectService.dailyProgressReports().filter(r => r.projectId === this.selectedProjectId);
    if (this.reportFilterCategory !== 'ALL') {
      list = list.filter(r => r.workCategory === this.reportFilterCategory);
    }
    return list;
  });

  projectMilestones = computed(() =>
    this.projectService.milestones().filter(m => m.projectId === this.selectedProjectId)
  );

  projectDelays = computed(() =>
    this.projectService.delays().filter(d => d.projectId === this.selectedProjectId)
  );

  projectActivityLogs = computed(() => {
    let logs = this.projectService.activityLogs().filter(a => a.projectId === this.selectedProjectId);
    if (this.activityFilterType !== 'ALL') {
      logs = logs.filter(a => a.activityType === this.activityFilterType);
    }
    return logs;
  });

  projectPhotos = computed(() =>
    this.projectService.sitePhotos().filter(photo => photo.projectId === this.selectedProjectId)
  );

  activeIssues = computed(() =>
    this.projectService.issues().filter(issue => issue.projectId === this.selectedProjectId)
  );

  attendanceRoster = computed(() =>
    this.projectService.workforce().filter(w => w.assignedProject === this.engineerProject()?.name || w.assignedProject.includes('Vanguard'))
  );

  ngOnInit() {
    // Default week start to 7 days ago
    const d = new Date();
    d.setDate(d.getDate() - 6);
    this.selectedWeekStart = d.toISOString().split('T')[0];
    this.projectService.loadWeeklySummary(this.selectedProjectId, this.selectedWeekStart);
  }

  onProjectChange() {
    this.projectService.loadModule3Data(this.selectedProjectId);
    this.projectService.loadWeeklySummary(this.selectedProjectId, this.selectedWeekStart);
  }

  // ==========================================
  // DAILY REPORT ACTIONS
  // ==========================================
  addMaterialToConsumption() {
    const mat = this.projectService.materials().find(m => m.id === this.selectedMaterialId);
    if (mat && this.materialQty > 0) {
      this.tempMaterialsConsumed.push({
        materialId: mat.id,
        materialName: mat.name,
        quantity: this.materialQty,
        unit: mat.unit
      });
      this.materialQty = 0;
    }
  }

  removeMaterialFromConsumption(index: number) {
    this.tempMaterialsConsumed.splice(index, 1);
  }

  submitDailyReport() {
    if (!this.activityPerformed.trim()) {
      alert('Please specify the construction activity performed.');
      return;
    }

    const payload = {
      projectId: this.selectedProjectId,
      reportDate: this.reportDate,
      workCategory: this.workCategory,
      activityPerformed: this.activityPerformed,
      percentageWorkCompleted: this.percentageWorkCompleted,
      contractorId: this.selectedContractorId,
      workersPresent: this.workersPresent,
      workersAbsent: this.workersAbsent,
      machineryUsed: this.machineryUsed,
      weatherConditions: this.weatherConditions,
      safetyObservations: this.safetyObservations,
      qualityInspectionRemarks: this.qualityInspectionRemarks,
      progressPhotograph: this.progressPhotograph || undefined,
      delayEncountered: this.delayEncountered,
      delayReason: this.delayEncountered ? this.delayReason : undefined,
      additionalComments: this.additionalComments,
      materialsConsumed: this.tempMaterialsConsumed
    };

    this.projectService.addDailyProgressReport(payload).subscribe({
      next: (res) => {
        alert('Daily Progress Report submitted successfully! Project & Milestone progress recalculated.');
        // Reset inputs
        this.activityPerformed = '';
        this.additionalComments = '';
        this.tempMaterialsConsumed = [];
        this.delayEncountered = false;
        this.progressPhotograph = '';
        this.projectService.loadAllData();
        this.projectService.loadWeeklySummary(this.selectedProjectId, this.selectedWeekStart);
      },
      error: (err) => {
        alert('Failed to submit report: ' + (err.error?.detail || err.message));
      }
    });
  }

  openReportDetail(report: DailyProgressReport) {
    this.selectedReportDetail = report;
  }

  closeReportDetail() {
    this.selectedReportDetail = null;
  }

  deleteReport(id: string) {
    if (confirm('Are you sure you want to delete this Daily Progress Report? Project progress will be recalculated.')) {
      this.projectService.deleteDailyProgressReport(id).subscribe({
        next: () => {
          alert('Daily report deleted.');
          this.projectService.loadAllData();
          this.projectService.loadWeeklySummary(this.selectedProjectId, this.selectedWeekStart);
        },
        error: (err) => alert('Error: ' + err.message)
      });
    }
  }

  // ==========================================
  // WEEKLY SUMMARY ACTIONS
  // ==========================================
  fetchWeeklySummary() {
    if (this.selectedWeekStart) {
      this.projectService.loadWeeklySummary(this.selectedProjectId, this.selectedWeekStart);
    }
  }

  // ==========================================
  // MILESTONES ACTIONS
  // ==========================================
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
        alert('Milestone progress updated! Project overall progress has been recalculated.');
        this.selectedMilestoneToEdit = null;
        this.projectService.loadAllData();
      },
      error: (err) => alert('Error: ' + err.message)
    });
  }

  // ==========================================
  // DELAY ACTIONS
  // ==========================================
  submitDelayRecord() {
    if (!this.delayAffectedActivity.trim()) {
      alert('Please specify the affected construction activity.');
      return;
    }

    const payload = {
      projectId: this.selectedProjectId,
      date: this.delayDate,
      affectedActivity: this.delayAffectedActivity,
      delayReason: this.delayReasonSelect,
      delayDuration: this.delayDuration,
      impactOnProject: this.delayImpact,
      additionalRemarks: this.delayRemarks
    };

    this.projectService.addDelayRecord(payload).subscribe({
      next: () => {
        alert('Delay record logged and notified to Project Manager.');
        this.delayAffectedActivity = '';
        this.delayRemarks = '';
        this.projectService.loadAllData();
      },
      error: (err) => alert('Error: ' + err.message)
    });
  }

  resolveDelay(id: string) {
    this.projectService.updateDelay(id, { status: 'Resolved' }).subscribe({
      next: () => {
        alert('Delay record marked as Resolved.');
        this.projectService.loadAllData();
      }
    });
  }

  deleteDelay(id: string) {
    if (confirm('Delete this delay record?')) {
      this.projectService.deleteDelayRecord(id).subscribe({
        next: () => {
          alert('Delay record deleted.');
          this.projectService.loadAllData();
        }
      });
    }
  }

  // ==========================================
  // SITE ACTIVITY ACTIONS
  // ==========================================
  submitActivityLog() {
    if (!this.activityDescription.trim()) {
      alert('Please describe the site activity / event.');
      return;
    }

    const payload = {
      projectId: this.selectedProjectId,
      date: this.activityDate,
      time: this.activityTime,
      activityType: this.activityType,
      description: this.activityDescription,
      responsiblePerson: this.activityResponsiblePerson
    };

    this.projectService.addSiteActivityLog(payload).subscribe({
      next: () => {
        alert('Site Activity Log recorded successfully!');
        this.activityDescription = '';
        this.projectService.loadAllData();
      },
      error: (err) => alert('Error: ' + err.message)
    });
  }

  deleteActivityLog(id: string) {
    if (confirm('Delete this site activity log?')) {
      this.projectService.deleteSiteActivityLog(id).subscribe({
        next: () => {
          alert('Activity log removed.');
          this.projectService.loadAllData();
        }
      });
    }
  }

  // ==========================================
  // SITE PHOTOS & ISSUES
  // ==========================================
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

    this.issueTitle = '';
    this.issueDescription = '';
    alert('Safety issue logged and flagged to Project Manager.');
  }

  resolveIssue(id: string) {
    this.projectService.resolveIssue(id);
    alert('Issue marked as resolved.');
  }
}
