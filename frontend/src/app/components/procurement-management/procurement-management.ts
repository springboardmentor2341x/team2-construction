import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { ProjectService, ProcurementRequest } from '../../services/project.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-procurement-management', standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './procurement-management.html', styleUrl: './procurement-management.css'
})
export class ProcurementManagementComponent implements OnInit {
  readonly projectService = inject(ProjectService);
  readonly auth = inject(AuthService);

  activeTab = signal('overview');
  loading = signal(false); message = signal(''); error = signal('');
  categories = signal<any[]>([]); vendors = signal<any[]>([]); orders = signal<any[]>([]); invoices = signal<any[]>([]); receipts = signal<any[]>([]);
  payments = signal<any[]>([]);
  selectedPaymentInvoice = signal<any | null>(null);
  selectedStatus = 'All'; searchText = '';

  requestForm: any = this.blankRequest();
  categoryForm: any = { id: '', name: '', description: '' };
  editingCategoryId = '';
  vendorForm: any = this.blankVendor();
  editingVendorId = '';
  poForm: any = this.blankPO();
  invoiceForm: any = this.blankInvoice();
  receiptForm: any = this.blankReceipt();
  paymentForm: any = this.blankPayment();

  readonly role = computed(() => String(this.auth.userRole() || '').trim().toLowerCase().replace(/[\s-]+/g, '_'));
  readonly isAdmin = computed(() => this.role() === 'admin');
  readonly isSiteEngineer = computed(() => this.role() === 'site_engineer');
  readonly isProjectManager = computed(() => this.role() === 'project_manager');

  readonly filteredRequests = computed(() => this.projectService.procurementRequests().filter(r => {
    const statusOk = this.selectedStatus === 'All' || r.status === this.selectedStatus;
    const q = this.searchText.trim().toLowerCase();
    const searchOk = !q || [r.id, r.itemName, r.projectName, r.requestedByName].join(' ').toLowerCase().includes(q);
    return statusOk && searchOk;
  }));
  readonly pendingCount = computed(() => this.projectService.procurementRequests().filter(r => r.status === 'Pending').length);
  readonly approvedRequests = computed(() => this.projectService.procurementRequests().filter(r => r.status === 'Approved'));

  ngOnInit(): void {
    // Site engineer lands directly on the actual request form, not a text-only workflow page.
    if (this.isSiteEngineer()) this.activeTab.set('requests');
    this.refreshAll();
  }

  blankRequest() { return { projectId:'', categoryId:'', itemName:'', quantity:1, unit:'Nos', requiredDate:'', purpose:'', priority:'Medium', remarks:'', materialId:'' }; }
  blankVendor() { return { id:'', name:'', contact_person:'', contact_number:'', email:'', address:'', category:'Raw Materials', products_services:'', status:'Active' }; }
  blankPO() { return { vendor_id:'', project_id:'', procurement_request_id:'', expected_delivery_date:'', tax_amount:0, additional_charges:0, notes:'', items:[this.newPOItem()] }; }
  newPOItem() { return { description:'', quantity:1, unit:'Nos', unit_price:0, tax_percent:0, material_id:'', resource_id:'' }; }
  blankInvoice() { return { invoice_number:'', vendor_id:'', purchase_order_id:'', project_id:'', invoice_date:new Date().toISOString().slice(0,10), due_date:'', invoice_amount:0, remarks:'' }; }
  blankReceipt() { return { purchase_order_id:'', project_id:'', received_date:new Date().toISOString().slice(0,10), delivery_note_number:'', remarks:'', items:[] as any[] }; }
  blankPayment() { return { amount:0, payment_date:new Date().toISOString().slice(0,10), payment_method:'Bank Transfer', reference_number:'', remarks:'' }; }

  setTab(tab: string): void { this.activeTab.set(tab); this.error.set(''); }
  private notify(text: string): void { this.message.set(text); setTimeout(() => this.message.set(''), 3500); }
  private fail(err: any, fallback: string): void { this.error.set(err?.error?.detail || err?.error?.message || err?.message || fallback); }

