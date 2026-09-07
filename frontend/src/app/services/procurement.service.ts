import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Vendor {
  id?: string;
  name: string;
  contact_person?: string;
  contact_number?: string;
  email?: string;
  address?: string;
  category?: string;
  products_services?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
  total_orders?: number;
  total_value?: number;
}

export interface ProcurementRequest {
  id?: string;
  project_id: string;
  project_name?: string;
  requested_by_id?: string;
  requested_by_name?: string;
  approved_by_name?: string;
  category_id?: string;
  category_name?: string;
  item_name: string;
  quantity: number;
  unit: string;
  required_date: string;
  purpose?: string;
  priority?: string;
  status?: string;
  remarks?: string;
  rejection_reason?: string;
  material_id?: string;
  resource_id?: string;
  created_at?: string;
}

export interface PurchaseOrder {
  id?: string;
  vendor_id: string;
  vendor_name?: string;
  project_id: string;
  project_name?: string;
  procurement_request_id?: string;
  created_by_name?: string;
  order_date?: string;
  expected_delivery_date: string;
  actual_delivery_date?: string;
  subtotal?: number;
  tax_amount?: number;
  additional_charges?: number;
  total_amount?: number;
  status?: string;
  notes?: string;
  items?: PurchaseOrderItem[];
  created_at?: string;
}

export interface PurchaseOrderItem {
  id?: string;
  purchase_order_id?: string;
  material_id?: string;
  resource_id?: string;
  description: string;
  quantity: number;
  unit: string;
  unit_price: number;
  tax_percent?: number;
  line_total?: number;
  received_quantity?: number;
}

export interface Invoice {
  id?: string;
  invoice_number: string;
  vendor_id: string;
  vendor_name?: string;
  purchase_order_id: string;
  project_id: string;
  project_name?: string;
  invoice_date: string;
  due_date?: string;
  invoice_amount: number;
  paid_amount?: number;
  payment_status?: string;
  invoice_status?: string;
  remarks?: string;
  is_overdue?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProcurementService {
  private apiUrl = 'http://localhost:8000/api/v1';

  constructor(private http: HttpClient) { }

  // Vendors
  getVendors(category?: string, status?: string, search?: string, skip = 0, limit = 50): Observable<any> {
    let params = new HttpParams().set('skip', skip).set('limit', limit);
    if (category) params = params.set('category', category);
    if (status) params = params.set('status', status);
    if (search) params = params.set('search', search);
    return this.http.get(`${this.apiUrl}/vendors`, { params });
  }

  getVendor(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/vendors/${id}`);
  }

  createVendor(vendor: Vendor): Observable<any> {
    return this.http.post(`${this.apiUrl}/vendors`, vendor);
  }

  updateVendor(id: string, vendor: Vendor): Observable<any> {
    return this.http.put(`${this.apiUrl}/vendors/${id}`, vendor);
  }

  deleteVendor(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/vendors/${id}`);
  }

  // Procurement Requests
  getRequests(projectId?: string, status?: string, skip = 0, limit = 50): Observable<any> {
    let params = new HttpParams().set('skip', skip).set('limit', limit);
    if (projectId) params = params.set('project_id', projectId);
    if (status) params = params.set('status', status);
    return this.http.get(`${this.apiUrl}/procurement/requests`, { params });
  }

  createRequest(request: ProcurementRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/procurement/requests`, request);
  }

  approveRequest(id: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/procurement/requests/${id}/approve`, {});
  }

  rejectRequest(id: string, reason: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/procurement/requests/${id}/reject`, { rejection_reason: reason });
  }

  // Inventory check
  checkInventory(materialId: string, requiredQuantity: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/procurement/inventory-check`, { material_id: materialId, required_quantity: requiredQuantity });
  }

  // Purchase Orders
  getPurchaseOrders(projectId?: string, vendorId?: string, status?: string, skip = 0, limit = 50): Observable<any> {
    let params = new HttpParams().set('skip', skip).set('limit', limit);
    if (projectId) params = params.set('project_id', projectId);
    if (vendorId) params = params.set('vendor_id', vendorId);
    if (status) params = params.set('status', status);
    return this.http.get(`${this.apiUrl}/purchase-orders`, { params });
  }

  getPurchaseOrder(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/purchase-orders/${id}`);
  }

  createPurchaseOrder(po: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/purchase-orders`, po);
  }

  addPoItem(poId: string, item: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/purchase-orders/${poId}/items`, item);
  }

  receiveGoods(poId: string, receiptData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/purchase-orders/${poId}/receive`, receiptData);
  }

  // Invoices
  getInvoices(projectId?: string, vendorId?: string, status?: string, skip = 0, limit = 50): Observable<any> {
    let params = new HttpParams().set('skip', skip).set('limit', limit);
    if (projectId) params = params.set('project_id', projectId);
    if (vendorId) params = params.set('vendor_id', vendorId);
    if (status) params = params.set('payment_status', status);
    return this.http.get(`${this.apiUrl}/invoices`, { params });
  }

  createInvoice(invoice: Invoice): Observable<any> {
    return this.http.post(`${this.apiUrl}/invoices`, invoice);
  }

  updateInvoice(id: string, updateData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/invoices/${id}`, updateData);
  }

  // Analytics
  getSummary(): Observable<any> {
    return this.http.get(`${this.apiUrl}/procurement/summary`);
  }
}
