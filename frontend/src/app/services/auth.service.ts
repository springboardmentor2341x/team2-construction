import { Injectable, signal, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User, UserRole } from '../models/user.model';
import { Observable, of, throwError } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  
  // Demo users mapping for testing (fallback client representation)
  private readonly demoUsers: User[] = [
    { id: '1', email: 'admin@buildtrack.com', name: 'John Admin', role: 'admin', company: 'BuildTrack Corp', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150' },
    { id: '2', email: 'pm@buildtrack.com', name: 'Sarah Miller', role: 'project_manager', company: 'Apex Builders', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150' },
    { id: '3', email: 'engineer@buildtrack.com', name: 'Alex Chen', role: 'site_engineer', company: 'Apex Builders', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150' },
    { id: '4', email: 'contractor@buildtrack.com', name: 'Marcus Vance', role: 'contractor', company: 'Vance Concrete Ltd', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150' },
    { id: '5', email: 'worker@buildtrack.com', name: 'David Smith', role: 'worker', company: 'Vance Concrete Ltd', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150' },
    { id: '6', email: 'client@buildtrack.com', name: 'Emily Vanguard', role: 'client', company: 'Vanguard Realty', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150' }
  ];

  // Signal for the current user
  private readonly currentUserSignal = signal<User | null>(null);
  
  // Computed values
  readonly currentUser = this.currentUserSignal.asReadonly();
  readonly isLoggedIn = computed(() => this.currentUserSignal() !== null);
  readonly userRole = computed(() => this.currentUserSignal()?.role || null);

  constructor(private router: Router) {
    this.loadSession();
  }

  private loadSession() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedUser = localStorage.getItem('bt_user');
      const token = localStorage.getItem('bt_token');
      if (storedUser && token) {
        try {
          this.currentUserSignal.set(JSON.parse(storedUser));
          // Asynchronously verify credentials with Express backend
          this.http.get<{ success: boolean; data: User }>('/api/auth/me').subscribe({
            next: (res) => {
              if (res.success && res.data) {
                this.currentUserSignal.set(res.data);
                localStorage.setItem('bt_user', JSON.stringify(res.data));
              }
            },
            error: () => {
              this.clearSession();
              this.router.navigate(['/login']);
            }
          });
        } catch (e) {
          this.clearSession();
        }
      }
    }
  }

  private saveSession(user: User, token: string) {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('bt_user', JSON.stringify(user));
      localStorage.setItem('bt_token', token);
    }
    this.currentUserSignal.set(user);
  }

  private clearSession() {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('bt_user');
      localStorage.removeItem('bt_token');
    }
    this.currentUserSignal.set(null);
  }

  // real API login with password fallback
  login(email: string, password?: string): Observable<User> {
    const fallbackPassword = password || 'password123';
    return this.http.post<{ success: boolean; data: { token: string; user: User } }>('/api/auth/login', {
      email,
      password: fallbackPassword
    }).pipe(
      map(res => {
        const authData = res.data;
        this.saveSession(authData.user, authData.token);
        return authData.user;
      }),
      catchError(err => {
        console.error('Login error', err);
        return throwError(() => new Error(err.error?.message || 'Invalid email or password.'));
      })
    );
  }

  // real API register
  register(name: string, email: string, role: UserRole, company?: string, phone?: string): Observable<User> {
    return this.http.post<{ success: boolean; data: { token: string; user: User } }>('/api/auth/register', {
      name,
      email,
      password: 'password123', // default credentials
      role,
      company,
      phone
    }).pipe(
      map(res => {
        const authData = res.data;
        this.saveSession(authData.user, authData.token);
        return authData.user;
      }),
      catchError(err => {
        console.error('Registration error', err);
        return throwError(() => new Error(err.error?.message || 'Registration failed.'));
      })
    );
  }

  forgotPassword(email: string): Observable<boolean> {
    return of(true).pipe(delay(500));
  }

  logout() {
    this.clearSession();
    this.router.navigate(['/login']);
  }

  getDashboardUrl(role: UserRole): string {
    switch (role) {
      case 'admin':
        return '/admin/dashboard';
      case 'project_manager':
        return '/project-manager/dashboard';
      case 'site_engineer':
        return '/site-engineer/dashboard';
      case 'contractor':
        return '/contractor/dashboard';
      case 'worker':
        return '/worker/dashboard';
      case 'client':
        return '/client/dashboard';
      default:
        return '/login';
    }
  }
}
