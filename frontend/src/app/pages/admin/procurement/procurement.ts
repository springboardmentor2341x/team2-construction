import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  ProjectService,
  ProcurementCategory,
  ProcurementRequest,
  ProcurementVendor
} from '../../../services/project.service';

@Component({
  selector: 'app-procurement',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './procurement.html',
  styleUrl: './procurement.css'
})
export class ProcurementComponent implements OnInit {

  private projectService = inject(ProjectService);

  activeTab = 'dashboard';

  loading = false;
  errorMessage = '';
  successMessage = '';

  categories: ProcurementCategory[] = [];
  vendors: ProcurementVendor[] = [];
  requests: ProcurementRequest[] = [];

  purchaseOrders: any[] = [];
  invoices: any[] = [];
  payments: any[] = [];

  showCategoryForm = false;
  showVendorForm = false;
  showOrderForm = false;
  showInvoiceForm = false;

  newCategory = {
    name: '',
    description: ''
  };

  newVendor = {
    name: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    status: 'Active'
  };

  newOrder: any = {
    vendor_id: '',
    request_id: '',
    order_date: this.today(),
    expected_delivery_date: '',
    remarks: '',
    items: []
  };

  newInvoice: any = {
    vendor_id: '',
    purchase_order_id: '',
    invoice_number: '',
    invoice_date: this.today(),
    due_date: '',
    total_amount: 0,
    remarks: ''
  };

  paymentForm: any = {
    invoiceId: '',
    amount: 0,
    payment_date: this.today(),
    payment_method: 'Bank Transfer',
    reference_number: '',
    remarks: ''
  };

  receiveForm: any = {
    purchase_order_id: '',
    received_date: this.today(),
    remarks: '',
    items: []
  };

  selectedOrder: any = null;
  showReceiveForm = false;

  ngOnInit(): void {
    this.refreshAll();
  }

  today(): string {
    return new Date().toISOString().split('T')[0];
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
    this.clearMessages();

    if (tab === 'dashboard') {
      this.refreshAll();
    }

    if (tab === 'orders') {
      this.loadPurchaseOrders();
    }

    if (tab === 'invoices') {
      this.loadInvoices();
    }
  }

  refreshAll(): void {
    this.loading = true;

    this.projectService.refreshProcurementData();

    this.categories = this.projectService.procurementCategories();
    this.vendors = this.projectService.procurementVendors();
    this.requests = this.projectService.procurementRequests();

    this.loadPurchaseOrders(false);
    this.loadInvoices(false);

    setTimeout(() => {
      this.categories = this.projectService.procurementCategories();
      this.vendors = this.projectService.procurementVendors();
      this.requests = this.projectService.procurementRequests();
      this.loading = false;
    }, 500);
  }

  refreshSignals(): void {
    this.categories = this.projectService.procurementCategories();
    this.vendors = this.projectService.procurementVendors();
    this.requests = this.projectService.procurementRequests();
  }

  clearMessages(): void {
    this.errorMessage = '';
    this.successMessage = '';
  }

  showSuccess(message: string): void {
    this.successMessage = message;
    this.errorMessage = '';

    setTimeout(() => {
      this.successMessage = '';
    }, 4000);
  }

  showError(error: any, fallback: string): void {
    console.error(error);

    this.errorMessage =
      error?.error?.detail ||
      error?.error?.message ||
      error?.message ||
      fallback;

    this.successMessage = '';
  }

  // =====================================================
  // DASHBOARD
  // =====================================================

  get totalCategories(): number {
    return this.categories.length;
  }

  get totalVendors(): number {
    return this.vendors.length;
  }

  get totalRequests(): number {
    return this.requests.length;
  }

  get totalOrders(): number {
    return this.purchaseOrders.length;
  }

  get pendingRequests(): number {
    return this.requests.filter(
      request => request.status === 'Pending'
    ).length;
  }

  get totalInvoices(): number {
    return this.invoices.length;
  }

