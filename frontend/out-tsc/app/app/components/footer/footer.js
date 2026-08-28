import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class FooterComponent {
    currentYear = new Date().getFullYear();
    static ɵfac = function FooterComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FooterComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FooterComponent, selectors: [["app-footer"]], decls: 18, vars: 1, consts: [[1, "footer", "bg-white", "border-top", "py-3", "mt-auto"], [1, "container-fluid", "d-flex", "flex-column", "flex-md-row", "justify-content-between", "align-items-center", "px-4"], [1, "text-muted", "small"], [1, "d-flex", "gap-3", "mt-2", "mt-md-0"], ["href", "#", 1, "text-decoration-none", "text-muted", "small"], [1, "text-muted", "opacity-25"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵtext(3);
            i0.ɵɵdomElementStart(4, "strong");
            i0.ɵɵtext(5, "BuildTrack");
            i0.ɵɵdomElementEnd();
            i0.ɵɵtext(6, ". All rights reserved. ");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(7, "div", 3)(8, "a", 4);
            i0.ɵɵtext(9, "Privacy Policy");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(10, "span", 5);
            i0.ɵɵtext(11, "|");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(12, "a", 4);
            i0.ɵɵtext(13, "Terms of Service");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(14, "span", 5);
            i0.ɵɵtext(15, "|");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(16, "a", 4);
            i0.ɵɵtext(17, "Support Center");
            i0.ɵɵdomElementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" \u00A9 ", ctx.currentYear, " ");
        } }, styles: [".footer[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 13px;\n  background-color: #ffffff;\n}\n\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: color 0.15s ease;\n}\n\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0d6efd !important;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FooterComponent, [{
        type: Component,
        args: [{ selector: 'app-footer', standalone: true, template: "<footer class=\"footer bg-white border-top py-3 mt-auto\">\n  <div class=\"container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center px-4\">\n    <div class=\"text-muted small\">\n      &copy; {{ currentYear }} <strong>BuildTrack</strong>. All rights reserved.\n    </div>\n    <div class=\"d-flex gap-3 mt-2 mt-md-0\">\n      <a href=\"#\" class=\"text-decoration-none text-muted small\">Privacy Policy</a>\n      <span class=\"text-muted opacity-25\">|</span>\n      <a href=\"#\" class=\"text-decoration-none text-muted small\">Terms of Service</a>\n      <span class=\"text-muted opacity-25\">|</span>\n      <a href=\"#\" class=\"text-decoration-none text-muted small\">Support Center</a>\n    </div>\n  </div>\n</footer>\n", styles: [".footer {\n  width: 100%;\n  font-size: 13px;\n  background-color: #ffffff;\n}\n\n.footer a {\n  transition: color 0.15s ease;\n}\n\n.footer a:hover {\n  color: #0d6efd !important;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/components/footer/footer.ts", lineNumber: 9 }); })();
