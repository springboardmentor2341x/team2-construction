import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcurementService } from '../../../services/procurement.service';

@Component({
  selector: 'app-procurement-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-container">
      <h2>Procurement Dashboard</h2>
      
      <div class="metrics-grid">
        <div class="metric-card bg-primary text-white">
          <div class="title">Total Vendors</div>
          <div class="value">{{ summary?.total_vendors || 0 }}</div>
        </div>
        <div class="metric-card bg-info text-white">
          <div class="title">Pending Requests</div>
          <div class="value">{{ summary?.pending_requests || 0 }}</div>
        </div>
        <div class="metric-card bg-success text-white">
          <div class="title">Active Purchase Orders</div>
          <div class="value">{{ summary?.active_pos || 0 }}</div>
        </div>
        <div class="metric-card bg-warning">
          <div class="title">Pending Invoices</div>
          <div class="value">{{ summary?.pending_invoices || 0 }}</div>
        </div>
        <div class="metric-card bg-danger text-white">
          <div class="title">Overdue Invoices</div>
          <div class="value">{{ summary?.overdue_invoices || 0 }}</div>
        </div>
        <div class="metric-card bg-secondary text-white">
          <div class="title">Total Procurement Value</div>
          <div class="value">\${{ summary?.total_procurement_value || 0 | number:'1.2-2' }}</div>
        </div>
      </div>

      <div class="tables-grid">
        <div class="card">
          <div class="card-header">Recent Procurement Requests</div>
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Project</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let req of summary?.recent_requests">
                  <td>{{ req.item_name }}</td>
                  <td>{{ req.project_name }}</td>
                  <td>{{ req.status }}</td>
                </tr>
                <tr *ngIf="!summary?.recent_requests?.length">
                  <td colspan="3" class="text-center">No recent requests</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="card">
          <div class="card-header">Recent Purchase Orders</div>
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th>Vendor</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let po of summary?.recent_pos">
                  <td>{{ po.vendor_name }}</td>
                  <td>\${{ po.total_amount | number:'1.2-2' }}</td>
                  <td>{{ po.status }}</td>
                </tr>
                <tr *ngIf="!summary?.recent_pos?.length">
                  <td colspan="3" class="text-center">No recent POs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container { padding: 20px; }
    .metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 20px; }
    .metric-card { padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .title { font-size: 14px; opacity: 0.9; margin-bottom: 10px; }
    .value { font-size: 24px; font-weight: bold; }
    .bg-primary { background: #007bff; }
    .bg-info { background: #17a2b8; }
    .bg-success { background: #28a745; }
    .bg-warning { background: #ffc107; color: #212529 !important; }
    .bg-danger { background: #dc3545; }
    .bg-secondary { background: #6c757d; }
    .text-white { color: white; }
    
    .tables-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    .card { border: 1px solid #ddd; border-radius: 8px; overflow: hidden; }
    .card-header { background: #f8f9fa; padding: 15px; font-weight: bold; border-bottom: 1px solid #ddd; }
    .card-body { padding: 0; }
    .table { width: 100%; border-collapse: collapse; margin: 0; }
    .table th, .table td { padding: 10px 15px; border-bottom: 1px solid #eee; text-align: left; font-size: 14px; }
    .table th { background: #fdfdfd; font-weight: 600; color: #555; }
    .text-center { text-align: center; color: #777; padding: 20px !important; }
  `]
})
export class ProcurementDashboardComponent implements OnInit {
  procurementService = inject(ProcurementService);
  summary: any = null;

  ngOnInit() {
    this.procurementService.getSummary().subscribe(res => {
      if (res.success) {
        this.summary = res.data;
      }
    });
  }
}
