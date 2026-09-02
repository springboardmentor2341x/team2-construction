import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProcurementService, Invoice } from '../../../services/procurement.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="invoices-container">
      <h2>Invoices</h2>
      <div class="actions-bar">
        <select [(ngModel)]="paymentStatusFilter" (change)="loadInvoices()" class="form-select">
          <option value="">All Payment Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Partially Paid">Partially Paid</option>
          <option value="Paid">Paid</option>
        </select>
        <button *ngIf="canManage()" (click)="showCreateModal = true" class="btn btn-primary">+ Record Invoice</button>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th>Invoice #</th>
            <th>PO ID</th>
            <th>Vendor</th>
            <th>Amount</th>
            <th>Due Date</th>
            <th>Payment Status</th>
            <th>Invoice Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let inv of invoices" [class.table-danger]="inv.is_overdue">
            <td>{{ inv.invoice_number }}</td>
            <td>{{ inv.purchase_order_id?.substring(0, 8) }}</td>
            <td>{{ inv.vendor_name }}</td>
            <td>\${{ inv.invoice_amount | number:'1.2-2' }}</td>
            <td>
              {{ inv.due_date | date }}
              <span *ngIf="inv.is_overdue" class="badge bg-danger ml-1">Overdue</span>
            </td>
            <td>
              <span class="badge" [ngClass]="getPaymentStatusClass(inv.payment_status)">{{ inv.payment_status }}</span>
            </td>
            <td>{{ inv.invoice_status }}</td>
            <td>
              <button *ngIf="canManage()" (click)="editInvoice(inv)" class="btn-sm btn-info">Update</button>
            </td>
          </tr>
          <tr *ngIf="invoices.length === 0">
            <td colspan="8" class="text-center">No invoices found.</td>
          </tr>
        </tbody>
      </table>

      <!-- Record Invoice Modal -->
      <div class="modal" [class.show]="showCreateModal || showEditModal">
        <div class="modal-content">
          <h3>{{ showEditModal ? 'Update Invoice' : 'Record Invoice' }}</h3>
          <form (ngSubmit)="saveInvoice()">
            
            <ng-container *ngIf="!showEditModal">
              <div class="form-group">
                <label>Invoice Number</label>
                <input type="text" [(ngModel)]="currentInvoice.invoice_number" name="invoice_number" required class="form-control">
              </div>
              <div class="form-group">
                <label>Project ID</label>
                <input type="text" [(ngModel)]="currentInvoice.project_id" name="project_id" required class="form-control">
              </div>
              <div class="form-group">
                <label>Purchase Order ID</label>
                <input type="text" [(ngModel)]="currentInvoice.purchase_order_id" name="po_id" required class="form-control">
              </div>
              <div class="form-group">
                <label>Vendor ID</label>
                <input type="text" [(ngModel)]="currentInvoice.vendor_id" name="vendor_id" required class="form-control">
              </div>
              <div class="form-group">
                <label>Invoice Date</label>
                <input type="date" [(ngModel)]="currentInvoice.invoice_date" name="invoice_date" required class="form-control">
              </div>
              <div class="form-group">
                <label>Due Date</label>
                <input type="date" [(ngModel)]="currentInvoice.due_date" name="due_date" class="form-control">
              </div>
              <div class="form-group">
                <label>Amount</label>
                <input type="number" [(ngModel)]="currentInvoice.invoice_amount" name="amount" required class="form-control">
              </div>
            </ng-container>

            <ng-container *ngIf="showEditModal">
              <div class="form-group">
                <label>Payment Status</label>
                <select [(ngModel)]="currentInvoice.payment_status" name="payment_status" class="form-control">
                  <option value="Pending">Pending</option>
                  <option value="Partially Paid">Partially Paid</option>
                  <option value="Paid">Paid</option>
                </select>
              </div>
              <div class="form-group">
                <label>Invoice Status</label>
                <select [(ngModel)]="currentInvoice.invoice_status" name="invoice_status" class="form-control">
                  <option value="Received">Received</option>
                  <option value="Verified">Verified</option>
                  <option value="Disputed">Disputed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </ng-container>

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
    .invoices-container { padding: 20px; }
    .actions-bar { display: flex; gap: 10px; margin-bottom: 20px; justify-content: space-between; }
    .table { width: 100%; border-collapse: collapse; }
    .table th, .table td { padding: 10px; border-bottom: 1px solid #ddd; text-align: left; }
    .table-danger { background-color: #fdf3f4; }
    .badge { padding: 4px 8px; border-radius: 4px; color: white; font-size: 12px; }
    .bg-success { background-color: #28a745; }
    .bg-warning { background-color: #ffc107; color: black; }
    .bg-danger { background-color: #dc3545; }
    .modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 1000; }
    .modal.show { display: flex; justify-content: center; align-items: center; }
    .modal-content { background: white; padding: 20px; border-radius: 8px; width: 500px; max-width: 90%; max-height: 90vh; overflow-y: auto; }
    .form-group { margin-bottom: 15px; }
    .form-control { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
    .btn { padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; }
    .btn-primary { background: #007bff; color: white; }
    .btn-secondary { background: #6c757d; color: white; }
    .btn-sm { padding: 4px 8px; font-size: 12px; margin-right: 5px; border-radius: 3px; border: none; cursor: pointer; }
    .btn-info { background: #17a2b8; color: white; }
    .mt-3 { margin-top: 15px; }
    .mr-2 { margin-right: 10px; }
    .ml-1 { margin-left: 5px; }
    .text-center { text-align: center; }
  `]
})
export class InvoicesComponent implements OnInit {
  procurementService = inject(ProcurementService);
  authService = inject(AuthService);

  invoices: Invoice[] = [];
  paymentStatusFilter = '';
  
  showCreateModal = false;
  showEditModal = false;
  
  currentInvoice: any = {};

  ngOnInit() {
    this.loadInvoices();
  }

  loadInvoices() {
    this.procurementService.getInvoices(undefined, undefined, this.paymentStatusFilter || undefined)
      .subscribe(res => {
        if (res.success) {
          this.invoices = res.data;
        }
      });
  }

  canManage(): boolean {
    const role = this.authService.userRole();
    return role === 'admin' || role === 'project_manager';
  }

  getPaymentStatusClass(status?: string): string {
    switch(status) {
      case 'Paid': return 'bg-success';
      case 'Partially Paid': return 'bg-warning';
      case 'Pending': return 'bg-secondary';
      default: return 'bg-secondary';
    }
  }

  editInvoice(inv: Invoice) {
    this.currentInvoice = { ...inv };
    this.showEditModal = true;
  }

  closeModal() {
    this.showCreateModal = false;
    this.showEditModal = false;
    this.currentInvoice = {};
  }

  saveInvoice() {
    if (this.showEditModal && this.currentInvoice.id) {
      this.procurementService.updateInvoice(this.currentInvoice.id, this.currentInvoice).subscribe(res => {
        this.loadInvoices();
        this.closeModal();
      });
    } else {
      this.procurementService.createInvoice(this.currentInvoice as Invoice).subscribe(res => {
        this.loadInvoices();
        this.closeModal();
      });
    }
  }
}
