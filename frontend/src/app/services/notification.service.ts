import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';

const environment = { apiUrl: 'http://localhost:8000' };
export interface Notification {
  id: string;
  user_id: string;
  project_id?: string;
  notification_type: string;
  title: string;
  message: string;
  is_read: boolean;
  created_at: string;
  related_entity_type?: string;
  related_entity_id?: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = `${environment.apiUrl}/notifications`;
  
  private unreadCountSubject = new BehaviorSubject<number>(0);
  public unreadCount$ = this.unreadCountSubject.asObservable();

  constructor(private http: HttpClient) {
    this.refreshUnreadCount();
  }

  getNotifications(unreadOnly: boolean = false): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.apiUrl}/?unread_only=${unreadOnly}`);
  }

  refreshUnreadCount(): void {
    if (localStorage.getItem('token')) {
      this.http.get<{success: boolean, count: number}>(`${this.apiUrl}/unread-count`).subscribe({
        next: (res) => this.unreadCountSubject.next(res.count),
        error: (err) => console.error('Failed to fetch unread notifications count', err)
      });
    }
  }

  markAsRead(id: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}/read`, {}).pipe(
      tap(() => this.refreshUnreadCount())
    );
  }

  markAllAsRead(): Observable<any> {
    return this.http.patch(`${this.apiUrl}/read-all`, {}).pipe(
      tap(() => this.refreshUnreadCount())
    );
  }
}
