import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8000/api/reports-engine';

  getReportTypes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/types`);
  }

  previewReport(reportType: string, projectId: string, startDate: string, endDate: string): Observable<any> {
    let url = `${this.apiUrl}/preview/${reportType}?project_id=${projectId}`;
    if (startDate) url += `&start_date=${startDate}`;
    if (endDate) url += `&end_date=${endDate}`;
    return this.http.get(url);
  }

  exportPdf(reportType: string, projectId: string, startDate: string, endDate: string): Observable<Blob> {
    let url = `${this.apiUrl}/export/${reportType}/pdf?project_id=${projectId}`;
    if (startDate) url += `&start_date=${startDate}`;
    if (endDate) url += `&end_date=${endDate}`;
    return this.http.get(url, { responseType: 'blob' });
  }

  exportExcel(reportType: string, projectId: string, startDate: string, endDate: string): Observable<Blob> {
    let url = `${this.apiUrl}/export/${reportType}/excel?project_id=${projectId}`;
    if (startDate) url += `&start_date=${startDate}`;
    if (endDate) url += `&end_date=${endDate}`;
    return this.http.get(url, { responseType: 'blob' });
  }
}