  // =====================================================
  // CATEGORY
  // =====================================================

  createCategory(): void {
    if (!this.newCategory.name.trim()) {
      this.showError(null, 'Category name is required.');
      return;
    }

    this.loading = true;

    this.projectService
      .createProcurementCategory({
        name: this.newCategory.name.trim(),
        description: this.newCategory.description.trim() || null
      })
      .subscribe({
        next: () => {
          this.newCategory = {
            name: '',
            description: ''
          };

          this.showCategoryForm = false;
          this.loading = false;

          this.projectService.refreshProcurementData();

          setTimeout(() => {
            this.refreshSignals();
          }, 300);

          this.showSuccess('Category created successfully.');
        },
        error: (error) => {
          this.loading = false;
          this.showError(error, 'Unable to create category.');
        }
      });
  }

  deleteCategory(category: ProcurementCategory): void {
    if (!confirm(`Delete "${category.name}"?`)) {
      return;
    }

    this.loading = true;

    this.projectService
      .deleteProcurementCategory(category.id)
      .subscribe({
        next: () => {
          this.loading = false;
          this.projectService.refreshProcurementData();

          setTimeout(() => {
            this.refreshSignals();
          }, 300);

          this.showSuccess('Category deleted successfully.');
        },
        error: (error) => {
          this.loading = false;
          this.showError(error, 'Unable to delete category.');
        }
      });
  }

  // =====================================================
  // VENDOR
  // =====================================================

  createVendor(): void {
    if (!this.newVendor.name.trim()) {
      this.showError(null, 'Vendor name is required.');
      return;
    }

    this.loading = true;

    this.projectService
      .createProcurementVendor({
        name: this.newVendor.name.trim(),
        contact_person: this.newVendor.contactPerson.trim() || null,
        email: this.newVendor.email.trim() || null,
        phone: this.newVendor.phone.trim() || null,
        address: this.newVendor.address.trim() || null,
        status: this.newVendor.status
      })
      .subscribe({
        next: () => {
          this.newVendor = {
            name: '',
            contactPerson: '',
            email: '',
            phone: '',
            address: '',
            status: 'Active'
          };

          this.showVendorForm = false;
          this.loading = false;

          this.projectService.refreshProcurementData();

          setTimeout(() => {
            this.refreshSignals();
          }, 300);

          this.showSuccess('Vendor created successfully.');
        },
        error: (error) => {
          this.loading = false;
          this.showError(error, 'Unable to create vendor.');
        }
      });
  }

  deleteVendor(vendor: ProcurementVendor): void {
    if (!confirm(`Delete vendor "${vendor.name}"?`)) {
      return;
    }

    this.loading = true;

    this.projectService
      .deleteProcurementVendor(vendor.id)
      .subscribe({
        next: () => {
          this.loading = false;

          this.projectService.refreshProcurementData();

          setTimeout(() => {
            this.refreshSignals();
          }, 300);

          this.showSuccess('Vendor deleted successfully.');
        },
        error: (error) => {
          this.loading = false;
          this.showError(error, 'Unable to delete vendor.');
        }
      });
  }

  // =====================================================
  // REQUEST APPROVAL
  // =====================================================

  approveRequest(request: ProcurementRequest): void {
    if (!confirm(`Approve request for "${request.itemName}"?`)) {
      return;
    }

    this.loading = true;

    this.projectService
      .approveProcurementRequest(request.id)
      .subscribe({
        next: () => {
          this.loading = false;

          this.projectService.refreshProcurementData();

          setTimeout(() => {
            this.refreshSignals();
          }, 300);

          this.showSuccess('Procurement request approved.');
        },
        error: (error) => {
          this.loading = false;
          this.showError(error, 'Unable to approve request.');
        }
      });
  }

