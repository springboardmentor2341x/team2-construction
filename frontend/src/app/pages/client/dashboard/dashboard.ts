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
  selector: 'app-client-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, DashboardCardComponent, WorkforceManagementComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class ClientDashboard {
  projectService = inject(ProjectService);
  authService = inject(AuthService);
  route = inject(ActivatedRoute);

  queryParams = toSignal(this.route.queryParams);

  get activeModule(): string {
    return this.queryParams()?.['module'] || 'progress';
  }

  // Active Client Name (Abhishek S)
  clientName = 'Abhishek S';

  // Form Fields - Feedback
  fbRating = 5;
  fbMessage = '';
  fbProjectName = 'Vanguard Heights Commercial Tower';

  // Client Projects (Projects matching Vanguard Realty / Abhishek S)
  clientProjects = computed(() => 
    this.projectService.projects().filter(p => p.clientName === 'Vanguard Realty')
  );

  totalBudget = computed(() => 
    this.clientProjects().reduce((sum, p) => sum + p.budget, 0)
  );

  totalSpent = computed(() => 
    this.clientProjects().reduce((sum, p) => sum + p.spent, 0)
  );

  averageProgress = computed(() => {
    const projs = this.clientProjects();
    if (projs.length === 0) return 0;
    return Math.round(projs.reduce((sum, p) => sum + p.progress, 0) / projs.length);
  });

  // Project Photos corresponding to client projects
  clientPhotos = computed(() => 
    this.projectService.sitePhotos().filter(photo => 
      this.clientProjects().some(p => p.id === photo.projectId)
    )
  );

  // Documents corresponding to client projects
  clientDocuments = computed(() => 
    this.projectService.documents().filter(doc => 
      this.clientProjects().some(p => p.id === doc.projectId)
    )
  );

  // Feedback history from this client
  clientFeedbacks = computed(() => 
    this.projectService.feedback().filter(fb => fb.clientName === this.clientName)
  );

  submitFeedback() {
    if (!this.fbMessage) {
      alert('Feedback message cannot be empty.');
      return;
    }

    this.projectService.submitFeedback({
      clientName: this.clientName,
      projectName: this.fbProjectName,
      rating: Number(this.fbRating),
      message: this.fbMessage
    });

    this.fbMessage = ''; // reset
    alert('Thank you! Your feedback has been submitted to Shradha S.');
  }

  downloadDocument(docName: string) {
    alert(`Downloading blueprint file: ${docName}. This is a simulated download.`);
  }
}
