import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reports',
  imports: [CommonModule, FormsModule],
  templateUrl: './reports.html',
  styleUrl: './reports.css'
})
export class Reports {

  searchText = '';

  selectedReport: any = null;

  reportToDelete: any = null;

  reports = [
    {
      name: 'Monthly Progress Report',
      project: 'Metro Construction',
      type: 'Progress',
      date: '04 Sep 2026',
      status: 'Completed'
    },
    {
      name: 'Material Usage Report',
      project: 'Smart City Project',
      type: 'Materials',
      date: '02 Sep 2026',
      status: 'Completed'
    },
    {
      name: 'Weekly Site Report',
      project: 'Highway Development',
      type: 'Site Progress',
      date: '01 Sep 2026',
      status: 'Pending'
    }
  ];

  get filteredReports() {
    return this.reports.filter(report =>
      report.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      report.project.toLowerCase().includes(this.searchText.toLowerCase()) ||
      report.type.toLowerCase().includes(this.searchText.toLowerCase()) ||
      report.status.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  get monthlyReports() {
    return this.reports.filter(report =>
      report.name.toLowerCase().includes('monthly')
    ).length;
  }

  generateReport() {
    alert('Report generation feature will be available soon.');
  }

  viewReport(report: any) {
    this.selectedReport = report;
  }

  closeReport() {
    this.selectedReport = null;
  }

  openDeleteDialog(report: any) {
    this.reportToDelete = report;
  }

  cancelDelete() {
    this.reportToDelete = null;
  }

  confirmDelete() {

    if (this.reportToDelete) {

      const index = this.reports.indexOf(this.reportToDelete);

      if (index !== -1) {
        this.reports.splice(index, 1);
      }

      this.reportToDelete = null;
    }
  }

}