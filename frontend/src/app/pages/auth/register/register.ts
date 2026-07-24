import { Component, inject, signal, OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { UserRole } from '../../../models/user.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private timerId: any;

  carouselImages = [
    '/construction1.jpg',
    '/construction2.jpg',
    '/construction3.jpg',
    '/construction4.jpg',
    '/construction5.jpg'
  ];
  currentImageIndex = signal(0);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.timerId = setInterval(() => {
        this.nextSlide();
      }, 4000);
    }
  }

  ngOnDestroy() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  nextSlide() {
    this.currentImageIndex.update(idx => (idx + 1) % this.carouselImages.length);
  }

  prevSlide() {
    this.currentImageIndex.update(idx => (idx - 1 + this.carouselImages.length) % this.carouselImages.length);
  }

  setSlide(idx: number) {
    this.currentImageIndex.set(idx);
  }
  authService = inject(AuthService);
  router = inject(Router);

  name = '';
  email = '';
  password = '';
  role: UserRole = 'worker'; // default
  company = '';
  phone = '';

  isLoading = signal(false);
  errorMessage = signal<string | null>(null);

  rolesList = [
    { value: 'admin', label: 'Administrator' },
    { value: 'project_manager', label: 'Project Manager' },
    { value: 'site_engineer', label: 'Site Engineer' },
    { value: 'contractor', label: 'Contractor' },
    { value: 'worker', label: 'Workforce/Worker' },
    { value: 'client', label: 'Client / Owner' }
  ];

  onSubmit() {
    if (!this.name || !this.email || !this.password || !this.role) {
      this.errorMessage.set('All fields are required.');
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.authService.register(
      this.name,
      this.email,
      this.role,
      this.company,
      this.phone
    ).subscribe({
      next: (user) => {
        this.isLoading.set(false);
        const destination = this.authService.getDashboardUrl(user.role);
        this.router.navigate([destination]);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.errorMessage.set(err.message || 'Registration failed.');
      }
    });
  }
}
