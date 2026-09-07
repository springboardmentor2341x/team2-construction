import { Component, inject, signal, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements AfterViewInit {
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    if (this.bgVideo && this.bgVideo.nativeElement && typeof this.bgVideo.nativeElement.play === 'function') {
      this.bgVideo.nativeElement.play().catch(err => {
        console.log('Autoplay was prevented or video loading failed:', err);
      });
    }
  }

  authService = inject(AuthService);
  router = inject(Router);

  email = '';
  password = '';
  isLoading = signal(false);
  errorMessage = signal<string | null>(null);
  isMuted = signal(true);

  toggleMute() {
    this.isMuted.update(val => !val);
  }

  // Demo accounts data for testing
  demoAccounts = [
    { label: 'Admin', email: 'admin@buildtrack.com', role: 'admin' },
    { label: 'Proj Mgr', email: 'pm@buildtrack.com', role: 'project_manager' },
    { label: 'Site Eng', email: 'engineer@buildtrack.com', role: 'site_engineer' },
    { label: 'Contractor', email: 'contractor@buildtrack.com', role: 'contractor' },
    { label: 'Worker', email: 'worker@buildtrack.com', role: 'worker' },
    { label: 'Client', email: 'client@buildtrack.com', role: 'client' }
  ];

  selectDemo(email: string) {
    this.email = email;
    this.password = 'password123'; // fill a dummy password
    this.onSubmit();
  }

  onSubmit() {
    if (!this.email) {
      this.errorMessage.set('Please enter your email address.');
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.authService.login(this.email, this.password).subscribe({
      next: (user) => {
        this.isLoading.set(false);
        const destination = this.authService.getDashboardUrl(user.role);
        this.router.navigate([destination]);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.errorMessage.set(err.message || 'Authentication failed. Please check credentials.');
      }
    });
  }
}