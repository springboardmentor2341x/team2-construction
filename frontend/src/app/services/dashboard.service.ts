import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private http = inject(HttpClient);
  private authService = inject(AuthService);
  private apiUrl = 'http://localhost:8000/dashboard';

  private getHeaders() {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    });
  }

  getAdminDashboard(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin`, { headers: this.getHeaders() });
  }

  getPmDashboard(projectId?: string): Observable<any> {
    const url = projectId ? `${this.apiUrl}/project-manager?project_id=${projectId}` : `${this.apiUrl}/project-manager`;
    return this.http.get(url, { headers: this.getHeaders() });
  }
}
