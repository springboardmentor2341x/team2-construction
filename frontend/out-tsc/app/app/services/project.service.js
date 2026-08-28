import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import * as i0 from "@angular/core";
// ==========================================
// PROJECT SERVICE
// ==========================================
export class ProjectService {
    http = inject(HttpClient);
    // ==========================================
    // MAIN SIGNALS
    // ==========================================
    projectsSignal = signal([], ...(ngDevMode ? [{ debugName: "projectsSignal" }] : /* istanbul ignore next */ []));
    workPackagesSignal = signal([], ...(ngDevMode ? [{ debugName: "workPackagesSignal" }] : /* istanbul ignore next */ []));
    materialsSignal = signal([], ...(ngDevMode ? [{ debugName: "materialsSignal" }] : /* istanbul ignore next */ []));
    materialRequestsSignal = signal([], ...(ngDevMode ? [{ debugName: "materialRequestsSignal" }] : /* istanbul ignore next */ []));
    workforceSignal = signal([], ...(ngDevMode ? [{ debugName: "workforceSignal" }] : /* istanbul ignore next */ []));
    contractorsSignal = signal([], ...(ngDevMode ? [{ debugName: "contractorsSignal" }] : /* istanbul ignore next */ []));
    dailyLogsSignal = signal([], ...(ngDevMode ? [{ debugName: "dailyLogsSignal" }] : /* istanbul ignore next */ []));
    sitePhotosSignal = signal([], ...(ngDevMode ? [{ debugName: "sitePhotosSignal" }] : /* istanbul ignore next */ []));
    issuesSignal = signal([], ...(ngDevMode ? [{ debugName: "issuesSignal" }] : /* istanbul ignore next */ []));
    payslipsSignal = signal([], ...(ngDevMode ? [{ debugName: "payslipsSignal" }] : /* istanbul ignore next */ []));
    feedbackSignal = signal([], ...(ngDevMode ? [{ debugName: "feedbackSignal" }] : /* istanbul ignore next */ []));
    documentsSignal = signal([], ...(ngDevMode ? [{ debugName: "documentsSignal" }] : /* istanbul ignore next */ []));
    // Module 3
    dailyProgressReportsSignal = signal([], ...(ngDevMode ? [{ debugName: "dailyProgressReportsSignal" }] : /* istanbul ignore next */ []));
    milestonesSignal = signal([], ...(ngDevMode ? [{ debugName: "milestonesSignal" }] : /* istanbul ignore next */ []));
    delaysSignal = signal([], ...(ngDevMode ? [{ debugName: "delaysSignal" }] : /* istanbul ignore next */ []));
    activityLogsSignal = signal([], ...(ngDevMode ? [{ debugName: "activityLogsSignal" }] : /* istanbul ignore next */ []));
    weeklySummarySignal = signal(null, ...(ngDevMode ? [{ debugName: "weeklySummarySignal" }] : /* istanbul ignore next */ []));
    // Module 4
    resourcesSignal = signal([], ...(ngDevMode ? [{ debugName: "resourcesSignal" }] : /* istanbul ignore next */ []));
    resourceCategoriesSignal = signal([], ...(ngDevMode ? [{ debugName: "resourceCategoriesSignal" }] : /* istanbul ignore next */ []));
    resourceAllocationsSignal = signal([], ...(ngDevMode ? [{ debugName: "resourceAllocationsSignal" }] : /* istanbul ignore next */ []));
    resourceUtilizationsSignal = signal([], ...(ngDevMode ? [{ debugName: "resourceUtilizationsSignal" }] : /* istanbul ignore next */ []));
    maintenanceRecordsSignal = signal([], ...(ngDevMode ? [{ debugName: "maintenanceRecordsSignal" }] : /* istanbul ignore next */ []));
    resourceSummarySignal = signal(null, ...(ngDevMode ? [{ debugName: "resourceSummarySignal" }] : /* istanbul ignore next */ []));
    utilizationSummarySignal = signal(null, ...(ngDevMode ? [{ debugName: "utilizationSummarySignal" }] : /* istanbul ignore next */ []));
    // Module 6
    workforceCategoriesSignal = signal([], ...(ngDevMode ? [{ debugName: "workforceCategoriesSignal" }] : /* istanbul ignore next */ []));
    workerAssignmentsSignal = signal([], ...(ngDevMode ? [{ debugName: "workerAssignmentsSignal" }] : /* istanbul ignore next */ []));
    attendanceRecordsSignal = signal([], ...(ngDevMode ? [{ debugName: "attendanceRecordsSignal" }] : /* istanbul ignore next */ []));
    shiftsSignal = signal([], ...(ngDevMode ? [{ debugName: "shiftsSignal" }] : /* istanbul ignore next */ []));
    payrollRecordsSignal = signal([], ...(ngDevMode ? [{ debugName: "payrollRecordsSignal" }] : /* istanbul ignore next */ []));
    workforceSummarySignal = signal(null, ...(ngDevMode ? [{ debugName: "workforceSummarySignal" }] : /* istanbul ignore next */ []));
    // Module 7
    procurementCategoriesSignal = signal([], ...(ngDevMode ? [{ debugName: "procurementCategoriesSignal" }] : /* istanbul ignore next */ []));
    procurementRequestsSignal = signal([], ...(ngDevMode ? [{ debugName: "procurementRequestsSignal" }] : /* istanbul ignore next */ []));
    procurementVendorsSignal = signal([], ...(ngDevMode ? [{ debugName: "procurementVendorsSignal" }] : /* istanbul ignore next */ []));
    procurementSummarySignal = signal(null, ...(ngDevMode ? [{ debugName: "procurementSummarySignal" }] : /* istanbul ignore next */ []));
    // ==========================================
    // READONLY SIGNALS
    // ==========================================
    projects = this.projectsSignal.asReadonly();
    workPackages = this.workPackagesSignal.asReadonly();
    materials = this.materialsSignal.asReadonly();
    materialRequests = this.materialRequestsSignal.asReadonly();
    workforce = this.workforceSignal.asReadonly();
    contractors = this.contractorsSignal.asReadonly();
    dailyLogs = this.dailyLogsSignal.asReadonly();
    sitePhotos = this.sitePhotosSignal.asReadonly();
    issues = this.issuesSignal.asReadonly();
    payslips = this.payslipsSignal.asReadonly();
    feedback = this.feedbackSignal.asReadonly();
    documents = this.documentsSignal.asReadonly();
    dailyProgressReports = this.dailyProgressReportsSignal.asReadonly();
    milestones = this.milestonesSignal.asReadonly();
    delays = this.delaysSignal.asReadonly();
    activityLogs = this.activityLogsSignal.asReadonly();
    weeklySummary = this.weeklySummarySignal.asReadonly();
    resources = this.resourcesSignal.asReadonly();
    resourceCategories = this.resourceCategoriesSignal.asReadonly();
    resourceAllocations = this.resourceAllocationsSignal.asReadonly();
    resourceUtilizations = this.resourceUtilizationsSignal.asReadonly();
    maintenanceRecords = this.maintenanceRecordsSignal.asReadonly();
    resourceSummary = this.resourceSummarySignal.asReadonly();
    utilizationSummary = this.utilizationSummarySignal.asReadonly();
    workforceCategories = this.workforceCategoriesSignal.asReadonly();
    workerAssignments = this.workerAssignmentsSignal.asReadonly();
    attendanceRecords = this.attendanceRecordsSignal.asReadonly();
    shifts = this.shiftsSignal.asReadonly();
    payrollRecords = this.payrollRecordsSignal.asReadonly();
    workforceSummary = this.workforceSummarySignal.asReadonly();
    // Module 7 readonly
    procurementCategories = this.procurementCategoriesSignal.asReadonly();
    procurementRequests = this.procurementRequestsSignal.asReadonly();
    procurementVendors = this.procurementVendorsSignal.asReadonly();
    procurementSummary = this.procurementSummarySignal.asReadonly();
    constructor() {
        this.loadAllData();
    }
    // ==========================================
    // LOAD ALL DATA
    // ==========================================
    loadAllData() {
        this.http
            .get('/api/projects')
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    const projs = res.data;
                    this.projectsSignal.set(projs.map((p) => ({
                        id: p.id,
                        name: p.name,
                        location: p.location,
                        clientName: p.clientName,
                        status: p.status,
                        startDate: p.startDate?.split('T')[0],
                        endDate: p.endDate?.split('T')[0],
                        budget: p.budget,
                        spent: p.spent,
                        progress: p.progress,
                        manager: p.manager?.name || 'Unassigned',
                        image: p.image,
                        description: p.description
                    })));
                    this.workPackagesSignal.set(projs.flatMap((p) => (p.workPackages || []).map((wp) => ({
                        id: wp.id,
                        projectId: wp.projectId,
                        projectName: p.name,
                        title: wp.title,
                        description: wp.description,
                        assignedTo: wp.assignedTo?.name ||
                            wp.assignedToName ||
                            wp.assignedToId ||
                            'Unassigned',
                        assignedToRole: 'contractor',
                        startDate: wp.startDate?.split('T')[0],
                        endDate: wp.endDate?.split('T')[0],
                        progress: wp.progress,
                        status: wp.status
                    }))));
                    this.issuesSignal.set(projs.flatMap((p) => (p.issueReports || []).map((iss) => ({
                        id: iss.id,
                        projectId: iss.projectId,
                        projectName: p.name,
                        title: iss.title,
                        description: iss.description,
                        severity: iss.severity,
                        status: iss.status,
                        reportedBy: iss.reportedById,
                        reportedDate: iss.reportedDate?.split('T')[0]
                    }))));
                    this.sitePhotosSignal.set(projs.flatMap((p) => (p.sitePhotos || []).map((ph) => ({
                        id: ph.id,
                        projectId: ph.projectId,
                        url: ph.url,
                        caption: ph.caption,
                        date: ph.date?.split('T')[0],
                        uploadedBy: ph.uploadedById
                    }))));
                    this.feedbackSignal.set(projs.flatMap((p) => (p.feedback || []).map((fb) => ({
                        id: fb.id,
                        clientName: fb.clientName,
                        projectName: p.name,
                        rating: fb.rating,
                        message: fb.message,
                        date: fb.date?.split('T')[0]
                    }))));
                }
            },
            error: (err) => console.error('Failed to load projects', err)
        });
        this.http
            .get('/api/materials')
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    this.materialsSignal.set(res.data);
                }
            },
            error: () => { }
        });
        this.http
            .get('/api/materials/requests/all')
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    this.materialRequestsSignal.set(res.data.map((r) => ({
                        id: r.id,
                        materialId: r.materialId,
                        materialName: r.material?.name || 'Unknown',
                        quantity: r.quantity,
                        requestedBy: r.requestedBy?.company ||
                            r.requestedBy?.name ||
                            r.requestedByName ||
                            'Contractor',
                        requestDate: r.requestDate?.split('T')[0] ||
                            r.createdAt?.split('T')[0],
                        status: r.status,
                        projectName: r.project?.name ||
                            r.projectName ||
                            'Project'
                    })));
                }
            },
            error: () => { }
        });
        this.http
            .get('/api/users')
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    const users = res.data;
                    const wfMembers = users
                        .filter((u) => u.role === 'worker')
                        .map((u) => ({
                        id: u.profile?.id || u.id,
                        workerId: u.id,
                        name: u.name,
                        role: u.profile?.role || 'Laborer',
                        assignedProject: u.profile?.assignedProject ||
                            'Vanguard Heights Commercial Tower',
                        status: u.profile?.status || 'Active',
                        phone: u.phone || '',
                        avatar: u.avatar || '',
                        company: u.company || ''
                    }));
                    this.workforceSignal.set(wfMembers);
                    const contractorCompanies = users
                        .filter((u) => u.role === 'contractor')
                        .map((u) => ({
                        id: u.profile?.id || u.id,
                        name: u.company || u.name,
                        contactPerson: u.name,
                        specialty: u.profile?.specialty ||
                            'Foundation & Concrete Rigs',
                        activeProjects: 1,
                        status: u.profile?.status || 'Active'
                    }));
                    this.contractorsSignal.set(contractorCompanies);
                }
            },
            error: () => { }
        });
        this.http
            .get('/api/reports')
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    this.dailyLogsSignal.set(res.data);
                }
            },
            error: () => { }
        });
        this.http
            .get('/api/payments')
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    this.payslipsSignal.set(res.data.map((p) => ({
                        id: p.id,
                        workerId: p.workerId,
                        month: p.month,
                        basicSalary: p.basicSalary,
                        overtimePay: p.overtimePay,
                        deductions: p.deductions,
                        netPay: p.netPay,
                        status: p.status,
                        paymentDate: p.paymentDate?.split('T')[0]
                    })));
                }
            },
            error: () => { }
        });
        this.loadModule3Data();
        this.loadModule4Data();
        this.loadModule6Data();
        this.loadModule7Data();
    }
    // ==========================================
    // MODULE 3
    // ==========================================
    loadModule3Data(projectId) {
        const pParam = projectId ? `?projectId=${projectId}` : '';
        this.http
            .get(`/api/progress/daily${pParam}`)
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    this.dailyProgressReportsSignal.set(res.data);
                }
            },
            error: () => { }
        });
        this.http
            .get(`/api/progress/milestones${pParam}`)
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    this.milestonesSignal.set(res.data);
                }
            },
            error: () => { }
        });
        this.http
            .get(`/api/progress/delays${pParam}`)
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    this.delaysSignal.set(res.data);
                }
            },
            error: () => { }
        });
        this.http
            .get(`/api/progress/activity-logs${pParam}`)
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    this.activityLogsSignal.set(res.data);
                }
            },
            error: () => { }
        });
    }
    loadWeeklySummary(projectId, weekStartDate) {
        let url = `/api/progress/weekly-summary?projectId=${projectId}`;
        if (weekStartDate) {
            url += `&weekStartDate=${weekStartDate}`;
        }
        this.http
            .get(url)
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    this.weeklySummarySignal.set(res.data);
                }
            },
            error: () => { }
        });
    }
    addDailyProgressReport(report) {
        return this.http.post('/api/progress/daily', report);
    }
    updateDailyProgressReport(id, report) {
        return this.http.put(`/api/progress/daily/${id}`, report);
    }
    deleteDailyProgressReport(id) {
        return this.http.delete(`/api/progress/daily/${id}`);
    }
    addMilestone(milestone) {
        return this.http.post('/api/progress/milestones', milestone);
    }
    updateMilestone(id, milestone) {
        return this.http.put(`/api/progress/milestones/${id}`, milestone);
    }
    deleteMilestone(id) {
        return this.http.delete(`/api/progress/milestones/${id}`);
    }
    addDelayRecord(delay) {
        return this.http.post('/api/progress/delays', delay);
    }
    updateDelay(id, delay) {
        return this.http.put(`/api/progress/delays/${id}`, delay);
    }
    deleteDelayRecord(id) {
        return this.http.delete(`/api/progress/delays/${id}`);
    }
    addSiteActivityLog(log) {
        return this.http.post('/api/progress/activity-logs', log);
    }
    updateSiteActivityLog(id, log) {
        return this.http.put(`/api/progress/activity-logs/${id}`, log);
    }
    deleteSiteActivityLog(id) {
        return this.http.delete(`/api/progress/activity-logs/${id}`);
    }
    // ==========================================
    // MODULE 4
    // ==========================================
    loadModule4Data(projectId) {
        const pParam = projectId ? `?projectId=${projectId}` : '';
        this.http
            .get('/api/resources/categories')
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    this.resourceCategoriesSignal.set(res.data);
                }
            },
            error: () => { }
        });
        this.http
            .get(`/api/resources${pParam}`)
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    this.resourcesSignal.set(res.data);
                }
            },
            error: () => { }
        });
        this.http
            .get(`/api/resource-allocations${pParam}`)
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    this.resourceAllocationsSignal.set(res.data);
                }
            },
            error: () => { }
        });
        this.http
            .get(`/api/resource-utilization${pParam}`)
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    this.resourceUtilizationsSignal.set(res.data);
                }
            },
            error: () => { }
        });
        this.http
            .get('/api/maintenance')
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    this.maintenanceRecordsSignal.set(res.data);
                }
            },
            error: () => { }
        });
        this.loadResourceSummary();
        this.loadUtilizationSummary();
    }
    loadResourceSummary() {
        this.http
            .get('/api/resources/summary')
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    this.resourceSummarySignal.set(res.data);
                }
            },
            error: () => { }
        });
    }
    loadUtilizationSummary() {
        this.http
            .get('/api/resource-utilization/summary')
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    this.utilizationSummarySignal.set(res.data);
                }
            },
            error: () => { }
        });
    }
    checkResourceAvailability(startDate, endDate, categoryId) {
        let url = `/api/resources/available?startDate=${startDate}` +
            `&endDate=${endDate}`;
        if (categoryId) {
            url += `&categoryId=${categoryId}`;
        }
        return this.http.get(url);
    }
    addResource(resource) {
        return this.http.post('/api/resources', resource);
    }
    updateResource(id, resource) {
        return this.http.put(`/api/resources/${id}`, resource);
    }
    deleteResource(id) {
        return this.http.delete(`/api/resources/${id}`);
    }
    allocateResource(alloc) {
        return this.http.post('/api/resource-allocations', alloc);
    }
    updateAllocation(id, alloc) {
        return this.http.put(`/api/resource-allocations/${id}`, alloc);
    }
    returnResourceAllocation(id, notes) {
        const params = notes
            ? `?notes=${encodeURIComponent(notes)}`
            : '';
        return this.http.put(`/api/resource-allocations/${id}/return${params}`, {});
    }
    deleteAllocation(id) {
        return this.http.delete(`/api/resource-allocations/${id}`);
    }
    logResourceUtilization(utl) {
        return this.http.post('/api/resource-utilization', utl);
    }
    scheduleMaintenance(mnt) {
        return this.http.post('/api/maintenance', mnt);
    }
    updateMaintenanceRecord(id, mnt) {
        return this.http.put(`/api/maintenance/${id}`, mnt);
    }
    deleteMaintenanceRecord(id) {
        return this.http.delete(`/api/maintenance/${id}`);
    }
    // ==========================================
    // MODULE 7 PROCUREMENT
    // ==========================================
    // Module 7 component uses these wrappers when a single API refresh must update the shared signal.
    mapProcurementRequestForModule7(r) {
        return this.mapProcurementRequest(r);
    }
    setProcurementRequestsForModule7(requests) {
        this.procurementRequestsSignal.set(requests);
    }
    mapProcurementRequest(r) {
        return {
            id: r.id,
            projectId: r.projectId ||
                r.project_id ||
                r.project?.id ||
                '',
            projectName: r.projectName ||
                r.project_name ||
                r.project?.name ||
                '',
            requestedById: r.requestedById ||
                r.requested_by_id ||
                r.requestedBy?.id ||
                '',
            requestedByName: r.requestedByName ||
                r.requested_by_name ||
                r.requestedBy?.company ||
                r.requestedBy?.name ||
                '',
            categoryId: r.categoryId ||
                r.category_id ||
                r.category?.id ||
                undefined,
            categoryName: r.categoryName ||
                r.category_name ||
                r.category?.name ||
                undefined,
            itemName: r.itemName ||
                r.item_name ||
                '',
            description: r.description ||
                undefined,
            quantity: Number(r.quantity || 0),
            unit: r.unit || '',
            requiredDate: r.requiredDate?.split('T')[0] ||
                r.required_date?.split('T')[0] ||
                undefined,
            estimatedCost: r.estimatedCost ??
                r.estimated_cost ??
                undefined,
            purpose: r.purpose ||
                undefined,
            priority: r.priority || 'Medium',
            remarks: r.remarks ||
                undefined,
            rejectionReason: r.rejectionReason ||
                r.rejection_reason ||
                undefined,
            materialId: r.materialId ||
                r.material_id ||
                undefined,
            resourceId: r.resourceId ||
                r.resource_id ||
                undefined,
            availableQuantity: r.availableQuantity ??
                r.available_quantity ??
                undefined,
            shortageQuantity: r.shortageQuantity ??
                r.shortage_quantity ??
                undefined,
            requestDate: r.requestDate?.split('T')[0] ||
                r.request_date?.split('T')[0] ||
                r.createdAt?.split('T')[0] ||
                r.created_at?.split('T')[0] ||
                undefined,
            status: r.status || 'Pending'
        };
    }
    loadModule7Data() {
        // Safe shared preload for every logged-in role. Role-restricted data (vendors, summary,
        // POs and invoices) is loaded by ProcurementManagementComponent only for allowed roles.
        this.http.get('/api/procurement/categories').subscribe({
            next: (res) => { if (res.success && res.data)
                this.procurementCategoriesSignal.set(res.data); },
            error: () => { }
        });
        this.loadProcurementRequests();
    }
    loadProcurementSummary() {
        this.http
            .get('/api/procurement/summary')
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    this.procurementSummarySignal.set(res.data);
                }
            },
            error: (err) => {
                console.error('Failed to load procurement summary', err);
            }
        });
    }
    loadProcurementRequests() {
        this.http
            .get('/api/procurement/requests')
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    const mappedRequests = res.data.map((request) => this.mapProcurementRequest(request));
                    this.procurementRequestsSignal.set(mappedRequests);
                }
            },
            error: (err) => {
                console.error('Failed to load procurement requests', err);
            }
        });
    }
    // CREATE PROCUREMENT REQUEST
    // Contractor / Site Engineer
    createProcurementRequest(request) {
        const payload = {
            project_id: request.projectId,
            category_id: request.categoryId || null,
            item_name: request.itemName,
            description: request.description || null,
            quantity: Number(request.quantity),
            unit: request.unit,
            required_date: request.requiredDate || null,
            estimated_cost: request.estimatedCost ?? null,
            purpose: request.purpose || null,
            priority: request.priority,
            remarks: request.remarks || null,
            material_id: request.materialId || null,
            resource_id: request.resourceId || null
        };
        return this.http
            .post('/api/procurement/requests', payload)
            .pipe(tap((res) => {
            console.log('Procurement request created:', res);
            // IMPORTANT:
            // POST ke turant baad latest requests load
            // Isse Contractor History aur Admin List update hogi
            this.loadProcurementRequests();
            // Admin dashboard counters update
            this.loadProcurementSummary();
        }));
    }
    // UPDATE / APPROVE / REJECT / CANCEL
    updateProcurementRequest(id, data) {
        return this.http
            .put(`/api/procurement/requests/${id}`, data)
            .pipe(tap(() => {
            // Status change ke baad dono dashboard refresh
            this.loadProcurementRequests();
            this.loadProcurementSummary();
        }));
    }
    approveProcurementRequest(id) {
        return this.http.post(`/api/procurement/requests/${id}/approve`, {}).pipe(tap(() => this.refreshProcurementData()));
    }
    rejectProcurementRequest(id, rejectionReason) {
        return this.http.post(`/api/procurement/requests/${id}/reject`, { rejection_reason: rejectionReason }).pipe(tap(() => this.refreshProcurementData()));
    }
    cancelProcurementRequest(id) {
        return this.updateProcurementRequest(id, {
            status: 'Cancelled'
        });
    }
    refreshProcurementData() {
        this.loadProcurementRequests();
        this.loadProcurementSummary();
        this.http
            .get('/api/procurement/categories')
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    this.procurementCategoriesSignal.set(res.data);
                }
            },
            error: () => { }
        });
        this.http
            .get('/api/procurement/vendors')
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    this.procurementVendorsSignal.set(res.data);
                }
            },
            error: () => { }
        });
    }
    getProcurementRequests() {
        return this.http.get('/api/procurement/requests');
    }
    // Full Module 7 API helpers
    getProcurementCategories() { return this.http.get('/api/procurement/categories'); }
    createProcurementCategory(data) { return this.http.post('/api/procurement/categories', data); }
    updateProcurementCategory(id, data) { return this.http.put(`/api/procurement/categories/${id}`, data); }
    deleteProcurementCategory(id) { return this.http.delete(`/api/procurement/categories/${id}`); }
    getProcurementVendors() { return this.http.get('/api/procurement/vendors'); }
    createProcurementVendor(data) { return this.http.post('/api/procurement/vendors', data); }
    updateProcurementVendor(id, data) { return this.http.put(`/api/procurement/vendors/${id}`, data); }
    deleteProcurementVendor(id) { return this.http.delete(`/api/procurement/vendors/${id}`); }
    getPurchaseOrders() { return this.http.get('/api/procurement/purchase-orders'); }
    createPurchaseOrder(data) { return this.http.post('/api/procurement/purchase-orders', data); }
    updatePurchaseOrder(id, data) { return this.http.put(`/api/procurement/purchase-orders/${id}`, data); }
    getGoodsReceipts(poId) { return this.http.get(`/api/procurement/purchase-orders/${poId}/goods-receipts`); }
    receiveGoods(data) { return this.http.post('/api/procurement/goods-receipts', data); }
    getProcurementInvoices() { return this.http.get('/api/procurement/invoices'); }
    createProcurementInvoice(data) { return this.http.post('/api/procurement/invoices', data); }
    updateProcurementInvoice(id, data) { return this.http.put(`/api/procurement/invoices/${id}`, data); }
    getProcurementSummary() { return this.http.get('/api/procurement/summary'); }
    setProcurementSummary(summary) { this.procurementSummarySignal.set(summary); }
    // ==========================================
    // LEGACY / OTHER MODULE METHODS
    // ==========================================
    addDailyLog(log) {
        this.http
            .post('/api/reports', log)
            .subscribe(() => {
            this.loadAllData();
        });
    }
    addSitePhoto(photo) {
        this.http
            .post(`/api/projects/${photo.projectId}/photos`, photo)
            .subscribe(() => {
            this.loadAllData();
        });
    }
    reportIssue(issue) {
        this.http
            .post(`/api/projects/${issue.projectId}/issues`, issue)
            .subscribe(() => {
            this.loadAllData();
        });
    }
    resolveIssue(id) {
        const issue = this.issues().find((i) => i.id === id);
        if (issue) {
            this.http
                .put(`/api/projects/${issue.projectId}/issues/${id}`, { status: 'Resolved' })
                .subscribe(() => {
                this.loadAllData();
            });
        }
    }
    submitMaterialRequest(req) {
        this.http
            .post('/api/materials/requests/submit', req)
            .subscribe(() => {
            this.loadAllData();
        });
    }
    respondToMaterialRequest(id, approve) {
        this.http
            .put(`/api/materials/requests/${id}/respond`, { approve })
            .subscribe(() => {
            this.loadAllData();
        });
    }
    submitFeedback(fb) {
        const proj = this.projects().find((p) => p.name === fb.projectName);
        const projectId = proj?.id || 'P-101';
        this.http
            .post(`/api/projects/${projectId}/feedback`, fb)
            .subscribe(() => {
            this.loadAllData();
        });
    }
    assignWorkPackage(wp) {
        this.http
            .post(`/api/projects/${wp.projectId}/tasks`, wp)
            .subscribe(() => {
            this.loadAllData();
        });
    }
    updateWorkPackageStatus(id, progress, status) {
        const wp = this.workPackages().find((w) => w.id === id);
        if (wp) {
            this.http
                .put(`/api/projects/${wp.projectId}/tasks/${id}`, { progress, status })
                .subscribe(() => {
                this.loadAllData();
            });
        }
    }
    addWorkforceMember(member) {
        const nameSplit = member.name.split(' ');
        const email = `${nameSplit[0]?.toLowerCase() || 'user'}_` +
            `${Math.floor(Math.random() * 100)}@buildtrack.com`;
        this.http
            .post('/api/users', {
            name: member.name,
            email,
            password: 'password123',
            role: 'worker',
            phone: member.phone,
            trade: member.role
        })
            .subscribe(() => {
            this.loadAllData();
        });
    }
    updateWorkforceStatus(id, status) {
        this.http
            .put(`/api/users/${id}`, { status })
            .subscribe(() => {
            this.loadAllData();
        });
    }
    addProject(project) {
        const projId = `P-${Math.floor(100 + Math.random() * 900)}`;
        this.http
            .post('/api/projects', {
            ...project,
            id: projId
        })
            .subscribe(() => {
            this.loadAllData();
        });
    }
    // ==========================================
    // MODULE 6
    // ==========================================
    loadModule6Data(projectId, contractorId) {
        const params = [];
        if (projectId) {
            params.push(`projectId=${projectId}`);
        }
        if (contractorId) {
            params.push(`contractorId=${contractorId}`);
        }
        const query = params.length > 0
            ? `?${params.join('&')}`
            : '';
        this.http
            .get(`/api/workers${query}`)
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    this.workforceSignal.set(res.data);
                }
            },
            error: () => { }
        });
        this.http
            .get('/api/workers/categories')
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    this.workforceCategoriesSignal.set(res.data);
                }
            },
            error: () => { }
        });
        this.http
            .get(`/api/worker-assignments${query}`)
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    this.workerAssignmentsSignal.set(res.data);
                }
            },
            error: () => { }
        });
        this.http
            .get(`/api/attendance${query}`)
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    this.attendanceRecordsSignal.set(res.data);
                }
            },
            error: () => { }
        });
        this.http
            .get(`/api/shifts${query}`)
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    this.shiftsSignal.set(res.data);
                }
            },
            error: () => { }
        });
        this.http
            .get(`/api/payroll${query}`)
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    this.payrollRecordsSignal.set(res.data);
                }
            },
            error: () => { }
        });
        this.http
            .get('/api/workforce/summary')
            .subscribe({
            next: (res) => {
                if (res.success && res.data) {
                    this.workforceSummarySignal.set(res.data);
                }
            },
            error: () => { }
        });
    }
    registerWorker(workerData) {
        return this.http.post('/api/workers', workerData);
    }
    bulkUploadWorkers(file) {
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post('/api/workers/bulk-csv', formData);
    }
    updateWorker(id, workerData) {
        return this.http.put(`/api/workers/${id}`, workerData);
    }
    allocateWorker(assignmentData) {
        return this.http.post('/api/worker-assignments', assignmentData);
    }
    logAttendanceRecord(attendanceData) {
        return this.http.post('/api/attendance', attendanceData);
    }
    createShiftSchedule(shiftData) {
        return this.http.post('/api/shifts', shiftData);
    }
    assignWorkersToShift(shiftId, workerIds) {
        return this.http.post('/api/shifts/assign', {
            shiftId,
            workerIds
        });
    }
    generatePayrollRecord(payrollData) {
        return this.http.post('/api/payroll', payrollData);
    }
    updatePayrollStatus(payrollId, status) {
        return this.http.put(`/api/payroll/${payrollId}`, { status });
    }
    static ɵfac = function ProjectService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProjectService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ProjectService, factory: ProjectService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProjectService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();
