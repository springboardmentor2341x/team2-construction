import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { toSignal } from '@angular/core/rxjs-interop';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
const _c0 = a0 => [a0];
const _c1 = a0 => ({ module: a0 });
const _forTrack0 = ($index, $item) => $item.module;
function SidebarComponent_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 3)(1, "a", 7);
    i0.ɵɵelement(2, "i", 8);
    i0.ɵɵelementStart(3, "span", 9);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("active", ctx_r1.activeModule === item_r1.module);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(7, _c0, ctx_r1.dashboardPath))("queryParams", i0.ɵɵpureFunction1(9, _c1, item_r1.module))("title", item_r1.label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", item_r1.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.label);
} }
function SidebarComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 5);
    i0.ɵɵtext(1, "BuildTrack v1.0.0");
    i0.ɵɵelementEnd();
} }
function SidebarComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 6);
} }
export class SidebarComponent {
    authService = inject(AuthService);
    route = inject(ActivatedRoute);
    collapsed = false;
    // Reactively track the query parameters
    queryParams = toSignal(this.route.queryParams);
    get activeModule() {
        const moduleParam = this.queryParams()?.['module'];
        if (moduleParam)
            return moduleParam;
        const role = this.authService.userRole();
        if (role === 'worker')
            return 'attendance';
        return 'overview';
    }
    // Generate dynamic links depending on the logged-in role
    get menuItems() {
        const role = this.authService.userRole();
        if (!role)
            return [];
        switch (role) {
            // ================= ADMIN =================
            case 'admin':
                return [
                    { module: 'overview', label: 'Overview', icon: 'bi-grid-fill' },
                    { module: 'users', label: 'Users', icon: 'bi-people-fill' },
                    { module: 'projects', label: 'Projects', icon: 'bi-building-fill' },
                    { module: 'resources', label: 'Equipment Registry', icon: 'bi-truck' },
                    { module: 'allocations', label: 'Equipment Allocations', icon: 'bi-calendar2-range' },
                    { module: 'maintenance', label: 'Maintenance Hub', icon: 'bi-tools' },
                    { module: 'workforce', label: 'Workforce', icon: 'bi-person-badge' },
                    { module: 'contractors', label: 'Contractors', icon: 'bi-shield-check' },
                    { module: 'inventory', label: 'Material Inventory', icon: 'bi-box-seam-fill' },
                    // ================= MODULE 7 =================
                    { module: 'procurement', label: 'Procurement Management', icon: 'bi-cart-check-fill' },
                    { module: 'budget', label: 'Budget & Expenses', icon: 'bi-wallet-fill' },
                    { module: 'reports', label: 'Reports', icon: 'bi-graph-up-arrow' },
                    { module: 'notifications', label: 'Notifications', icon: 'bi-chat-dots-fill' },
                    { module: 'settings', label: 'Settings', icon: 'bi-gear-fill' }
                ];
            // ================= PROJECT MANAGER =================
            case 'project_manager':
                return [
                    { module: 'projects', label: 'Assigned Projects', icon: 'bi-building-fill' },
                    { module: 'resources', label: 'Equipment Catalog', icon: 'bi-truck' },
                    { module: 'allocations', label: 'Equipment Allocation', icon: 'bi-calendar2-range' },
                    { module: 'tracking', label: 'Machinery Tracking', icon: 'bi-geo-alt-fill' },
                    { module: 'utilization', label: 'Resource Utilization', icon: 'bi-speedometer2' },
                    { module: 'maintenance', label: 'Maintenance Hub', icon: 'bi-tools' },
                    { module: 'milestones', label: 'Milestones & Progress', icon: 'bi-flag-fill' },
                    { module: 'daily_feed', label: 'Daily Reports Feed', icon: 'bi-journal-check' },
                    { module: 'delays', label: 'Active Delays', icon: 'bi-hourglass-split' },
                    { module: 'activities', label: 'Site Activities', icon: 'bi-clipboard2-data-fill' },
                    { module: 'weekly', label: 'Weekly Analytics', icon: 'bi-calendar-week-fill' },
                    { module: 'team', label: 'Team Members', icon: 'bi-people-fill' },
                    { module: 'budget', label: 'Budget Progress', icon: 'bi-cash-coin' },
                    { module: 'reports', label: 'Reports', icon: 'bi-file-earmark-bar-graph' },
                    { module: 'procurement', label: 'Procurement Tracking', icon: 'bi-cart-check-fill' }
                ];
            // ================= SITE ENGINEER =================
            case 'site_engineer':
                return [
                    { module: 'progress', label: 'Daily Progress', icon: 'bi-calendar-check-fill' },
                    { module: 'machinery_usage', label: 'Machinery Usage', icon: 'bi-speedometer2' },
                    { module: 'weekly', label: 'Weekly Summary', icon: 'bi-calendar-week-fill' },
                    { module: 'milestones', label: 'Milestones', icon: 'bi-flag-fill' },
                    { module: 'delays', label: 'Delay Tracking', icon: 'bi-hourglass-split' },
                    { module: 'activities', label: 'Site Activity Logs', icon: 'bi-clipboard2-data-fill' },
                    { module: 'photos', label: 'Site Photos', icon: 'bi-images' },
                    { module: 'attendance', label: 'Attendance Logs', icon: 'bi-person-check-fill' },
                    { module: 'materials', label: 'Materials Used', icon: 'bi-bricks' },
                    { module: 'issues', label: 'Issues Reporting', icon: 'bi-exclamation-triangle-fill' },
                    { module: 'procurement', label: 'Procurement Request', icon: 'bi-cart-plus-fill' }
                ];
            // ================= CONTRACTOR =================
            case 'contractor':
                return [
                    { module: 'work', label: 'Assigned Work', icon: 'bi-list-task' },
                    { module: 'workers', label: 'Worker Roster', icon: 'bi-people-fill' },
                    { module: 'material_requests', label: 'Material Requests', icon: 'bi-truck' },
                    { module: 'progress', label: 'Work Progress', icon: 'bi-speedometer' }
                ];
            // ================= WORKER =================
            case 'worker':
                return [
                    { module: 'attendance', label: 'Attendance Punch', icon: 'bi-clock-history' },
                    { module: 'tasks', label: 'Assigned Tasks', icon: 'bi-check2-square' },
                    { module: 'status', label: 'Daily Status', icon: 'bi-journal-check' },
                    { module: 'payslips', label: 'Payslips', icon: 'bi-receipt' },
                    { module: 'notifications', label: 'Notifications', icon: 'bi-bell-fill' }
                ];
            // ================= CLIENT =================
            case 'client':
                return [
                    { module: 'progress', label: 'Project Progress', icon: 'bi-activity' },
                    { module: 'workforce', label: 'Workforce Overview', icon: 'bi-people-fill' },
                    { module: 'timeline', label: 'Milestones', icon: 'bi-calendar-event' },
                    { module: 'budget', label: 'Budget Summary', icon: 'bi-pie-chart-fill' },
                    { module: 'documents', label: 'Documents Locker', icon: 'bi-file-earmark-pdf-fill' },
                    { module: 'images', label: 'Site Images', icon: 'bi-camera-fill' },
                    { module: 'feedback', label: 'Submit Feedback', icon: 'bi-chat-left-text-fill' }
                ];
            default:
                return [];
        }
    }
    get dashboardPath() {
        const role = this.authService.userRole();
        return this.authService.getDashboardUrl(role || 'worker');
    }
    static ɵfac = function SidebarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SidebarComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SidebarComponent, selectors: [["app-sidebar"]], inputs: { collapsed: "collapsed" }, decls: 8, vars: 3, consts: [[1, "sidebar", "bg-dark", "text-light", "border-end", "border-secondary"], [1, "sidebar-scroll", "py-3"], [1, "nav", "nav-pills", "flex-column", "px-2", "gap-1"], [1, "nav-item"], [1, "sidebar-footer", "px-3", "py-3", "border-top", "border-secondary", "text-center"], [1, "text-muted", "d-block", "opacity-75"], [1, "bi", "bi-info-circle", "text-muted", "fs-6"], [1, "nav-link", "text-light", "d-flex", "align-items-center", "gap-3", "py-2.5", "rounded-3", "border-0", 3, "routerLink", "queryParams", "title"], [1, "bi", 3, "ngClass"], [1, "sidebar-text"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "aside", 0)(1, "div", 1)(2, "ul", 2);
            i0.ɵɵrepeaterCreate(3, SidebarComponent_For_4_Template, 5, 11, "li", 3, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "div", 4);
            i0.ɵɵconditionalCreate(6, SidebarComponent_Conditional_6_Template, 2, 0, "small", 5)(7, SidebarComponent_Conditional_7_Template, 1, 0, "i", 6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵclassProp("collapsed", ctx.collapsed);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.menuItems);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(!ctx.collapsed ? 6 : 7);
        } }, dependencies: [CommonModule, i1.NgClass, RouterModule, i2.RouterLink], styles: [".sidebar[_ngcontent-%COMP%] {\n  width: 260px;\n  height: calc(100vh - 70px);\n  position: fixed;\n  top: 70px;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 1000;\n  overflow: hidden;\n  background-color: #1e293b !important; \n}\n\n.sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 70px;\n}\n\n.sidebar-scroll[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.sidebar-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n\n.sidebar-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 4px;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14.5px;\n  color: rgba(255, 255, 255, 0.75) !important;\n  transition: all 0.15s ease-in-out;\n  display: flex;\n  align-items: center;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.08) !important;\n  color: #ffffff !important;\n}\n\n.nav-link.active[_ngcontent-%COMP%] {\n  background-color: #0d6efd !important; \n  color: #ffffff !important;\n  font-weight: 600;\n}\n\n.nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 24px;\n}\n\n.sidebar-text[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  opacity: 1;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-text[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  display: none;\n}\n\n.sidebar-footer[_ngcontent-%COMP%] {\n  background-color: #111827; \n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidebarComponent, [{
        type: Component,
        args: [{ selector: 'app-sidebar', standalone: true, imports: [CommonModule, RouterModule], template: "<aside class=\"sidebar bg-dark text-light border-end border-secondary\" [class.collapsed]=\"collapsed\">\n  \n  <!-- Sidebar Navigation List -->\n  <div class=\"sidebar-scroll py-3\">\n    \n    <ul class=\"nav nav-pills flex-column px-2 gap-1\">\n      \n      @for (item of menuItems; track item.module) {\n        <li class=\"nav-item\">\n          <a class=\"nav-link text-light d-flex align-items-center gap-3 py-2.5 rounded-3 border-0\"\n             [routerLink]=\"[dashboardPath]\"\n             [queryParams]=\"{ module: item.module }\"\n             [class.active]=\"activeModule === item.module\"\n             [title]=\"item.label\">\n            <i class=\"bi\" [ngClass]=\"item.icon\"></i>\n            <span class=\"sidebar-text\">{{ item.label }}</span>\n          </a>\n        </li>\n      }\n      \n    </ul>\n\n  </div>\n\n  <!-- Collapsible Toggle indicator on lower edge -->\n  <div class=\"sidebar-footer px-3 py-3 border-top border-secondary text-center\">\n    @if (!collapsed) {\n      <small class=\"text-muted d-block opacity-75\">BuildTrack v1.0.0</small>\n    } @else {\n      <i class=\"bi bi-info-circle text-muted fs-6\"></i>\n    }\n  </div>\n\n</aside>\n", styles: [".sidebar {\n  width: 260px;\n  height: calc(100vh - 70px);\n  position: fixed;\n  top: 70px;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 1000;\n  overflow: hidden;\n  background-color: #1e293b !important; /* Dark Slate Blue/Gray */\n}\n\n.sidebar.collapsed {\n  width: 70px;\n}\n\n.sidebar-scroll {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.sidebar-scroll::-webkit-scrollbar {\n  width: 4px;\n}\n\n.sidebar-scroll::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 4px;\n}\n\n.nav-link {\n  font-weight: 500;\n  font-size: 14.5px;\n  color: rgba(255, 255, 255, 0.75) !important;\n  transition: all 0.15s ease-in-out;\n  display: flex;\n  align-items: center;\n}\n\n.nav-link:hover {\n  background-color: rgba(255, 255, 255, 0.08) !important;\n  color: #ffffff !important;\n}\n\n.nav-link.active {\n  background-color: #0d6efd !important; /* Premium Blue */\n  color: #ffffff !important;\n  font-weight: 600;\n}\n\n.nav-link i {\n  font-size: 18px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 24px;\n}\n\n.sidebar-text {\n  white-space: nowrap;\n  opacity: 1;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.sidebar.collapsed .sidebar-text {\n  opacity: 0;\n  width: 0;\n  display: none;\n}\n\n.sidebar-footer {\n  background-color: #111827; /* Rich dark bottom plate */\n}\n"] }]
    }], null, { collapsed: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src/app/components/sidebar/sidebar.ts", lineNumber: 14 }); })();
