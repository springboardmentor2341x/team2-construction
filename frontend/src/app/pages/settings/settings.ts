import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ThemeService } from '../../services/theme.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings implements OnInit {
  authService = inject(AuthService);
  themeService = inject(ThemeService);
  fb = inject(FormBuilder);
  
  user: User | null = null;
  
  passwordForm: FormGroup;
  settingsForm: FormGroup;
  
  passwordSuccess = '';
  passwordError = '';
  
  settingsSuccess = '';
  settingsError = '';
  
  activeTab = 'security'; // 'security' or 'notifications'

  constructor() {
    this.passwordForm = this.fb.group({
      current_password: ['', Validators.required],
      new_password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', Validators.required]
    });
    
    this.settingsForm = this.fb.group({
      email_notifications: [true],
      sms_notifications: [false],
      theme: ['light']
    });
  }

  ngOnInit() {
    const u = this.authService.currentUser();
    this.user = u;
    
    // Set form to current theme from service (if valid), or fallback to preference
    const currentTheme = this.themeService.currentTheme();
    
    if (u && u.preferences) {
      try {
        const pref = JSON.parse(u.preferences);
        this.settingsForm.patchValue({
          email_notifications: pref.email_notifications ?? true,
          sms_notifications: pref.sms_notifications ?? false,
          theme: currentTheme || pref.theme || 'light'
        });
      } catch(e) {}
    } else {
      this.settingsForm.patchValue({ theme: currentTheme });
    }
    
    // Subscribe to theme changes in the form to instantly preview
    this.settingsForm.get('theme')?.valueChanges.subscribe(val => {
      if (val === 'light' || val === 'dark') {
        this.themeService.setTheme(val);
      }
    });
  }
  
  setTab(tab: string) {
    this.activeTab = tab;
    this.passwordSuccess = '';
    this.passwordError = '';
    this.settingsSuccess = '';
    this.settingsError = '';
  }

  changePassword() {
    if (this.passwordForm.invalid) return;
    
    const vals = this.passwordForm.value;
    if (vals.new_password !== vals.confirm_password) {
      this.passwordError = 'New password and confirm password do not match.';
      return;
    }
    
    this.passwordSuccess = '';
    this.passwordError = '';
    
    this.authService.changePassword({
      current_password: vals.current_password,
      new_password: vals.new_password
    }).subscribe({
      next: (res) => {
        this.passwordSuccess = 'Password changed successfully.';
        this.passwordForm.reset();
      },
      error: (err) => {
        this.passwordError = err.message || 'Failed to change password.';
      }
    });
  }

  saveSettings() {
    this.settingsSuccess = '';
    this.settingsError = '';
    
    const pref = JSON.stringify(this.settingsForm.value);
    
    this.authService.updateSettings(pref).subscribe({
      next: (u) => {
        this.user = u;
        this.settingsSuccess = 'Preferences updated successfully.';
      },
      error: (err) => {
        this.settingsError = err.message || 'Failed to update preferences.';
      }
    });
  }
}