  refreshAll(): void {
    this.loading.set(true); this.error.set('');
    this.projectService.loadAllData();
    if (this.isSiteEngineer()) {
      forkJoin({ categories: this.projectService.getProcurementCategories(), requests: this.projectService.getProcurementRequests() }).subscribe({
        next: r => {
          this.categories.set(r.categories?.data || []);
          const data = (r.requests?.data || []).map((x:any) => this.projectService.mapProcurementRequestForModule7(x));
          this.projectService.setProcurementRequestsForModule7(data);
          this.loading.set(false);
        }, error: e => { this.loading.set(false); this.fail(e, 'Unable to load procurement requests'); }
      });
      return;
    }
    forkJoin({
      categories: this.projectService.getProcurementCategories(),
      vendors: this.projectService.getProcurementVendors(),
      orders: this.projectService.getPurchaseOrders(),
      invoices: this.projectService.getProcurementInvoices(),
      requests: this.projectService.getProcurementRequests(),
      summary: this.projectService.getProcurementSummary()
    }).subscribe({
      next: r => {
        this.categories.set(r.categories?.data || []); this.vendors.set(r.vendors?.data || []);
        this.orders.set(r.orders?.data || []); this.invoices.set(r.invoices?.data || []);
        const requests = (r.requests?.data || []).map((x:any) => this.projectService.mapProcurementRequestForModule7(x));
        this.projectService.setProcurementRequestsForModule7(requests);
        this.projectService.setProcurementSummary(r.summary?.data || null);
        this.loading.set(false);
      }, error: e => { this.loading.set(false); this.fail(e, 'Unable to load procurement data'); }
    });
  }

  onRequestMaterialChange(): void {
    const m = this.projectService.materials().find((x:any) => x.id === this.requestForm.materialId);
    if (m) {
      this.requestForm.itemName = m.name;
      this.requestForm.unit = m.unit;
    }
  }

  submitRequest(): void {
    const d = this.requestForm;
    if (!d.projectId || !d.categoryId || !d.itemName?.trim() || Number(d.quantity) <= 0 || !d.unit?.trim() || !d.requiredDate) {
      this.error.set('Project, category, item, quantity, unit and required date are required.'); return;
    }
    this.loading.set(true);
    this.projectService.createProcurementRequest(d).subscribe({
      next: () => { this.notify('Procurement request submitted successfully.'); this.requestForm = this.blankRequest(); this.refreshAll(); },
      error: e => { this.loading.set(false); this.fail(e, 'Request could not be submitted'); }
    });
  }

  approve(r: ProcurementRequest): void {
    if (!confirm(`Approve procurement request ${r.id} for ${r.itemName}?`)) return;
    this.projectService.approveProcurementRequest(r.id).subscribe({ next: () => { this.notify('Request approved. Create the Purchase Order from the approved request.'); this.refreshAll(); }, error: e => this.fail(e, 'Approval failed') });
  }
  reject(r: ProcurementRequest): void {
    const reason = prompt('Enter rejection reason:'); if (reason === null) return;
    if (!reason.trim()) { this.error.set('Rejection reason is required.'); return; }
    this.projectService.rejectProcurementRequest(r.id, reason.trim()).subscribe({ next: () => { this.notify('Request rejected.'); this.refreshAll(); }, error: e => this.fail(e, 'Rejection failed') });
  }

  saveCategory(): void {
    if (!this.categoryForm.id?.trim() || !this.categoryForm.name?.trim()) { this.error.set('Category ID and name are required.'); return; }
    const call = this.editingCategoryId ? this.projectService.updateProcurementCategory(this.editingCategoryId, { name:this.categoryForm.name, description:this.categoryForm.description || null }) : this.projectService.createProcurementCategory(this.categoryForm);
    call.subscribe({ next: () => { this.notify(this.editingCategoryId ? 'Category updated.' : 'Category created.'); this.categoryForm = {id:'',name:'',description:''}; this.editingCategoryId=''; this.refreshAll(); }, error: e => this.fail(e, 'Category save failed') });
  }
  editCategory(c: any): void { this.editingCategoryId=c.id; this.categoryForm={id:c.id,name:c.name,description:c.description||''}; }
  cancelCategoryEdit(): void { this.editingCategoryId=''; this.categoryForm={id:'',name:'',description:''}; }
  deleteCategory(c: any): void { if(confirm(`Delete category ${c.name}?`)) this.projectService.deleteProcurementCategory(c.id).subscribe({next:()=>{this.notify('Category deleted.');this.refreshAll();},error:e=>this.fail(e,'Cannot delete category because it may be in use.')}); }

  saveVendor(): void {
    if (!this.vendorForm.id?.trim() || !this.vendorForm.name?.trim() || !this.vendorForm.category?.trim()) { this.error.set('Vendor ID, name and category are required.'); return; }
    const payload={...this.vendorForm};
    const call = this.editingVendorId ? this.projectService.updateProcurementVendor(this.editingVendorId, {...payload, id:undefined}) : this.projectService.createProcurementVendor(payload);
    call.subscribe({ next: () => { this.notify(this.editingVendorId ? 'Vendor updated.' : 'Vendor created.'); this.vendorForm=this.blankVendor(); this.editingVendorId=''; this.refreshAll(); }, error: e => this.fail(e, 'Vendor save failed') });
  }
  editVendor(v:any): void { this.editingVendorId=v.id; this.vendorForm={...this.blankVendor(),...v}; }
  cancelVendorEdit(): void { this.editingVendorId=''; this.vendorForm=this.blankVendor(); }
  deleteVendor(v:any): void { if(confirm(`Delete vendor ${v.name}?`)) this.projectService.deleteProcurementVendor(v.id).subscribe({next:()=>{this.notify('Vendor deleted.');this.refreshAll();},error:e=>this.fail(e,'Cannot delete vendor because procurement records may exist.')}); }