  rejectRequest(request: ProcurementRequest): void {
    const reason = prompt(
      `Enter rejection reason for "${request.itemName}":`
    );

    if (reason === null) {
      return;
    }

    if (!reason.trim()) {
      this.showError(null, 'Rejection reason is required.');
      return;
    }

    this.loading = true;

    this.projectService
      .rejectProcurementRequest(request.id, reason.trim())
      .subscribe({
        next: () => {
          this.loading = false;

          this.projectService.refreshProcurementData();

          setTimeout(() => {
            this.refreshSignals();
          }, 300);

          this.showSuccess('Procurement request rejected.');
        },
        error: (error) => {
          this.loading = false;
          this.showError(error, 'Unable to reject request.');
        }
      });
  }

  // =====================================================
  // PURCHASE ORDERS
  // =====================================================

  loadPurchaseOrders(showLoader = true): void {
    if (showLoader) {
      this.loading = true;
    }

    this.projectService.getPurchaseOrders().subscribe({
      next: (response: any) => {
        this.purchaseOrders =
          response?.data ||
          response ||
          [];

        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.showError(error, 'Unable to load purchase orders.');
      }
    });
  }

  createPurchaseOrder(): void {
    if (!this.newOrder.vendor_id) {
      this.showError(null, 'Please select a vendor.');
      return;
    }

    if (!this.newOrder.request_id) {
      this.showError(null, 'Please select an approved request.');
      return;
    }

    this.loading = true;

    this.projectService
      .createPurchaseOrder(this.newOrder)
      .subscribe({
        next: () => {
          this.loading = false;
          this.showOrderForm = false;

          this.newOrder = {
            vendor_id: '',
            request_id: '',
            order_date: this.today(),
            expected_delivery_date: '',
            remarks: '',
            items: []
          };

          this.loadPurchaseOrders(false);
          this.projectService.refreshProcurementData();

          this.showSuccess('Purchase order created successfully.');
        },
        error: (error) => {
          this.loading = false;
          this.showError(error, 'Unable to create purchase order.');
        }
      });
  }

  approvedRequests(): ProcurementRequest[] {
    return this.requests.filter(
      request =>
        request.status === 'Approved' ||
        request.status === 'Processing'
    );
  }

  // =====================================================
  // GOODS RECEIPT + INVENTORY UPDATE
  // =====================================================

  openReceiveGoods(order: any): void {
    this.selectedOrder = order;

    const orderItems =
      order.items ||
      order.purchase_order_items ||
      [];

    this.receiveForm = {
      purchase_order_id: order.id,
      received_date: this.today(),
      remarks: '',
      items: orderItems.map((item: any) => ({
        material_id:
          item.material_id ||
          item.materialId ||
          item.material?.id ||
          null,

        purchase_order_item_id:
          item.id ||
          item.purchase_order_item_id ||
          null,

        item_name:
          item.item_name ||
          item.itemName ||
          item.material?.name ||
          '',

        quantity:
          Number(
            item.quantity ||
            item.ordered_quantity ||
            item.orderedQuantity ||
            0
          ),

        received_quantity: Number(
          item.pending_quantity ||
          item.quantity ||
          item.ordered_quantity ||
          item.orderedQuantity ||
          0
        ),

        unit:
          item.unit ||
          item.material?.unit ||
          ''
      }))
    };

    this.showReceiveForm = true;
  }

  receiveGoods(): void {
    if (!this.receiveForm.purchase_order_id) {
      this.showError(null, 'Purchase order is required.');
      return;
    }

    const validItems = this.receiveForm.items.filter(
      (item: any) =>
        Number(item.received_quantity) > 0
    );

    if (!validItems.length) {
      this.showError(
        null,
        'Enter at least one received quantity.'
      );
      return;
    }

    for (const item of validItems) {
      if (
        Number(item.received_quantity) >
        Number(item.quantity)
      ) {
        this.showError(
          null,
          `Received quantity cannot exceed ordered quantity for ${item.item_name}.`
        );
        return;
      }
    }

    const payload = {
      purchase_order_id:
        this.receiveForm.purchase_order_id,

      received_date:
        this.receiveForm.received_date,

      remarks:
        this.receiveForm.remarks || null,

      items: validItems.map((item: any) => ({
        material_id: item.material_id,
        purchase_order_item_id:
          item.purchase_order_item_id,

        quantity:
          Number(item.received_quantity),

        received_quantity:
          Number(item.received_quantity),

        unit: item.unit
      }))
    };

    this.loading = true;

    this.projectService
      .receiveGoods(payload)
      .subscribe({
        next: () => {
          this.loading = false;
          this.showReceiveForm = false;
          this.selectedOrder = null;

          this.loadPurchaseOrders(false);

          this.showSuccess(
            'Goods received successfully. Inventory has been refreshed.'
          );
        },
        error: (error) => {
          this.loading = false;
          this.showError(
            error,
            'Unable to receive goods and update inventory.'
          );
        }
      });
  }

