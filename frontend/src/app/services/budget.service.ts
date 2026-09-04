import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';

const environment = { apiUrl: 'http://localhost:8000' };

export interface BudgetCategory {
  id: string;
  name: string;
  description?: string;
}

export interface BudgetAllocation {
  id: string;
  project_id: string;
  category_id: string;
  allocated_amount: number;
  created_at: string;
  category?: BudgetCategory;
}

export interface ExpenseRecord {
  id: string;
  project_id: string;
  category_id: string;
  description: string;
  amount: number;
  expense_date: string;
  status: string;
  category?: BudgetCategory;
}

export interface ProjectBudgetSummary {
  project_id: string;
  total_budget: number;
  total_allocated: number;
  total_spent: number;
  remaining_budget: number;
  burn_rate: number;
  allocations: BudgetAllocation[];
  expenses: ExpenseRecord[];
  labor_costs: number;
  material_costs: number;
  equipment_costs: number;
  other_costs: number;
}

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private apiUrl = `${environment.apiUrl}/api/budget`;
  
  public budgetSummary = signal<ProjectBudgetSummary | null>(null);
  public categories = signal<BudgetCategory[]>([]);

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  private getHeaders() {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getCategories(): Observable<BudgetCategory[]> {
    return this.http.get<BudgetCategory[]>(`${this.apiUrl}/categories`, { headers: this.getHeaders() }).pipe(
      tap(data => this.categories.set(data))
    );
  }

  getProjectBudgetSummary(projectId: string): Observable<ProjectBudgetSummary> {
    return this.http.get<ProjectBudgetSummary>(`${this.apiUrl}/projects/${projectId}/summary`, { headers: this.getHeaders() }).pipe(
      tap(data => this.budgetSummary.set(data))
    );
  }

  createBudgetAllocation(projectId: string, allocation: { category_id: string, allocated_amount: number }): Observable<BudgetAllocation> {
    return this.http.post<BudgetAllocation>(`${this.apiUrl}/projects/${projectId}/allocations`, allocation, { headers: this.getHeaders() }).pipe(
      tap(() => this.getProjectBudgetSummary(projectId).subscribe())
    );
  }

  createExpense(projectId: string, expense: { category_id: string, description: string, amount: number, expense_date: string }): Observable<ExpenseRecord> {
    return this.http.post<ExpenseRecord>(`${this.apiUrl}/projects/${projectId}/expenses`, expense, { headers: this.getHeaders() }).pipe(
      tap(() => this.getProjectBudgetSummary(projectId).subscribe())
    );
  }
}
