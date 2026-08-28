import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar';
import { SidebarComponent } from '../components/sidebar/sidebar';
import { FooterComponent } from '../components/footer/footer';
import * as i0 from "@angular/core";
export class DashboardLayoutComponent {
    sidebarCollapsed = false;
    toggleSidebar() {
        this.sidebarCollapsed = !this.sidebarCollapsed;
    }
    static ɵfac = function DashboardLayoutComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardLayoutComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardLayoutComponent, selectors: [["app-dashboard-layout"]], decls: 8, vars: 3, consts: [[1, "app-layout-container"], [3, "toggleSidebar"], [1, "app-body"], [3, "collapsed"], [1, "main-content", "d-flex", "flex-column", "min-vh-100"], [1, "content-viewport", "flex-grow-1", "p-4"]], template: function DashboardLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "app-navbar", 1);
            i0.ɵɵlistener("toggleSidebar", function DashboardLayoutComponent_Template_app_navbar_toggleSidebar_1_listener() { return ctx.toggleSidebar(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelement(3, "app-sidebar", 3);
            i0.ɵɵelementStart(4, "main", 4)(5, "div", 5);
            i0.ɵɵelement(6, "router-outlet");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "app-footer");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("collapsed", ctx.sidebarCollapsed);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("sidebar-collapsed", ctx.sidebarCollapsed);
        } }, dependencies: [CommonModule, RouterOutlet, NavbarComponent, SidebarComponent, FooterComponent], styles: [".app-layout-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.app-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  margin-left: 260px;\n  flex: 1;\n  background-color: #f1f5f9; \n  transition: margin-left 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  min-height: calc(100vh - 70px);\n}\n\n.main-content.sidebar-collapsed[_ngcontent-%COMP%] {\n  margin-left: 70px;\n}\n\n.content-viewport[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInViewport 0.3s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_fadeInViewport {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n\n@media (max-width: 900px) {\n  .main-content[_ngcontent-%COMP%] {\n    margin-left: 70px !important; \n  }\n  \n  .main-content.sidebar-collapsed[_ngcontent-%COMP%] {\n    margin-left: 0px !important; \n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardLayoutComponent, [{
        type: Component,
        args: [{ selector: 'app-dashboard-layout', standalone: true, imports: [CommonModule, RouterOutlet, NavbarComponent, SidebarComponent, FooterComponent], template: "<div class=\"app-layout-container\">\n  \n  <!-- Fixed Navbar -->\n  <app-navbar (toggleSidebar)=\"toggleSidebar()\"></app-navbar>\n\n  <!-- Sidebar and Main Panel -->\n  <div class=\"app-body\">\n    \n    <!-- Collapsible Sidebar -->\n    <app-sidebar [collapsed]=\"sidebarCollapsed\"></app-sidebar>\n\n    <!-- Main Scroll Panel -->\n    <main class=\"main-content d-flex flex-column min-vh-100\" [class.sidebar-collapsed]=\"sidebarCollapsed\">\n      \n      <div class=\"content-viewport flex-grow-1 p-4\">\n        <!-- Routed page modules rendered here -->\n        <router-outlet></router-outlet>\n      </div>\n\n      <!-- Main Footer -->\n      <app-footer></app-footer>\n\n    </main>\n\n  </div>\n\n</div>\n", styles: [".app-layout-container {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.app-body {\n  display: flex;\n  flex: 1;\n}\n\n.main-content {\n  margin-top: 70px;\n  margin-left: 260px;\n  flex: 1;\n  background-color: #f1f5f9; /* Slate 100 - Sleek light background */\n  transition: margin-left 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  min-height: calc(100vh - 70px);\n}\n\n.main-content.sidebar-collapsed {\n  margin-left: 70px;\n}\n\n.content-viewport {\n  animation: fadeInViewport 0.3s ease-out;\n}\n\n@keyframes fadeInViewport {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n/* Responsive adjustments for mobile/tablet */\n@media (max-width: 900px) {\n  .main-content {\n    margin-left: 70px !important; /* Force narrow sidebar margin by default on smaller screens */\n  }\n  \n  .main-content.sidebar-collapsed {\n    margin-left: 0px !important; /* Toggle to completely hidden on mobile/tablet */\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardLayoutComponent, { className: "DashboardLayoutComponent", filePath: "src/app/layouts/dashboard-layout.ts", lineNumber: 15 }); })();
