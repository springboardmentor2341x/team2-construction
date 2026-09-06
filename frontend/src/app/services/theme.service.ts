import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  
  // Signal to hold the current theme ('light' or 'dark')
  readonly currentTheme = signal<'light' | 'dark'>('light');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      // 1. Initialize from localStorage
      const savedTheme = localStorage.getItem('bt_theme') as 'light' | 'dark' | null;
      if (savedTheme) {
        this.currentTheme.set(savedTheme);
        this.applyTheme(savedTheme);
      } else {
        this.applyTheme('light');
      }

      // 2. Automatically apply DOM changes when the signal changes
      effect(() => {
        const theme = this.currentTheme();
        localStorage.setItem('bt_theme', theme);
        this.applyTheme(theme);
      });
    }
  }

  setTheme(theme: 'light' | 'dark') {
    this.currentTheme.set(theme);
  }

  private applyTheme(theme: 'light' | 'dark') {
    const htmlElement = document.documentElement;
    if (theme === 'dark') {
      htmlElement.setAttribute('data-bs-theme', 'dark');
      htmlElement.classList.add('dark');
    } else {
      htmlElement.setAttribute('data-bs-theme', 'light');
      htmlElement.classList.remove('dark');
    }
  }
}
