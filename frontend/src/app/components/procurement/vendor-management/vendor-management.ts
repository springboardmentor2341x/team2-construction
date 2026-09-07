import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProcurementService, Vendor } from '../../../services/procurement.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-vendor-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="vendor-container">
      <h2>Vendor Directory</h2>
      <div class="actions-bar">
        <input type="text" [(ngModel)]="searchQuery" placeholder="Search vendors..." (keyup.enter)="loadVendors()" class="form-input">
        <select [(ngModel)]="statusFilter" (change)="loadVendors()" class="form-select">
          <option value="">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Suspended">Suspended</option>
        </select>
        <button *ngIf="canManage()" (click)="showCreateModal = true" class="btn btn-primary">+ Add Vendor</button>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th>Vendor Name</th>
            <th>Category</th>
            <th>Contact Person</th>
            <th>Status</th>
            <th>Total Orders</th>
            <th>Total Value</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let vendor of vendors">
            <td>{{ vendor.name }}</td>
            <td>{{ vendor.category }}</td>
            <td>{{ vendor.contact_person }} ({{ vendor.contact_number }})</td>
            <td>
              <span class="badge" [ngClass]="{'bg-success': vendor.status === 'Active', 'bg-warning': vendor.status === 'Inactive', 'bg-danger': vendor.status === 'Suspended'}">
                {{ vendor.status }}
              </span>
            </td>
            <td>{{ vendor.total_orders }}</td>
            <td>$ {{ vendor.total_value | number:'1.2-2' }}</td>
            <td>
              <button (click)="viewVendor(vendor)" class="btn-sm btn-info">View</button>
              <button *ngIf="canManage()" (click)="editVendor(vendor)" class="btn-sm btn-secondary">Edit</button>
            </td>
          </tr>
          <tr *ngIf="vendors.length === 0">
            <td colspan="7" class="text-center">No vendors found.</td>
          </tr>
        </tbody>
      </table>

      <!-- Vendor Modal -->
      <div class="modal" [class.show]="showCreateModal || showEditModal">
        <div class="modal-content">
          <h3>{{ showEditModal ? 'Edit Vendor' : 'Add Vendor' }}</h3>
          <form (ngSubmit)="saveVendor()">
            <div class="form-group">
              <label>Name</label>
              <input type="text" [(ngModel)]="currentVendor.name" name="name" required class="form-control">
            </div>
            <div class="form-group">
              <label>Contact Person</label>
              <input type="text" [(ngModel)]="currentVendor.contact_person" name="contact_person" class="form-control">
            </div>
            <div class="form-group">
              <label>Contact Number</label>
              <input type="text" [(ngModel)]="currentVendor.contact_number" name="contact_number" class="form-control">
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" [(ngModel)]="currentVendor.email" name="email" class="form-control">
            </div>
            <div class="form-group">
              <label>Category</label>
              <select [(ngModel)]="currentVendor.category" name="category" class="form-control">
                <option value="Raw Materials">Raw Materials</option>
                <option value="Equipment">Equipment</option>
                <option value="Machinery">Machinery</option>
                <option value="Safety Equipment">Safety Equipment</option>
                <option value="Office Supplies">Office Supplies</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div class="form-group">
              <label>Status</label>
              <select [(ngModel)]="currentVendor.status" name="status" class="form-control">
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Suspended">Suspended</option>
              </select>
            </div>
            <div class="modal-actions mt-3">
              <button type="button" (click)="closeModal()" class="btn btn-secondary mr-2">Cancel</button>
              <button type="submit" class="btn btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .vendor-container { padding: 20px; }
    .actions-bar { display: flex; gap: 10px; margin-bottom: 20px; }
    .table { width: 100%; border-collapse: collapse; }
    .table th, .table td { padding: 10px; border-bottom: 1px solid #ddd; text-align: left; }
    .badge { padding: 4px 8px; border-radius: 4px; color: white; font-size: 12px; }
    .bg-success { background-color: #28a745; }
    .bg-warning { background-color: #ffc107; color: black; }
    .bg-danger { background-color: #dc3545; }
    .modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); }
    .modal.show { display: flex; justify-content: center; align-items: center; }
    .modal-content { background: white; padding: 20px; border-radius: 8px; width: 500px; max-width: 90%; }
    .form-group { margin-bottom: 15px; }
    .form-control { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
    .btn { padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; }
    .btn-primary { background: #007bff; color: white; }
    .btn-secondary { background: #6c757d; color: white; }
    .btn-sm { padding: 4px 8px; font-size: 12px; margin-right: 5px; border-radius: 3px; border: none; cursor: pointer; }
    .btn-info { background: #17a2b8; color: white; }
    .mt-3 { margin-top: 15px; }
    .mr-2 { margin-right: 10px; }
  `]
})
export class VendorManagementComponent implements OnInit {
  procurementService = inject(ProcurementService);
  authService = inject(AuthService);

  vendors: Vendor[] = [];
  searchQuery = '';
  statusFilter = '';
  
  showCreateModal = false;
  showEditModal = false;
  currentVendor: Vendor = { name: '', status: 'Active' };

  ngOnInit() {
    this.loadVendors();
  }

  loadVendors() {
    this.procurementService.getVendors(undefined, this.statusFilter || undefined, this.searchQuery || undefined)
      .subscribe(res => {
        if (res.success) {
          this.vendors = res.data;
        }
      });
  }

  canManage(): boolean {
    const role = this.authService.userRole();
    return role === 'admin' || role === 'project_manager';
  }

  viewVendor(vendor: Vendor) {
    // Navigate to vendor details or show modal
    alert('Viewing vendor: ' + vendor.name);
  }

  editVendor(vendor: Vendor) {
    this.currentVendor = { ...vendor };
    this.showEditModal = true;
  }

  closeModal() {
    this.showCreateModal = false;
    this.showEditModal = false;
    this.currentVendor = { name: '', status: 'Active' };
  }

  saveVendor() {
    if (this.showEditModal && this.currentVendor.id) {
      this.procurementService.updateVendor(this.currentVendor.id, this.currentVendor).subscribe(res => {
        this.loadVendors();
        this.closeModal();
      });
    } else {
      this.procurementService.createVendor(this.currentVendor).subscribe(res => {
        this.loadVendors();
        this.closeModal();
      });
    }
  }
}
