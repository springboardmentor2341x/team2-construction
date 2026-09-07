import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../../services/project.service';
import { ReportService } from '../../services/report.service';
import { AuthService } from '../../services/auth.service';
import { DashboardCardComponent } from '../../components/dashboard-card/dashboard-card';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reports.html',
  styleUrl: './reports.css'
})
export class ReportsComponent implements OnInit {
  projectService = inject(ProjectService);
  reportService = inject(ReportService);
  authService = inject(AuthService);

  projects = signal<any[]>([]);
  reportTypes = signal<any[]>([]);
  
  selectedProjectId = '';
  selectedReportType = '';
  startDate = '';
  endDate = '';

  previewData = signal<any>(null);
  isLoading = signal(false);
  errorMsg = signal('');

  ngOnInit() {
    this.loadReportTypes();
  }

  loadReportTypes() {
    this.reportService.getReportTypes().subscribe({
      next: (res) => {
        if (res.success) {
          this.reportTypes.set(res.data);
        }
      },
      error: (err) => console.error("Failed to load report types", err)
    });
  }

  generatePreview() {
    if (!this.selectedProjectId || !this.selectedReportType) {
      this.errorMsg.set('Please select both a Project and a Report Type.');
      return;
    }
    
    this.errorMsg.set('');
    this.isLoading.set(true);
    this.previewData.set(null);

    this.reportService.previewReport(this.selectedReportType, this.selectedProjectId, this.startDate, this.endDate)
      .subscribe({
        next: (res) => {
          this.isLoading.set(false);
          if (res.success) {
            this.previewData.set(res.data);
          }
        },
        error: (err) => {
          this.isLoading.set(false);
          let errorMsg = 'An error occurred while generating the report.';
          if (err.error && err.error.detail) {
            errorMsg = typeof err.error.detail === 'string' ? err.error.detail : JSON.stringify(err.error.detail);
          }
          this.errorMsg.set(errorMsg);
          console.error('Report Generation Error:', err);
        }
      });
  }

  exportPdf() {
    if (!this.selectedProjectId || !this.selectedReportType) return;
    
    this.isLoading.set(true);
    this.errorMsg.set('');
    
    this.reportService.exportPdf(this.selectedReportType, this.selectedProjectId, this.startDate, this.endDate)
      .subscribe({
        next: (blob: Blob) => {
          this.isLoading.set(false);
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `BuildTrack_${this.selectedReportType}_Report_${new Date().toISOString().split('T')[0]}.pdf`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        },
        error: (err) => {
          this.isLoading.set(false);
          this.errorMsg.set('Unable to generate PDF.');
          console.error('PDF Export Error:', err);
        }
      });
  }

  exportExcel() {
    if (!this.selectedProjectId || !this.selectedReportType) return;
    
    this.isLoading.set(true);
    this.errorMsg.set('');
    
    this.reportService.exportExcel(this.selectedReportType, this.selectedProjectId, this.startDate, this.endDate)
      .subscribe({
        next: (blob: Blob) => {
          this.isLoading.set(false);
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `BuildTrack_${this.selectedReportType}_Report_${new Date().toISOString().split('T')[0]}.xlsx`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        },
        error: (err) => {
          this.isLoading.set(false);
          this.errorMsg.set('Unable to generate Excel.');
          console.error('Excel Export Error:', err);
        }
      });
  }

  objectKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }

  isDataDictionary(data: any): boolean {
    return data !== null && typeof data === 'object' && !Array.isArray(data);
  }
}
