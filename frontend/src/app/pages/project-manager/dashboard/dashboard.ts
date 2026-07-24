import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProjectService } from '../../../services/project.service';
import { DashboardCardComponent } from '../../../components/dashboard-card/dashboard-card';
import { ChartsComponent } from '../../../components/charts/charts';

@Component({
  selector: 'app-pm-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, DashboardCardComponent, ChartsComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class ProjectManagerDashboard {
  projectService = inject(ProjectService);
  route = inject(ActivatedRoute);

  queryParams = toSignal(this.route.queryParams);

  get activeModule(): string {
    return this.queryParams()?.['module'] || 'projects';
  }

  // Filter projects managed by this user (Sarah Miller)
  managedProjects = computed(() => 
    this.projectService.projects().filter(p => p.manager === 'Sarah Miller')
  );

  totalBudget = computed(() => 
    this.managedProjects().reduce((sum, p) => sum + p.budget, 0)
  );

  totalSpent = computed(() => 
    this.managedProjects().reduce((sum, p) => sum + p.spent, 0)
  );

  averageProgress = computed(() => {
    const projs = this.managedProjects();
    if (projs.length === 0) return 0;
    return Math.round(projs.reduce((sum, p) => sum + p.progress, 0) / projs.length);
  });

  // Dynamic modules data
  get activeProject() {
    return this.managedProjects()[0] || null;
  }

  // Filter workforce assigned to the managed projects
  teamMembers = computed(() => 
    this.projectService.workforce().filter(member => 
      this.managedProjects().some(p => p.name === member.assignedProject)
    )
  );

  // Issues reported on Sarah's projects
  projectIssues = computed(() => 
    this.projectService.issues().filter(issue => 
      this.managedProjects().some(p => p.name === issue.projectName)
    )
  );

  // Mock report template download trigger
  downloadReport(format: 'pdf' | 'xlsx', reportName: string) {
    alert(`Generating and downloading ${reportName} in ${format.toUpperCase()} format. This is a simulated export.`);
  }
}
