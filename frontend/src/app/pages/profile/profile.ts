import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {
  authService = inject(AuthService);
  fb = inject(FormBuilder);
  
  user: User | null = null;
  profileForm: FormGroup;
  isEditing = false;
  successMessage = '';
  errorMessage = '';
  
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  constructor() {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      phone: [''],
      company: ['']
    });
  }

  ngOnInit() {
    const u = this.authService.currentUser();
    this.user = u;
    if (u) {
      this.profileForm.patchValue({
        name: u.name,
        phone: u.phone || '',
        company: u.company || ''
      });
    }
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
    this.successMessage = '';
    this.errorMessage = '';
    if (!this.isEditing && this.user) {
      // reset changes
      this.profileForm.patchValue({
        name: this.user.name,
        phone: this.user.phone,
        company: this.user.company
      });
      this.selectedFile = null;
      this.imagePreview = null;
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = e => this.imagePreview = reader.result;
      reader.readAsDataURL(file);
    }
  }

  saveProfile() {
    if (this.profileForm.invalid) return;

    this.successMessage = '';
    this.errorMessage = '';

    const updateData = this.profileForm.value;
    
    // update text fields
    this.authService.updateProfile(updateData).subscribe({
      next: (updatedUser) => {
        this.user = updatedUser;
        
        // upload picture if selected
        if (this.selectedFile) {
          this.authService.uploadProfilePicture(this.selectedFile).subscribe({
            next: (u) => {
              this.user = u;
              this.finishSave();
            },
            error: (err) => {
              this.errorMessage = 'Profile updated, but failed to upload picture.';
              this.isEditing = false;
            }
          });
        } else {
          this.finishSave();
        }
      },
      error: (err) => {
        this.errorMessage = 'Failed to update profile. ' + err.message;
      }
    });
  }
  
  private finishSave() {
    this.successMessage = 'Profile updated successfully!';
    this.isEditing = false;
    this.selectedFile = null;
    this.imagePreview = null;
  }
}
