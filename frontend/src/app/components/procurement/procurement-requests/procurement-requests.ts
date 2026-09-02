import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProcurementService, ProcurementRequest } from '../../../services/procurement.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-procurement-requests',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="requests-container">
      <h2>Procurement Requests</h2>
      <div class="actions-bar">
        <select [(ngModel)]="statusFilter" (change)="loadRequests()" class="form-select">
          <option value="">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
          <option value="Processing">Processing</option>
          <option value="Completed">Completed</option>
        </select>
        <button *ngIf="canCreateRequest()" (click)="showCreateModal = true" class="btn btn-primary">+ New Request</button>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Project</th>
            <th>Quantity</th>
            <th>Required Date</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let req of requests">
            <td>{{ req.id?.substring(0, 8) }}...</td>
            <td>{{ req.item_name }}</td>
            <td>{{ req.project_name }}</td>
            <td>{{ req.quantity }} {{ req.unit }}</td>
            <td>{{ req.required_date }}</td>
            <td>
              <span class="badge" [ngClass]="getPriorityClass(req.priority)">{{ req.priority }}</span>
            </td>
            <td>
              <span class="badge" [ngClass]="getStatusClass(req.status)">{{ req.status }}</span>
            </td>
            <td>
              <button *ngIf="canApprove(req)" (click)="approve(req.id!)" class="btn-sm btn-success">Approve</button>
              <button *ngIf="canApprove(req)" (click)="reject(req.id!)" class="btn-sm btn-danger">Reject</button>
            </td>
          </tr>
          <tr *ngIf="requests.length === 0">
            <td colspan="8" class="text-center">No requests found.</td>
          </tr>
        </tbody>
      </table>

      <!-- Create Request Modal -->
      <div class="modal" [class.show]="showCreateModal">
        <div class="modal-content">
          <h3>Create Procurement Request</h3>
          <form (ngSubmit)="saveRequest()">
            <div class="form-group">
              <label>Project ID</label>
              <input type="text" [(ngModel)]="newRequest.project_id" name="project_id" required class="form-control">
            </div>
            <div class="form-group">
              <label>Item Name</label>
              <input type="text" [(ngModel)]="newRequest.item_name" name="item_name" required class="form-control">
            </div>
            <div class="form-group">
              <label>Quantity</label>
              <input type="number" [(ngModel)]="newRequest.quantity" (change)="checkInventory()" name="quantity" required class="form-control">
            </div>
            <div class="form-group">
              <label>Unit</label>
              <input type="text" [(ngModel)]="newRequest.unit" name="unit" required class="form-control">
            </div>
            <div class="form-group">
              <label>Required Date</label>
              <input type="date" [(ngModel)]="newRequest.required_date" name="required_date" required class="form-control">
            </div>
            <div class="form-group">
              <label>Priority</label>
              <select [(ngModel)]="newRequest.priority" name="priority" class="form-control">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Critical">Critical</option>
              </select>
            </div>
            <div class="form-group">
              <label>Material ID (for Inventory Check)</label>
              <input type="text" [(ngModel)]="newRequest.material_id" (change)="checkInventory()" name="material_id" class="form-control" placeholder="Optional">
            </div>
            
            <div *ngIf="inventoryWarning" class="alert alert-warning mt-2">
              {{ inventoryWarning }}
            </div>

            <div class="modal-actions mt-3">
              <button type="button" (click)="closeModal()" class="btn btn-secondary mr-2">Cancel</button>
              <button type="submit" class="btn btn-primary" [disabled]="inventorySufficient">Submit Request</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .requests-container { padding: 20px; }
    .actions-bar { display: flex; gap: 10px; margin-bottom: 20px; justify-content: space-between; }
    .table { width: 100%; border-collapse: collapse; }
    .table th, .table td { padding: 10px; border-bottom: 1px solid #ddd; text-align: left; }
    .badge { padding: 4px 8px; border-radius: 4px; color: white; font-size: 12px; }
    .bg-success { background-color: #28a745; }
    .bg-warning { background-color: #ffc107; color: black; }
    .bg-danger { background-color: #dc3545; }
    .bg-info { background-color: #17a2b8; }
    .bg-secondary { background-color: #6c757d; }
    .modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 1000; }
    .modal.show { display: flex; justify-content: center; align-items: center; }
    .modal-content { background: white; padding: 20px; border-radius: 8px; width: 500px; max-width: 90%; max-height: 90vh; overflow-y: auto; }
    .form-group { margin-bottom: 15px; }
    .form-control { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
    .btn { padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; }
    .btn-primary { background: #007bff; color: white; }
    .btn-secondary { background: #6c757d; color: white; }
    .btn-sm { padding: 4px 8px; font-size: 12px; margin-right: 5px; border-radius: 3px; border: none; cursor: pointer; }
    .btn-success { background: #28a745; color: white; }
    .btn-danger { background: #dc3545; color: white; }
    .alert { padding: 10px; border-radius: 4px; margin-bottom: 10px; }
    .alert-warning { background-color: #fff3cd; color: #856404; border: 1px solid #ffeeba; }
    .mt-2 { margin-top: 10px; }
    .mt-3 { margin-top: 15px; }
    .mr-2 { margin-right: 10px; }
    .text-center { text-align: center; }
  `]
})
export class ProcurementRequestsComponent implements OnInit {
  procurementService = inject(ProcurementService);
  authService = inject(AuthService);

  requests: ProcurementRequest[] = [];
  statusFilter = '';
  showCreateModal = false;
  
  newRequest: ProcurementRequest = {
    project_id: '',
    item_name: '',
    quantity: 1,
    unit: 'pcs',
    required_date: '',
    priority: 'Medium'
  };

  inventoryWarning = '';
  inventorySufficient = false;

  ngOnInit() {
    this.loadRequests();
  }

  loadRequests() {
    this.procurementService.getRequests(undefined, this.statusFilter || undefined)
      .subscribe(res => {
        if (res.success) {
          this.requests = res.data;
        }
      });
  }

  canCreateRequest(): boolean {
    const role = this.authService.userRole();
    return ['admin', 'project_manager', 'site_engineer'].includes(role || '');
  }

  canApprove(req: ProcurementRequest): boolean {
    const role = this.authService.userRole();
    const userId = this.authService.currentUser()?.id;
    return req.status === 'Pending' && (role === 'admin' || (role === 'project_manager' && req.requested_by_id !== userId));
  }

  getPriorityClass(priority?: string): string {
    switch(priority) {
      case 'Critical': return 'bg-danger';
      case 'High': return 'bg-warning';
      case 'Medium': return 'bg-info';
      default: return 'bg-secondary';
    }
  }

  getStatusClass(status?: string): string {
    switch(status) {
      case 'Approved': return 'bg-success';
      case 'Pending': return 'bg-warning';
      case 'Rejected': return 'bg-danger';
      case 'Processing': return 'bg-info';
      case 'Completed': return 'bg-secondary';
      default: return 'bg-secondary';
    }
  }

  checkInventory() {
    if (this.newRequest.material_id && this.newRequest.quantity > 0) {
      this.procurementService.checkInventory(this.newRequest.material_id, this.newRequest.quantity).subscribe(res => {
        if (res.success) {
          const data = res.data;
          if (data.shortage_quantity <= 0) {
            this.inventoryWarning = `Sufficient inventory exists! (Available: ${data.available_quantity}). You do not need to create a procurement request.`;
            this.inventorySufficient = true;
          } else {
            this.inventoryWarning = `Shortage identified. Available: ${data.available_quantity}, Shortage: ${data.shortage_quantity}. Request will be adjusted to shortage.`;
            this.newRequest.quantity = data.shortage_quantity;
            this.inventorySufficient = false;
          }
        }
      });
    } else {
      this.inventoryWarning = '';
      this.inventorySufficient = false;
    }
  }

  closeModal() {
    this.showCreateModal = false;
    this.newRequest = {
      project_id: '',
      item_name: '',
      quantity: 1,
      unit: 'pcs',
      required_date: '',
      priority: 'Medium'
    };
    this.inventoryWarning = '';
    this.inventorySufficient = false;
  }

  saveRequest() {
    if (this.inventorySufficient) return;
    this.procurementService.createRequest(this.newRequest).subscribe(res => {
      this.loadRequests();
      this.closeModal();
    });
  }

  approve(id: string) {
    this.procurementService.approveRequest(id).subscribe(res => {
      this.loadRequests();
    });
  }

  reject(id: string) {
    const reason = prompt("Enter rejection reason:");
    if (reason !== null) {
      this.procurementService.rejectRequest(id, reason).subscribe(res => {
        this.loadRequests();
      });
    }
  }
}