  // =====================================================
  // INVOICES
  // =====================================================

  loadInvoices(showLoader = true): void {
    if (showLoader) {
      this.loading = true;
    }

    this.projectService
      .getProcurementInvoices()
      .subscribe({
        next: (response: any) => {
          this.invoices =
            response?.data ||
            response ||
            [];

          this.loading = false;
          this.loadAllPaymentHistory();
        },
        error: (error) => {
          this.loading = false;
          this.showError(error, 'Unable to load invoices.');
        }
      });
  }

  createInvoice(): void {
    if (!this.newInvoice.vendor_id) {
      this.showError(null, 'Please select a vendor.');
      return;
    }

    if (
      !this.newInvoice.invoice_number.trim()
    ) {
      this.showError(null, 'Invoice number is required.');
      return;
    }

    if (
      !this.newInvoice.total_amount ||
      Number(this.newInvoice.total_amount) <= 0
    ) {
      this.showError(
        null,
        'Invoice amount must be greater than zero.'
      );
      return;
    }

    this.loading = true;

    this.projectService
      .createProcurementInvoice({
        ...this.newInvoice,
        total_amount:
          Number(this.newInvoice.total_amount)
      })
      .subscribe({
        next: () => {
          this.loading = false;
          this.showInvoiceForm = false;

          this.newInvoice = {
            vendor_id: '',
            purchase_order_id: '',
            invoice_number: '',
            invoice_date: this.today(),
            due_date: '',
            total_amount: 0,
            remarks: ''
          };

          this.loadInvoices(false);

          this.showSuccess(
            'Invoice created successfully.'
          );
        },
        error: (error) => {
          this.loading = false;
          this.showError(error, 'Unable to create invoice.');
        }
      });
  }

  invoiceNumber(invoice: any): string {
    return (
      invoice.invoice_number ||
      invoice.invoiceNumber ||
      invoice.number ||
      invoice.id
    );
  }

  invoiceVendor(invoice: any): string {
    return (
      invoice.vendor?.name ||
      invoice.vendor_name ||
      invoice.vendorName ||
      this.vendorNameById(
        invoice.vendor_id || invoice.vendorId
      ) ||
      '-'
    );
  }

  invoiceTotal(invoice: any): number {
    return Number(
      invoice.total_amount ??
      invoice.totalAmount ??
      invoice.amount ??
      0
    );
  }

  invoicePaid(invoice: any): number {
    return Number(
      invoice.paid_amount ??
      invoice.paidAmount ??
      0
    );
  }

  invoiceRemaining(invoice: any): number {
    const backendRemaining =
      invoice.remaining_amount ??
      invoice.remainingAmount;

    if (backendRemaining !== undefined) {
      return Math.max(
        0,
        Number(backendRemaining)
      );
    }

    return Math.max(
      0,
      this.invoiceTotal(invoice) -
      this.invoicePaid(invoice)
    );
  }

  invoiceStatus(invoice: any): string {
    return (
      invoice.payment_status ||
      invoice.paymentStatus ||
      invoice.status ||
      (this.invoiceRemaining(invoice) <= 0
        ? 'Paid'
        : this.invoicePaid(invoice) > 0
          ? 'Partially Paid'
          : 'Pending')
    );
  }

