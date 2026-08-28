import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1) => [a0, a1];
function DashboardCardComponent_Conditional_7_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵelement(1, "i", 11);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.trendValue, " ");
} }
function DashboardCardComponent_Conditional_7_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 8);
    i0.ɵɵelement(1, "i", 12);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.trendValue, " ");
} }
function DashboardCardComponent_Conditional_7_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 9);
    i0.ɵɵelement(1, "i", 13);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.trendValue, " ");
} }
function DashboardCardComponent_Conditional_7_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.subtitle);
} }
function DashboardCardComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵconditionalCreate(1, DashboardCardComponent_Conditional_7_Conditional_1_Template, 3, 1, "span", 7)(2, DashboardCardComponent_Conditional_7_Conditional_2_Template, 3, 1, "span", 8)(3, DashboardCardComponent_Conditional_7_Conditional_3_Template, 3, 1, "span", 9);
    i0.ɵɵconditionalCreate(4, DashboardCardComponent_Conditional_7_Conditional_4_Template, 2, 1, "span", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.trendDirection === "up" ? 1 : ctx_r0.trendDirection === "down" ? 2 : ctx_r0.trendDirection === "flat" ? 3 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r0.subtitle ? 4 : -1);
} }
export class DashboardCardComponent {
    title = '';
    value = '';
    icon = 'bi-activity';
    // Color presets: primary, success, danger, warning, info
    colorType = 'primary';
    trendValue = '';
    trendDirection = 'none';
    subtitle = '';
    static ɵfac = function DashboardCardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardCardComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardCardComponent, selectors: [["app-dashboard-card"]], inputs: { title: "title", value: "value", icon: "icon", colorType: "colorType", trendValue: "trendValue", trendDirection: "trendDirection", subtitle: "subtitle" }, decls: 10, vars: 8, consts: [[1, "card", "h-100", "bt-kpi-card", "shadow-sm", "border-0", "rounded-3", "overflow-hidden"], [1, "card-body", "p-4", "d-flex", "justify-content-between", "align-items-center"], [1, "text-muted", "text-uppercase", "tracking-wider", "fw-bold", "text-xs-ls", "d-block", "mb-1"], [1, "card-title", "fw-extrabold", "m-0", "text-dark"], [1, "mt-2", "d-flex", "align-items-center", "gap-1.5", "flex-wrap"], [1, "kpi-icon-wrapper", "rounded-circle", "d-flex", "align-items-center", "justify-content-center", 3, "ngClass"], [1, "bi", "fs-4", 3, "ngClass"], [1, "badge", "bg-success-subtle", "text-success", "border", "border-success-subtle", "rounded-pill", "py-1", "px-2", "d-flex", "align-items-center", "gap-0.5", "fw-semibold", "small"], [1, "badge", "bg-danger-subtle", "text-danger", "border", "border-danger-subtle", "rounded-pill", "py-1", "px-2", "d-flex", "align-items-center", "gap-0.5", "fw-semibold", "small"], [1, "badge", "bg-secondary-subtle", "text-secondary", "border", "border-secondary-subtle", "rounded-pill", "py-1", "px-2", "d-flex", "align-items-center", "gap-0.5", "fw-semibold", "small"], [1, "text-muted", "small", "fs-13"], [1, "bi", "bi-arrow-up-right"], [1, "bi", "bi-arrow-down-left"], [1, "bi", "bi-dash"]], template: function DashboardCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "span", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h3", 3);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(7, DashboardCardComponent_Conditional_7_Template, 5, 2, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 5);
            i0.ɵɵelement(9, "i", 6);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.value);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.subtitle || ctx.trendDirection !== "none" ? 7 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", "kpi-bg-" + ctx.colorType);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(5, _c0, ctx.icon, "text-" + ctx.colorType));
        } }, dependencies: [CommonModule, i1.NgClass], styles: [".bt-kpi-card[_ngcontent-%COMP%] {\n  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n  background-color: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.04) !important;\n}\n\n.bt-kpi-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08) !important;\n}\n\n.text-xs-ls[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  letter-spacing: 0.8px;\n  font-weight: 700;\n}\n\n.fs-13[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n}\n\n.kpi-icon-wrapper[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  flex-shrink: 0;\n  transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.bt-kpi-card[_ngcontent-%COMP%]:hover   .kpi-icon-wrapper[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotate(5deg);\n}\n\n\n.kpi-bg-primary[_ngcontent-%COMP%] { background-color: rgba(13, 110, 253, 0.1); }\n.kpi-bg-success[_ngcontent-%COMP%] { background-color: rgba(25, 135, 84, 0.1); }\n.kpi-bg-danger[_ngcontent-%COMP%] { background-color: rgba(220, 53, 69, 0.1); }\n.kpi-bg-warning[_ngcontent-%COMP%] { background-color: rgba(255, 193, 7, 0.15); }\n.kpi-bg-info[_ngcontent-%COMP%] { background-color: rgba(13, 202, 240, 0.1); }\n.kpi-bg-dark[_ngcontent-%COMP%] { background-color: rgba(33, 37, 41, 0.1); }\n\n.fw-extrabold[_ngcontent-%COMP%] {\n  font-weight: 800;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardCardComponent, [{
        type: Component,
        args: [{ selector: 'app-dashboard-card', standalone: true, imports: [CommonModule], template: "<div class=\"card h-100 bt-kpi-card shadow-sm border-0 rounded-3 overflow-hidden\">\n  <div class=\"card-body p-4 d-flex justify-content-between align-items-center\">\n    \n    <div>\n      <span class=\"text-muted text-uppercase tracking-wider fw-bold text-xs-ls d-block mb-1\">{{ title }}</span>\n      <h3 class=\"card-title fw-extrabold m-0 text-dark\">{{ value }}</h3>\n      \n      @if (subtitle || trendDirection !== 'none') {\n        <div class=\"mt-2 d-flex align-items-center gap-1.5 flex-wrap\">\n          \n          @if (trendDirection === 'up') {\n            <span class=\"badge bg-success-subtle text-success border border-success-subtle rounded-pill py-1 px-2 d-flex align-items-center gap-0.5 fw-semibold small\">\n              <i class=\"bi bi-arrow-up-right\"></i> {{ trendValue }}\n            </span>\n          } @else if (trendDirection === 'down') {\n            <span class=\"badge bg-danger-subtle text-danger border border-danger-subtle rounded-pill py-1 px-2 d-flex align-items-center gap-0.5 fw-semibold small\">\n              <i class=\"bi bi-arrow-down-left\"></i> {{ trendValue }}\n            </span>\n          } @else if (trendDirection === 'flat') {\n            <span class=\"badge bg-secondary-subtle text-secondary border border-secondary-subtle rounded-pill py-1 px-2 d-flex align-items-center gap-0.5 fw-semibold small\">\n              <i class=\"bi bi-dash\"></i> {{ trendValue }}\n            </span>\n          }\n          \n          @if (subtitle) {\n            <span class=\"text-muted small fs-13\">{{ subtitle }}</span>\n          }\n        </div>\n      }\n    </div>\n\n    <!-- Icon Badge -->\n    <div class=\"kpi-icon-wrapper rounded-circle d-flex align-items-center justify-content-center\" \n         [ngClass]=\"'kpi-bg-' + colorType\">\n      <i class=\"bi fs-4\" [ngClass]=\"[icon, 'text-' + colorType]\"></i>\n    </div>\n\n  </div>\n</div>\n", styles: [".bt-kpi-card {\n  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n  background-color: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.04) !important;\n}\n\n.bt-kpi-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08) !important;\n}\n\n.text-xs-ls {\n  font-size: 11.5px;\n  letter-spacing: 0.8px;\n  font-weight: 700;\n}\n\n.fs-13 {\n  font-size: 12.5px;\n}\n\n.kpi-icon-wrapper {\n  width: 50px;\n  height: 50px;\n  flex-shrink: 0;\n  transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.bt-kpi-card:hover .kpi-icon-wrapper {\n  transform: scale(1.1) rotate(5deg);\n}\n\n/* Role-specific icon backdrop colors */\n.kpi-bg-primary { background-color: rgba(13, 110, 253, 0.1); }\n.kpi-bg-success { background-color: rgba(25, 135, 84, 0.1); }\n.kpi-bg-danger { background-color: rgba(220, 53, 69, 0.1); }\n.kpi-bg-warning { background-color: rgba(255, 193, 7, 0.15); }\n.kpi-bg-info { background-color: rgba(13, 202, 240, 0.1); }\n.kpi-bg-dark { background-color: rgba(33, 37, 41, 0.1); }\n\n.fw-extrabold {\n  font-weight: 800;\n}\n"] }]
    }], null, { title: [{
            type: Input
        }], value: [{
            type: Input
        }], icon: [{
            type: Input
        }], colorType: [{
            type: Input
        }], trendValue: [{
            type: Input
        }], trendDirection: [{
            type: Input
        }], subtitle: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardCardComponent, { className: "DashboardCardComponent", filePath: "src/app/components/dashboard-card/dashboard-card.ts", lineNumber: 11 }); })();
