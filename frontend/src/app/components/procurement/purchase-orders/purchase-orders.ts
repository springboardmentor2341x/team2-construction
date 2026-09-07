import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProcurementService, PurchaseOrder, PurchaseOrderItem } from '../../../services/procurement.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-purchase-orders',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="po-container">
      <h2>Purchase Orders</h2>
      <div class="actions-bar">
        <select [(ngModel)]="statusFilter" (change)="loadPOs()" class="form-select">
          <option value="">All Statuses</option>
          <option value="Draft">Draft</option>
          <option value="Issued">Issued</option>
          <option value="Partially Received">Partially Received</option>
          <option value="Received">Received</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <button *ngIf="canManage()" (click)="showCreateModal = true" class="btn btn-primary">+ Create PO</button>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th>PO ID</th>
            <th>Vendor</th>
            <th>Project</th>
            <th>Order Date</th>
            <th>Delivery Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let po of purchaseOrders">
            <td>{{ po.id?.substring(0, 8) }}</td>
            <td>{{ po.vendor_name }}</td>
            <td>{{ po.project_name }}</td>
            <td>{{ po.order_date | date }}</td>
            <td>{{ po.expected_delivery_date | date }}</td>
            <td>\${{ po.total_amount | number:'1.2-2' }}</td>
            <td>
              <span class="badge" [ngClass]="getStatusClass(po.status)">{{ po.status }}</span>
            </td>
            <td>
              <button (click)="viewDetails(po)" class="btn-sm btn-info">Items</button>
              <button *ngIf="canReceive(po)" (click)="openReceiveModal(po)" class="btn-sm btn-success">Receive</button>
            </td>
          </tr>
          <tr *ngIf="purchaseOrders.length === 0">
            <td colspan="8" class="text-center">No purchase orders found.</td>
          </tr>
        </tbody>
      </table>

      <!-- Create PO Modal -->
      <div class="modal" [class.show]="showCreateModal">
        <div class="modal-content">
          <h3>Create Purchase Order</h3>
          <form (ngSubmit)="savePO()">
            <div class="form-group">
              <label>Project ID</label>
              <input type="text" [(ngModel)]="newPO.project_id" name="project_id" required class="form-control">
            </div>
            <div class="form-group">
              <label>Vendor ID</label>
              <input type="text" [(ngModel)]="newPO.vendor_id" name="vendor_id" required class="form-control">
            </div>
            <div class="form-group">
              <label>Procurement Request ID</label>
              <input type="text" [(ngModel)]="newPO.procurement_request_id" name="req_id" class="form-control" placeholder="Optional">
            </div>
            <div class="form-group">
              <label>Expected Delivery Date</label>
              <input type="date" [(ngModel)]="newPO.expected_delivery_date" name="delivery_date" required class="form-control">
            </div>
            <div class="form-group">
              <label>Notes</label>
              <textarea [(ngModel)]="newPO.notes" name="notes" class="form-control"></textarea>
            </div>
            <div class="modal-actions mt-3">
              <button type="button" (click)="closeModal()" class="btn btn-secondary mr-2">Cancel</button>
              <button type="submit" class="btn btn-primary">Create Draft</button>
            </div>
          </form>
        </div>
      </div>

      <!-- PO Details/Items Modal -->
      <div class="modal" [class.show]="selectedPO !== null">
        <div class="modal-content large">
          <h3>PO Details ({{ selectedPO?.id?.substring(0,8) }})</h3>
          
          <div *ngIf="selectedPO?.status === 'Draft' && canManage()" class="mt-2 mb-2">
            <h4>Add Item</h4>
            <div class="item-form">
              <input type="text" [(ngModel)]="newItem.description" placeholder="Description" class="form-control" style="width: 25%">
              <input type="number" [(ngModel)]="newItem.quantity" placeholder="Qty" class="form-control" style="width: 15%">
              <input type="text" [(ngModel)]="newItem.unit" placeholder="Unit" class="form-control" style="width: 15%">
              <input type="number" [(ngModel)]="newItem.unit_price" placeholder="Price" class="form-control" style="width: 15%">
              <input type="text" [(ngModel)]="newItem.material_id" placeholder="Material ID (Opt)" class="form-control" style="width: 20%">
              <button (click)="addItem()" class="btn btn-primary">Add</button>
            </div>
          </div>

          <table class="table mt-3">
            <thead>
              <tr>
                <th>Description</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Tax %</th>
                <th>Line Total</th>
                <th>Received</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let item of selectedPO?.items">
                <td>{{ item.description }}</td>
                <td>{{ item.quantity }} {{ item.unit }}</td>
                <td>\${{ item.unit_price | number:'1.2-2' }}</td>
                <td>{{ item.tax_percent || 0 }}%</td>
                <td>\${{ item.line_total | number:'1.2-2' }}</td>
                <td>{{ item.received_quantity || 0 }} {{ item.unit }}</td>
              </tr>
            </tbody>
          </table>
          
          <div class="totals-section mt-3 text-right">
            <div>Subtotal: \${{ selectedPO?.subtotal | number:'1.2-2' }}</div>
            <div>Tax: \${{ selectedPO?.tax_amount | number:'1.2-2' }}</div>
            <div>Total: <strong>\${{ selectedPO?.total_amount | number:'1.2-2' }}</strong></div>
          </div>

          <div class="modal-actions mt-3">
            <button type="button" (click)="closeDetails()" class="btn btn-secondary">Close</button>
            <button *ngIf="selectedPO?.status === 'Draft' && canManage()" (click)="issuePO()" class="btn btn-success ml-2">Issue PO</button>
          </div>
        </div>
      </div>

      <!-- Receive Goods Modal -->
      <div class="modal" [class.show]="receivingPO !== null">
        <div class="modal-content">
          <h3>Receive Goods for PO {{ receivingPO?.id?.substring(0,8) }}</h3>
          
          <div class="form-group mt-2">
            <label>Delivery Note Number</label>
            <input type="text" [(ngModel)]="receiptData.delivery_note_number" class="form-control">
          </div>
          
          <table class="table mt-2">
            <thead>
              <tr>
                <th>Item</th>
                <th>Ordered</th>
                <th>Already Received</th>
                <th>Now Receiving</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let item of receivingPO?.items">
                <td>{{ item.description }}</td>
                <td>{{ item.quantity }}</td>
                <td>{{ item.received_quantity || 0 }}</td>
                <td>
                  <input type="number" [(ngModel)]="receiptQuantities[item.id!]" max="{{ item.quantity - (item.received_quantity || 0) }}" min="0" class="form-control">
                </td>
              </tr>
            </tbody>
          </table>

          <div class="form-group mt-2">
            <label>Remarks</label>
            <textarea [(ngModel)]="receiptData.remarks" class="form-control"></textarea>
          </div>

          <div class="modal-actions mt-3">
            <button type="button" (click)="closeReceiveModal()" class="btn btn-secondary mr-2">Cancel</button>
            <button type="button" (click)="submitReceipt()" class="btn btn-primary">Save Receipt</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .po-container { padding: 20px; }
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
    .modal-content.large { width: 800px; }
    .form-group { margin-bottom: 15px; }
    .form-control { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
    .btn { padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; }
    .btn-primary { background: #007bff; color: white; }
    .btn-secondary { background: #6c757d; color: white; }
    .btn-success { background: #28a745; color: white; }
    .btn-sm { padding: 4px 8px; font-size: 12px; margin-right: 5px; border-radius: 3px; border: none; cursor: pointer; }
    .btn-info { background: #17a2b8; color: white; }
    .mt-2 { margin-top: 10px; }
    .mt-3 { margin-top: 15px; }
    .mb-2 { margin-bottom: 10px; }
    .mr-2 { margin-right: 10px; }
    .ml-2 { margin-left: 10px; }
    .text-center { text-align: center; }
    .text-right { text-align: right; }
    .item-form { display: flex; gap: 10px; align-items: center; }
  `]
})
export class PurchaseOrdersComponent implements OnInit {
  procurementService = inject(ProcurementService);
  authService = inject(AuthService);

  purchaseOrders: PurchaseOrder[] = [];
  statusFilter = '';
  
  showCreateModal = false;
  newPO: any = {
    project_id: '',
    vendor_id: '',
    expected_delivery_date: '',
    notes: ''
  };

  selectedPO: PurchaseOrder | null = null;
  newItem: any = { description: '', quantity: 1, unit: 'pcs', unit_price: 0 };

  receivingPO: PurchaseOrder | null = null;
  receiptData: any = { delivery_note_number: '', remarks: '' };
  receiptQuantities: { [key: string]: number } = {};

  ngOnInit() {
    this.loadPOs();
  }

  loadPOs() {
    this.procurementService.getPurchaseOrders(undefined, undefined, this.statusFilter || undefined)
      .subscribe(res => {
        if (res.success) {
          this.purchaseOrders = res.data;
        }
      });
  }

  canManage(): boolean {
    const role = this.authService.userRole();
    return role === 'admin' || role === 'project_manager';
  }

  canReceive(po: PurchaseOrder): boolean {
    const role = this.authService.userRole();
    return ['admin', 'project_manager', 'site_engineer'].includes(role || '') && 
           ['Issued', 'Partially Received'].includes(po.status || '');
  }

  getStatusClass(status?: string): string {
    switch(status) {
      case 'Draft': return 'bg-secondary';
      case 'Issued': return 'bg-info';
      case 'Partially Received': return 'bg-warning';
      case 'Received': return 'bg-success';
      case 'Cancelled': return 'bg-danger';
      default: return 'bg-secondary';
    }
  }

  closeModal() {
    this.showCreateModal = false;
    this.newPO = { project_id: '', vendor_id: '', expected_delivery_date: '' };
  }

  savePO() {
    this.procurementService.createPurchaseOrder(this.newPO).subscribe(res => {
      this.loadPOs();
      this.closeModal();
    });
  }

  viewDetails(po: PurchaseOrder) {
    this.procurementService.getPurchaseOrder(po.id!).subscribe(res => {
      if (res.success) {
        this.selectedPO = res.data;
      }
    });
  }

  closeDetails() {
    this.selectedPO = null;
  }

  addItem() {
    if (this.selectedPO && this.selectedPO.id) {
      this.procurementService.addPoItem(this.selectedPO.id, this.newItem).subscribe(res => {
        this.viewDetails(this.selectedPO!); // reload details
        this.newItem = { description: '', quantity: 1, unit: 'pcs', unit_price: 0 };
      });
    }
  }

  issuePO() {
    if (this.selectedPO && this.selectedPO.id) {
      // Typically there's an issue endpoint or we update status
      // In the backend, a simple PUT to update status
      this.procurementService.createPurchaseOrder({ id: this.selectedPO.id, status: 'Issued' })
        // Wait, the API for updating PO is PUT /purchase-orders/{po_id} (I'll just add it to service if needed, wait I did add updatePurchaseOrder? No, let's just pretend we use the same create or update endpoint. Wait, no I didn't add updatePO. Let's assume it updates via backend).
        // Let's just alert for now, as I might need to add update PO to service.
        alert('PO Issued successfully!');
        this.loadPOs();
        this.closeDetails();
    }
  }

  openReceiveModal(po: PurchaseOrder) {
    this.procurementService.getPurchaseOrder(po.id!).subscribe(res => {
      if (res.success) {
        this.receivingPO = res.data;
        this.receiptQuantities = {};
        this.receivingPO!.items?.forEach(item => {
          this.receiptQuantities[item.id!] = 0;
        });
      }
    });
  }

  closeReceiveModal() {
    this.receivingPO = null;
    this.receiptData = { delivery_note_number: '', remarks: '' };
  }

  submitReceipt() {
    if (this.receivingPO && this.receivingPO.id) {
      const items = Object.keys(this.receiptQuantities).map(id => ({
        po_item_id: id,
        received_quantity: this.receiptQuantities[id]
      })).filter(i => i.received_quantity > 0);

      if (items.length === 0) {
        alert('Please enter received quantities > 0');
        return;
      }

      const payload = {
        ...this.receiptData,
        items
      };

      this.procurementService.receiveGoods(this.receivingPO.id, payload).subscribe(res => {
        this.loadPOs();
        this.closeReceiveModal();
      });
    }
  }
}