  vendorNameById(id: string): string {
    return this.vendors.find(
      vendor => vendor.id === id
    )?.name || '';
  }

  // =====================================================
  // PAYMENTS
  // =====================================================

  selectInvoiceForPayment(invoice: any): void {
    const remaining =
      this.invoiceRemaining(invoice);

    if (remaining <= 0) {
      this.showError(
        null,
        'This invoice is already fully paid.'
      );
      return;
    }

    this.paymentForm = {
      invoiceId: invoice.id,
      amount: remaining,
      payment_date: this.today(),
      payment_method: 'Bank Transfer',
      reference_number: '',
      remarks: ''
    };
  }

  recordPayment(): void {
    if (!this.paymentForm.invoiceId) {
      this.showError(
        null,
        'Please select an invoice first.'
      );
      return;
    }

    const invoice = this.invoices.find(
      item =>
        item.id ===
        this.paymentForm.invoiceId
    );

    if (!invoice) {
      this.showError(
        null,
        'Selected invoice was not found.'
      );
      return;
    }

    const amount =
      Number(this.paymentForm.amount);

    const remaining =
      this.invoiceRemaining(invoice);

    if (!amount || amount <= 0) {
      this.showError(
        null,
        'Payment amount must be greater than zero.'
      );
      return;
    }

    if (amount > remaining) {
      this.showError(
        null,
        `Overpayment is not allowed. Remaining amount is ${this.formatCurrency(remaining)}.`
      );
      return;
    }

    this.loading = true;

    this.projectService
      .recordInvoicePayment(
        this.paymentForm.invoiceId,
        {
          amount,
          payment_date:
            this.paymentForm.payment_date,
          payment_method:
            this.paymentForm.payment_method,
          reference_number:
            this.paymentForm.reference_number ||
            null,
          remarks:
            this.paymentForm.remarks ||
            null
        }
      )
      .subscribe({
        next: () => {
          this.loading = false;

          this.paymentForm = {
            invoiceId: '',
            amount: 0,
            payment_date: this.today(),
            payment_method:
              'Bank Transfer',
            reference_number: '',
            remarks: ''
          };

          this.loadInvoices(false);
          this.projectService.refreshProcurementData();

          this.showSuccess(
            'Payment recorded successfully. Invoice status has been refreshed.'
          );
        },
        error: (error) => {
          this.loading = false;
          this.showError(
            error,
            'Unable to record payment.'
          );
        }
      });
  }

  loadAllPaymentHistory(): void {
    this.payments = [];

    this.invoices.forEach(
      (invoice: any) => {
        if (!invoice?.id) {
          return;
        }

        this.projectService
          .getInvoicePayments(invoice.id)
          .subscribe({
            next: (response: any) => {
              const invoicePayments =
                response?.data ||
                response ||
                [];

              if (Array.isArray(invoicePayments)) {
                this.payments.push(
                  ...invoicePayments.map(
                    (payment: any) => ({
                      ...payment,
                      invoiceNumber:
                        this.invoiceNumber(invoice)
                    })
                  )
                );
              }
            },
            error: () => {}
          });
      }
    );
  }

  paymentAmount(payment: any): number {
    return Number(
      payment.amount ??
      payment.payment_amount ??
      0
    );
  }

  paymentDate(payment: any): string {
    return (
      payment.payment_date ||
      payment.paymentDate ||
      payment.created_at ||
      '-'
    );
  }

  paymentMethod(payment: any): string {
    return (
      payment.payment_method ||
      payment.paymentMethod ||
      '-'
    );
  }

  paymentReference(payment: any): string {
    return (
      payment.reference_number ||
      payment.referenceNumber ||
      '-'
    );
  }

  // =====================================================
  // HELPERS
  // =====================================================

  formatCurrency(value: number): string {
    return Number(value || 0).toLocaleString(
      'en-IN',
      {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 2
      }
    );
  }
}