  onRequestForPO(): void {
    const r = this.projectService.procurementRequests().find(x => x.id === this.poForm.procurement_request_id);
    if (!r) return;
    this.poForm.project_id = r.projectId;
    if (this.poForm.items.length === 1 && !this.poForm.items[0].description) {
      this.poForm.items[0] = { ...this.newPOItem(), description:r.itemName, quantity:r.quantity, unit:r.unit, material_id:r.materialId || '', resource_id:r.resourceId || '' };
    }
  }
  addPOItem(): void { this.poForm.items.push(this.newPOItem()); }
  removePOItem(index:number): void { if(this.poForm.items.length > 1) this.poForm.items.splice(index,1); }
  poSubtotal(): number { return this.poForm.items.reduce((s:number,i:any)=>s + Number(i.quantity||0)*Number(i.unit_price||0),0); }
  poTotal(): number { return this.poSubtotal()+Number(this.poForm.tax_amount||0)+Number(this.poForm.additional_charges||0); }
  createPO(): void {
    const d=this.poForm;
    if(!d.vendor_id || !d.project_id || !d.procurement_request_id || !d.expected_delivery_date || !d.items.length) { this.error.set('Vendor, project, approved request, delivery date and at least one item are required.'); return; }
    if(d.items.some((i:any)=>!i.description?.trim() || Number(i.quantity)<=0 || !i.unit?.trim() || Number(i.unit_price)<0)) { this.error.set('Every PO item needs description, positive quantity, unit and valid price.'); return; }
    const linkedRequest=this.projectService.procurementRequests().find((r:any)=>r.id===d.procurement_request_id);
    if(linkedRequest?.materialId && d.items.some((i:any)=>!i.material_id || i.material_id!==linkedRequest.materialId)) { this.error.set('This request is linked to Material Inventory. Select the same material in the PO item so stock updates after receipt.'); return; }
    const payload={...d, tax_amount:Number(d.tax_amount||0), additional_charges:Number(d.additional_charges||0),
      items:d.items.map((i:any)=>({...i,quantity:Number(i.quantity),unit_price:Number(i.unit_price),tax_percent:Number(i.tax_percent||0),material_id:i.material_id||null,resource_id:i.resource_id||null}))};
    this.projectService.createPurchaseOrder(payload).subscribe({next:()=>{this.notify('Purchase Order created successfully. Request is now Processing.');this.poForm=this.blankPO();this.refreshAll();},error:e=>this.fail(e,'Purchase order failed')});
  }
  advancePO(po:any): void {
    const next:any={Issued:'Confirmed',Confirmed:'Processing'};
    if(!next[po.status]) return;
    this.projectService.updatePurchaseOrder(po.id,{status:next[po.status]}).subscribe({next:()=>{this.notify(`PO moved to ${next[po.status]}.`);this.refreshAll();},error:e=>this.fail(e,'Unable to update PO')});
  }

  selectPOForReceipt(po:any): void {
    if (!po) return;
    this.receiptForm={...this.blankReceipt(),purchase_order_id:po.id,project_id:po.project_id,
      items:(po.items||[]).map((i:any)=>({po_item_id:i.id,material_id:i.material_id||null,description:i.description,ordered_quantity:Number(i.quantity||0),remaining_quantity:Math.max(0,Number(i.quantity||0)-Number(i.received_quantity||0)),received_quantity:Math.max(0,Number(i.quantity||0)-Number(i.received_quantity||0)),unit:i.unit}))};
    this.loadReceipts(po.id); this.setTab('receipts');
  }
  loadReceipts(poId:string): void { this.projectService.getGoodsReceipts(poId).subscribe({next:r=>this.receipts.set(r?.data||[]),error:e=>this.fail(e,'Unable to load goods receipts')}); }
  receiveGoods(): void {
    const d=this.receiptForm;
    if(!d.purchase_order_id || !d.project_id || !d.items?.length) { this.error.set('Select a purchase order with items.'); return; }
    if(d.items.some((i:any)=>Number(i.received_quantity)<0 || Number(i.received_quantity)>Number(i.remaining_quantity))) { this.error.set('Received quantity cannot exceed the remaining quantity.'); return; }
    if(!d.items.some((i:any)=>Number(i.received_quantity)>0)) { this.error.set('Enter received quantity for at least one item.'); return; }
    const payload={...d,items:d.items.map((i:any)=>({po_item_id:i.po_item_id,material_id:i.material_id||null,description:i.description,ordered_quantity:Number(i.ordered_quantity),received_quantity:Number(i.received_quantity),unit:i.unit}))};
    this.projectService.receiveGoods(payload).subscribe({next:()=>{this.notify('Goods receipt saved. Material Inventory stock was updated.');this.receiptForm=this.blankReceipt();this.receipts.set([]);this.projectService.loadAllData();this.refreshAll();},error:e=>this.fail(e,'Goods receipt failed')});
  }

