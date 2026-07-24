import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProjectService } from '../../../services/project.service';
import { AuthService } from '../../../services/auth.service';
import { DashboardCardComponent } from '../../../components/dashboard-card/dashboard-card';

@Component({
  selector: 'app-worker-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, DashboardCardComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class WorkerDashboard {
  projectService = inject(ProjectService);
  authService = inject(AuthService);
  route = inject(ActivatedRoute);

  queryParams = toSignal(this.route.queryParams);

  get activeModule(): string {
    return this.queryParams()?.['module'] || 'attendance';
  }

  // Clock In / Out simulation state
  isClockedIn = signal(false);
  clockInTime = signal<string | null>(null);

  // Form Fields - Daily Status Comment
  statusComment = '';

  // Filter tasks assigned to this worker (David Smith)
  workerName = 'David Smith';

  workerTasks = computed(() => 
    this.projectService.workPackages().filter(wp => wp.assignedTo === this.workerName)
  );

  // Filter payslips for this worker (David Smith's id is WF-01)
  workerPayslips = computed(() => 
    this.projectService.payslips().filter(pay => pay.workerId === 'WF-01')
  );

  toggleClock() {
    if (!this.isClockedIn()) {
      this.isClockedIn.set(true);
      const now = new Date();
      this.clockInTime.set(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      alert('Clocked In successfully! Your punch time has been logged.');
    } else {
      this.isClockedIn.set(false);
      this.clockInTime.set(null);
      alert('Clocked Out successfully! Your total hours have been calculated.');
    }
  }

  submitStatusReport() {
    if (!this.statusComment) {
      alert('Please specify your daily work status summary.');
      return;
    }

    // Simulate appending to the Daily Log
    this.projectService.addDailyLog({
      projectId: 'P-101',
      date: new Date().toISOString().split('T')[0],
      workDone: `Workforce Status Update [${this.workerName}]: ${this.statusComment}`,
      weather: 'Cloudy, 22°C',
      siteEngineer: 'Alex Chen',
      materialsUsed: []
    });

    this.statusComment = '';
    alert('Daily status update filed to Site Engineer!');
  }

  updateTaskStatus(wpId: string, status: 'Pending' | 'In Progress' | 'Completed') {
    const progress = status === 'Completed' ? 100 : (status === 'In Progress' ? 50 : 0);
    this.projectService.updateWorkPackageStatus(wpId, progress, status);
    alert(`Task status updated to ${status}.`);
  }
}