  selectPOForInvoice(po:any): void {
    if (!po || !['Partially Received','Received'].includes(po.status)) { this.error.set('Invoice can be created only after goods have been received.'); return; }
    this.invoiceForm={...this.blankInvoice(),purchase_order_id:po.id,vendor_id:po.vendor_id||'',project_id:po.project_id||'',invoice_amount:Number(po.total_amount||0)}; this.setTab('invoices');
  }
  onInvoicePOChange(): void { const po=this.orders().find(p=>p.id===this.invoiceForm.purchase_order_id); if(po){this.invoiceForm.vendor_id=po.vendor_id||'';this.invoiceForm.project_id=po.project_id||'';this.invoiceForm.invoice_amount=Number(po.total_amount||0);} }
  createInvoice(): void {
    const d=this.invoiceForm;
    if(!d.invoice_number?.trim()||!d.purchase_order_id||!d.vendor_id||!d.project_id||!d.invoice_date||Number(d.invoice_amount)<=0){this.error.set('Invoice number, PO, vendor, project, invoice date and positive amount are required.');return;}
    this.projectService.createProcurementInvoice({...d,invoice_amount:Number(d.invoice_amount)}).subscribe({next:()=>{this.notify('Invoice created successfully.');this.invoiceForm=this.blankInvoice();this.refreshAll();},error:e=>this.fail(e,'Invoice creation failed')});
  }
  openPayment(inv:any): void {
    if (inv.invoice_status !== 'Verified') { this.error.set('Verify the invoice before recording payment.'); return; }
    this.selectedPaymentInvoice.set(inv);
    const remaining = Math.max(0, Number(inv.invoice_amount||0) - Number(inv.paid_amount||0));
    this.paymentForm = { ...this.blankPayment(), amount: remaining };
    this.loadPaymentHistory(inv.id);
    this.setTab('payments');
  }

  loadPaymentHistory(invoiceId:string): void {
    this.projectService.getInvoicePayments(invoiceId).subscribe({
      next: r => this.payments.set(r?.data || []),
      error: e => this.fail(e, 'Unable to load payment history')
    });
  }

  paymentRemaining(inv:any): number { return Math.max(0, Number(inv?.invoice_amount||0) - Number(inv?.paid_amount||0)); }

  selectPaymentInvoiceById(id:string): void {
    const inv = this.invoices().find(x => x.id === id);
    if (inv) this.openPayment(inv);
    else { this.selectedPaymentInvoice.set(null); this.payments.set([]); }
  }

  selectPaymentInvoice(): void {
    const inv = this.invoices().find(x => x.id === this.selectedPaymentInvoice()?.id);
    if (inv) this.openPayment(inv);
  }

  recordPayment(): void {
    const inv = this.selectedPaymentInvoice();
    if (!inv) { this.error.set('Select an invoice first.'); return; }
    const d = this.paymentForm;
    const remaining = Number(inv.invoice_amount||0) - Number(inv.paid_amount||0);
    if (Number(d.amount) <= 0 || Number(d.amount) > remaining) { this.error.set(`Payment amount must be greater than 0 and cannot exceed remaining balance ₹${remaining}.`); return; }
    if (!d.payment_date || !d.payment_method) { this.error.set('Payment date and payment method are required.'); return; }
    this.projectService.recordInvoicePayment(inv.id, { ...d, amount:Number(d.amount) }).subscribe({
      next: (res:any) => {
        if (res?.invoice) this.selectedPaymentInvoice.set(res.invoice);
        this.notify('Payment recorded successfully. Invoice balance and status updated.');
        this.paymentForm = this.blankPayment();
        this.loadPaymentHistory(inv.id);
        this.refreshAll();
      }, error: e => this.fail(e, 'Payment could not be recorded')
    });
  }

  verifyInvoice(inv:any): void { if(inv.invoice_status==='Received') this.projectService.updateProcurementInvoice(inv.id,{invoice_status:'Verified'}).subscribe({next:()=>{this.notify('Invoice verified.');this.refreshAll();},error:e=>this.fail(e,'Invoice verification failed')}); }
}
