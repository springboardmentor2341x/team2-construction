import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
function ChartsComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 10);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("left", ctx_r0.activeTooltip.x, "px")("top", ctx_r0.activeTooltip.y, "px");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.activeTooltip.text, " ");
} }
function ChartsComponent_Conditional_6_For_13_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(0, "circle", 22);
    i0.ɵɵdomListener("mousemove", function ChartsComponent_Conditional_6_For_13_Template_circle_mousemove_0_listener($event) { const pt_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.showTooltip($event, pt_r3.label + ": " + pt_r3.val)); })("mouseleave", function ChartsComponent_Conditional_6_For_13_Template_circle_mouseleave_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.hideTooltip()); });
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const pt_r3 = ctx.$implicit;
    i0.ɵɵattribute("cx", pt_r3.x)("cy", pt_r3.y);
} }
function ChartsComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(0, "svg", 5);
    i0.ɵɵdomElement(1, "line", 11)(2, "line", 12)(3, "line", 13)(4, "line", 14)(5, "line", 15);
    i0.ɵɵdomElementStart(6, "defs")(7, "linearGradient", 16);
    i0.ɵɵdomElement(8, "stop", 17)(9, "stop", 18);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElement(10, "path", 19)(11, "path", 20);
    i0.ɵɵrepeaterCreate(12, ChartsComponent_Conditional_6_For_13_Template, 1, 2, ":svg:circle", 21, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵattribute("d", ctx_r0.areaD);
    i0.ɵɵadvance();
    i0.ɵɵattribute("d", ctx_r0.pathD);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.linePoints);
} }
function ChartsComponent_Conditional_7_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "div", 23)(1, "div", 24);
    i0.ɵɵdomListener("mousemove", function ChartsComponent_Conditional_7_For_2_Template_div_mousemove_1_listener($event) { const bar_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.showTooltip($event, bar_r5.label + ": " + bar_r5.value)); })("mouseleave", function ChartsComponent_Conditional_7_For_2_Template_div_mouseleave_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.hideTooltip()); });
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(2, "span", 25);
    i0.ɵɵtext(3);
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const bar_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("height", bar_r5.heightPercent, "%")("background-color", bar_r5.color);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", bar_r5.label, " ");
} }
function ChartsComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 6);
    i0.ɵɵrepeaterCreate(1, ChartsComponent_Conditional_7_For_2_Template, 4, 5, "div", 23, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.bars);
} }
function ChartsComponent_Conditional_8_For_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "div", 27)(1, "div", 32)(2, "div", 33);
    i0.ɵɵdomListener("mousemove", function ChartsComponent_Conditional_8_For_3_Template_div_mousemove_2_listener($event) { const grp_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.showTooltip($event, ctx_r0.dataLabel + ": $" + grp_r7.bar1.value + "M")); })("mouseleave", function ChartsComponent_Conditional_8_For_3_Template_div_mouseleave_2_listener() { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.hideTooltip()); });
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(3, "div", 33);
    i0.ɵɵdomListener("mousemove", function ChartsComponent_Conditional_8_For_3_Template_div_mousemove_3_listener($event) { const grp_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.showTooltip($event, ctx_r0.data2Label + ": $" + grp_r7.bar2.value + "M")); })("mouseleave", function ChartsComponent_Conditional_8_For_3_Template_div_mouseleave_3_listener() { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.hideTooltip()); });
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(4, "span", 34);
    i0.ɵɵtext(5);
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const grp_r7 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("height", grp_r7.bar1.heightPercent, "%")("background-color", grp_r7.bar1.color);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("height", grp_r7.bar2.heightPercent, "%")("background-color", grp_r7.bar2.color);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", grp_r7.label, " ");
} }
function ChartsComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 7)(1, "div", 26);
    i0.ɵɵrepeaterCreate(2, ChartsComponent_Conditional_8_For_3_Template, 6, 9, "div", 27, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(4, "div", 28)(5, "div", 29);
    i0.ɵɵdomElement(6, "span", 30);
    i0.ɵɵdomElementStart(7, "span", 31);
    i0.ɵɵtext(8);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(9, "div", 29);
    i0.ɵɵdomElement(10, "span", 30);
    i0.ɵɵdomElementStart(11, "span", 31);
    i0.ɵɵtext(12);
    i0.ɵɵdomElementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.groupedBars);
    i0.ɵɵadvance(4);
    i0.ɵɵstyleProp("background-color", ctx_r0.customColors[0] || "#0d6efd");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.dataLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("background-color", ctx_r0.customColors[1] || "#20c997");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.data2Label);
} }
function ChartsComponent_Conditional_9_For_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(0, "circle", 44);
    i0.ɵɵdomListener("mousemove", function ChartsComponent_Conditional_9_For_5_Template_circle_mousemove_0_listener($event) { const seg_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.showTooltip($event, seg_r9.tooltipText)); })("mouseleave", function ChartsComponent_Conditional_9_For_5_Template_circle_mouseleave_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.hideTooltip()); });
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const seg_r9 = ctx.$implicit;
    i0.ɵɵattribute("stroke", seg_r9.color)("stroke-dasharray", seg_r9.dashArray)("stroke-dashoffset", seg_r9.dashOffset);
} }
function ChartsComponent_Conditional_9_For_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 43);
    i0.ɵɵdomElement(1, "span", 45);
    i0.ɵɵdomElementStart(2, "span", 46);
    i0.ɵɵtext(3);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(4, "span", 47);
    i0.ɵɵtext(5);
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const seg_r10 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background-color", seg_r10.color);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(seg_r10.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("(", seg_r10.value, ")");
} }
function ChartsComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 8)(1, "div", 35);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(2, "svg", 36);
    i0.ɵɵdomElement(3, "circle", 37);
    i0.ɵɵrepeaterCreate(4, ChartsComponent_Conditional_9_For_5_Template, 1, 3, ":svg:circle", 38, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵdomElementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵdomElementStart(6, "div", 39)(7, "span", 40);
    i0.ɵɵtext(8, "TOTAL");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(9, "span", 41);
    i0.ɵɵtext(10);
    i0.ɵɵdomElementEnd()()();
    i0.ɵɵdomElementStart(11, "div", 42);
    i0.ɵɵrepeaterCreate(12, ChartsComponent_Conditional_9_For_13_Template, 6, 4, "div", 43, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r0.donutSegments);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.donutTotal);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.donutSegments);
} }
function ChartsComponent_Conditional_10_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const lbl_r11 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(lbl_r11);
} }
function ChartsComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 9);
    i0.ɵɵrepeaterCreate(1, ChartsComponent_Conditional_10_For_2_Template, 2, 1, "span", null, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.labels);
} }
export class ChartsComponent {
    type = 'line';
    title = '';
    labels = [];
    data = [];
    data2 = [];
    dataLabel = 'Committed';
    data2Label = 'Spent';
    customColors = [];
    // Default theme colors
    defaultColors = ['#0d6efd', '#198754', '#ffc107', '#dc3545', '#0dcaf0', '#6c757d'];
    // Prepared data models
    linePoints = [];
    pathD = '';
    areaD = '';
    bars = [];
    groupedBars = [];
    donutSegments = [];
    donutTotal = 0;
    activeTooltip = {
        x: 0,
        y: 0,
        text: '',
        visible: false
    };
    ngOnInit() {
        this.processData();
    }
    ngOnChanges(changes) {
        if (changes['data'] || changes['data2'] || changes['labels'] || changes['type']) {
            this.processData();
        }
    }
    processData() {
        if (!this.data || this.data.length === 0)
            return;
        if (this.type === 'line') {
            this.generateLineChart();
        }
        else if (this.type === 'bar') {
            this.generateBarChart();
        }
        else if (this.type === 'grouped-bar') {
            this.generateGroupedBarChart();
        }
        else if (this.type === 'donut') {
            this.generateDonutChart();
        }
    }
    generateLineChart() {
        const width = 500;
        const height = 220;
        const padding = 25;
        const maxVal = Math.max(...this.data) || 1;
        const minVal = 0; // Baseline at 0
        const valRange = maxVal - minVal;
        const pointsCount = this.data.length;
        // Map data to SVG viewbox coords
        this.linePoints = this.data.map((val, i) => {
            const x = padding + (i / (pointsCount - 1)) * (width - 2 * padding);
            // Invert Y coordinate so 0 is at bottom
            const y = height - padding - ((val - minVal) / valRange) * (height - 2 * padding);
            return {
                x,
                y,
                val,
                label: this.labels[i] || ''
            };
        });
        // Build the SVG path data (d) attribute string
        if (this.linePoints.length > 0) {
            let d = `M ${this.linePoints[0].x} ${this.linePoints[0].y}`;
            for (let i = 1; i < this.linePoints.length; i++) {
                d += ` L ${this.linePoints[i].x} ${this.linePoints[i].y}`;
            }
            this.pathD = d;
            // Area path (closed at the bottom)
            this.areaD = `${d} L ${this.linePoints[this.linePoints.length - 1].x} ${height - padding} L ${this.linePoints[0].x} ${height - padding} Z`;
        }
    }
    generateBarChart() {
        const maxVal = Math.max(...this.data) || 1;
        this.bars = this.data.map((val, i) => {
            const heightPercent = Math.max(8, (val / maxVal) * 100);
            const color = this.customColors[i] || this.defaultColors[i % this.defaultColors.length];
            return {
                heightPercent,
                value: val,
                label: this.labels[i] || '',
                color
            };
        });
    }
    generateGroupedBarChart() {
        const allVals = [...this.data, ...(this.data2 || [])];
        const maxVal = Math.max(...allVals) || 1;
        const color1 = this.customColors[0] || '#0d6efd';
        const color2 = this.customColors[1] || '#20c997';
        this.groupedBars = this.labels.map((lbl, i) => ({
            label: lbl,
            bar1: {
                heightPercent: Math.max(6, ((this.data[i] || 0) / maxVal) * 100),
                value: this.data[i] || 0,
                color: color1
            },
            bar2: {
                heightPercent: Math.max(6, ((this.data2[i] || 0) / maxVal) * 100),
                value: this.data2[i] || 0,
                color: color2
            }
        }));
    }
    generateDonutChart() {
        this.donutTotal = this.data.reduce((sum, val) => sum + val, 0);
        const radius = 50;
        const circumference = 2 * Math.PI * radius; // ~314.16
        let currentOffset = 0;
        this.donutSegments = this.data.map((val, i) => {
            const percent = (val / this.donutTotal) * 100;
            const strokeLength = (percent / 100) * circumference;
            const strokeGap = circumference - strokeLength;
            const label = this.labels[i] || '';
            const color = this.customColors[i] || this.defaultColors[i % this.defaultColors.length];
            const segment = {
                dashArray: `${strokeLength} ${strokeGap}`,
                // Offset is negative to rotate clockwise from top
                dashOffset: -currentOffset,
                percent,
                value: val,
                label,
                color,
                tooltipText: `${label}: ${val} (${percent.toFixed(1)}%)`
            };
            currentOffset += strokeLength;
            return segment;
        });
    }
    showTooltip(event, text) {
        const rect = event.currentTarget.getBoundingClientRect();
        // Position tooltip relative to container trigger
        this.activeTooltip = {
            x: event.clientX - rect.left + 10,
            y: event.clientY - rect.top - 25,
            text,
            visible: true
        };
    }
    hideTooltip() {
        this.activeTooltip.visible = false;
    }
    static ɵfac = function ChartsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ChartsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChartsComponent, selectors: [["app-chart"]], inputs: { type: "type", title: "title", labels: "labels", data: "data", data2: "data2", dataLabel: "dataLabel", data2Label: "data2Label", customColors: "customColors" }, features: [i0.ɵɵNgOnChangesFeature], decls: 11, vars: 7, consts: [[1, "card", "shadow-sm", "border-0", "rounded-3", "h-100", "chart-container-card"], [1, "card-body", "p-4", "d-flex", "flex-column", "justify-content-between", "position-relative"], [1, "card-title", "fw-bold", "text-dark", "mb-3"], [1, "chart-tooltip", "position-absolute", "bg-dark", "text-white", "rounded", "px-2", "py-1", "small", "fw-semibold", 3, "left", "top"], [1, "chart-body-wrapper", "d-flex", "justify-content-center", "align-items-center", "flex-grow-1", "min-h-200"], ["viewBox", "0 0 500 220", "width", "100%", "height", "100%", 1, "svg-line-chart"], [1, "bar-chart-container", "w-100", "h-100", "d-flex", "align-items-end", "justify-content-around", "px-2", 2, "height", "180px"], [1, "w-100", "d-flex", "flex-column", 2, "gap", "4px"], [1, "d-flex", "align-items-center", "gap-4", "flex-wrap", "flex-md-nowrap", "justify-content-center"], [1, "d-flex", "justify-content-between", "px-3", "mt-1", "border-top", "pt-2", "text-muted", 2, "font-size", "10px"], [1, "chart-tooltip", "position-absolute", "bg-dark", "text-white", "rounded", "px-2", "py-1", "small", "fw-semibold"], ["x1", "25", "y1", "25", "x2", "475", "y2", "25", "stroke", "#f1f3f9", "stroke-width", "1"], ["x1", "25", "y1", "73", "x2", "475", "y2", "73", "stroke", "#f1f3f9", "stroke-width", "1"], ["x1", "25", "y1", "121", "x2", "475", "y2", "121", "stroke", "#f1f3f9", "stroke-width", "1"], ["x1", "25", "y1", "169", "x2", "475", "y2", "169", "stroke", "#f1f3f9", "stroke-width", "1"], ["x1", "25", "y1", "195", "x2", "475", "y2", "195", "stroke", "#e2e8f0", "stroke-width", "1.5"], ["id", "areaGrad", "x1", "0", "y1", "0", "x2", "0", "y2", "1"], ["offset", "0%", "stop-color", "#0d6efd", "stop-opacity", "0.25"], ["offset", "100%", "stop-color", "#0d6efd", "stop-opacity", "0.00"], ["fill", "url(#areaGrad)"], ["fill", "none", "stroke", "#0d6efd", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["r", "5", "fill", "#ffffff", "stroke", "#0d6efd", "stroke-width", "2.5", 1, "interactive-dot"], ["r", "5", "fill", "#ffffff", "stroke", "#0d6efd", "stroke-width", "2.5", 1, "interactive-dot", 3, "mousemove", "mouseleave"], [1, "bar-wrapper", "d-flex", "flex-column", "align-items-center", "w-100", "px-1"], [1, "bar-pill", "w-100", "rounded-top", 3, "mousemove", "mouseleave"], [1, "text-muted", "text-truncate", "w-100", "text-center", "mt-2", 2, "font-size", "11px"], [1, "bar-chart-container", "w-100", "d-flex", "align-items-end", "justify-content-around", "px-2", 2, "height", "180px"], [1, "d-flex", "flex-column", "align-items-center", "w-100", "px-1", 2, "gap", "2px"], [1, "d-flex", "justify-content-center", "gap-4", "mt-2"], [1, "d-flex", "align-items-center", "gap-1"], [1, "rounded-circle", 2, "width", "10px", "height", "10px", "display", "inline-block"], [1, "small", "text-muted", "fw-semibold"], [1, "d-flex", "align-items-end", "w-100", 2, "gap", "3px", "height", "160px"], [1, "flex-grow-1", "rounded-top", "position-relative", 2, "min-height", "6px", "cursor", "pointer", 3, "mousemove", "mouseleave"], [1, "text-muted", "text-truncate", "w-100", "text-center", "mt-1", 2, "font-size", "10px"], [1, "position-relative", "donut-svg-wrapper"], ["viewBox", "0 0 120 120", "width", "150", "height", "150"], ["cx", "60", "cy", "60", "r", "50", "fill", "none", "stroke", "#f1f3f9", "stroke-width", "12"], ["cx", "60", "cy", "60", "r", "50", "fill", "none", "stroke-width", "12", "stroke-linecap", "round", "transform", "rotate(-90 60 60)", 1, "donut-segment-ring"], [1, "donut-center-label", "d-flex", "flex-column", "align-items-center", "justify-content-center", "position-absolute"], [1, "text-muted", "small", "uppercase", 2, "font-size", "10px", "font-weight", "700", "letter-spacing", "0.5px"], [1, "fw-bold", "text-dark", "fs-5"], [1, "d-flex", "flex-column", "gap-2", "text-start"], [1, "d-flex", "align-items-center", "gap-2"], ["cx", "60", "cy", "60", "r", "50", "fill", "none", "stroke-width", "12", "stroke-linecap", "round", "transform", "rotate(-90 60 60)", 1, "donut-segment-ring", 3, "mousemove", "mouseleave"], [1, "legend-color-dot", "rounded-circle", 2, "width", "10px", "height", "10px"], [1, "text-dark", "small", "fw-medium", 2, "font-size", "13px"], [1, "text-muted", "small"]], template: function ChartsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "div", 0)(1, "div", 1)(2, "h5", 2);
            i0.ɵɵtext(3);
            i0.ɵɵdomElementEnd();
            i0.ɵɵconditionalCreate(4, ChartsComponent_Conditional_4_Template, 2, 5, "div", 3);
            i0.ɵɵdomElementStart(5, "div", 4);
            i0.ɵɵconditionalCreate(6, ChartsComponent_Conditional_6_Template, 14, 2, ":svg:svg", 5);
            i0.ɵɵconditionalCreate(7, ChartsComponent_Conditional_7_Template, 3, 0, "div", 6);
            i0.ɵɵconditionalCreate(8, ChartsComponent_Conditional_8_Template, 13, 6, "div", 7);
            i0.ɵɵconditionalCreate(9, ChartsComponent_Conditional_9_Template, 14, 1, "div", 8);
            i0.ɵɵdomElementEnd();
            i0.ɵɵconditionalCreate(10, ChartsComponent_Conditional_10_Template, 3, 0, "div", 9);
            i0.ɵɵdomElementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeTooltip.visible ? 4 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.type === "line" ? 6 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.type === "bar" ? 7 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.type === "grouped-bar" ? 8 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.type === "donut" ? 9 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.type === "line" ? 10 : -1);
        } }, dependencies: [CommonModule], styles: [".chart-container-card[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.04) !important;\n  background-color: #ffffff;\n}\n\n.min-h-200[_ngcontent-%COMP%] {\n  min-height: 200px;\n}\n\n.chart-tooltip[_ngcontent-%COMP%] {\n  pointer-events: none;\n  font-size: 11px;\n  z-index: 1050;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);\n  transition: opacity 0.1s ease;\n  white-space: nowrap;\n  background-color: #0f172a !important; \n}\n\n\n.svg-line-chart[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.interactive-dot[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: r 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), stroke-width 0.2s;\n}\n\n.interactive-dot[_ngcontent-%COMP%]:hover {\n  r: 8px;\n  stroke-width: 4px;\n}\n\n\n.bar-pill[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275), filter 0.2s ease;\n  min-height: 10px;\n}\n\n.bar-pill[_ngcontent-%COMP%]:hover {\n  transform: scaleY(1.05);\n  filter: brightness(1.1);\n}\n\n.bar-wrapper[_ngcontent-%COMP%] {\n  max-width: 50px;\n}\n\n\n.donut-svg-wrapper[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n}\n\n.donut-center-label[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n  width: 80px;\n  height: 80px;\n  background: white;\n  border-radius: 50%;\n  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.05);\n}\n\n.donut-segment-ring[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: stroke-width 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.donut-segment-ring[_ngcontent-%COMP%]:hover {\n  stroke-width: 15px;\n}\n\n.legend-color-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  flex-shrink: 0;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChartsComponent, [{
        type: Component,
        args: [{ selector: 'app-chart', standalone: true, imports: [CommonModule], template: "<div class=\"card shadow-sm border-0 rounded-3 h-100 chart-container-card\">\n  <div class=\"card-body p-4 d-flex flex-column justify-content-between position-relative\">\n    \n    <h5 class=\"card-title fw-bold text-dark mb-3\">{{ title }}</h5>\n\n    <!-- Tooltip Overlay -->\n    @if (activeTooltip.visible) {\n      <div class=\"chart-tooltip position-absolute bg-dark text-white rounded px-2 py-1 small fw-semibold\" \n           [style.left.px]=\"activeTooltip.x\" \n           [style.top.px]=\"activeTooltip.y\">\n        {{ activeTooltip.text }}\n      </div>\n    }\n\n    <!-- Chart Panel -->\n    <div class=\"chart-body-wrapper d-flex justify-content-center align-items-center flex-grow-1 min-h-200\">\n      \n      <!-- 1. LINE / AREA CHART -->\n      @if (type === 'line') {\n        <svg viewBox=\"0 0 500 220\" width=\"100%\" height=\"100%\" class=\"svg-line-chart\">\n          <!-- Grids -->\n          <line x1=\"25\" y1=\"25\" x2=\"475\" y2=\"25\" stroke=\"#f1f3f9\" stroke-width=\"1\" />\n          <line x1=\"25\" y1=\"73\" x2=\"475\" y2=\"73\" stroke=\"#f1f3f9\" stroke-width=\"1\" />\n          <line x1=\"25\" y1=\"121\" x2=\"475\" y2=\"121\" stroke=\"#f1f3f9\" stroke-width=\"1\" />\n          <line x1=\"25\" y1=\"169\" x2=\"475\" y2=\"169\" stroke=\"#f1f3f9\" stroke-width=\"1\" />\n          <line x1=\"25\" y1=\"195\" x2=\"475\" y2=\"195\" stroke=\"#e2e8f0\" stroke-width=\"1.5\" /> <!-- Baseline -->\n\n          <!-- Gradient Definitions -->\n          <defs>\n            <linearGradient id=\"areaGrad\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n              <stop offset=\"0%\" stop-color=\"#0d6efd\" stop-opacity=\"0.25\"/>\n              <stop offset=\"100%\" stop-color=\"#0d6efd\" stop-opacity=\"0.00\"/>\n            </linearGradient>\n          </defs>\n\n          <!-- Area -->\n          <path [attr.d]=\"areaD\" fill=\"url(#areaGrad)\"></path>\n\n          <!-- Line Path -->\n          <path [attr.d]=\"pathD\" fill=\"none\" stroke=\"#0d6efd\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n\n          <!-- Interactive Dots -->\n          @for (pt of linePoints; track $index) {\n            <circle [attr.cx]=\"pt.x\" \n                    [attr.cy]=\"pt.y\" \n                    r=\"5\" \n                    fill=\"#ffffff\" \n                    stroke=\"#0d6efd\" \n                    stroke-width=\"2.5\" \n                    class=\"interactive-dot\"\n                    (mousemove)=\"showTooltip($event, pt.label + ': ' + pt.val)\"\n                    (mouseleave)=\"hideTooltip()\">\n            </circle>\n          }\n        </svg>\n      }\n\n      <!-- 2. BAR CHART -->\n      @if (type === 'bar') {\n        <div class=\"bar-chart-container w-100 h-100 d-flex align-items-end justify-content-around px-2\" style=\"height: 180px;\">\n          @for (bar of bars; track $index) {\n            <div class=\"bar-wrapper d-flex flex-column align-items-center w-100 px-1\">\n              \n              <!-- The Bar itself -->\n              <div class=\"bar-pill w-100 rounded-top\" \n                   [style.height.%]=\"bar.heightPercent\" \n                   [style.background-color]=\"bar.color\"\n                   (mousemove)=\"showTooltip($event, bar.label + ': ' + bar.value)\"\n                   (mouseleave)=\"hideTooltip()\">\n              </div>\n              \n              <!-- Label -->\n              <span class=\"text-muted text-truncate w-100 text-center mt-2\" style=\"font-size: 11px;\">\n                {{ bar.label }}\n              </span>\n\n            </div>\n          }\n        </div>\n      }\n\n      <!-- 2B. GROUPED BAR CHART -->\n      @if (type === 'grouped-bar') {\n        <div class=\"w-100 d-flex flex-column\" style=\"gap: 4px;\">\n          <div class=\"bar-chart-container w-100 d-flex align-items-end justify-content-around px-2\" style=\"height: 180px;\">\n            @for (grp of groupedBars; track $index) {\n              <div class=\"d-flex flex-column align-items-center w-100 px-1\" style=\"gap: 2px;\">\n                <!-- Two bars side-by-side -->\n                <div class=\"d-flex align-items-end w-100\" style=\"gap: 3px; height: 160px;\">\n                  <div class=\"flex-grow-1 rounded-top position-relative\"\n                       [style.height.%]=\"grp.bar1.heightPercent\"\n                       [style.background-color]=\"grp.bar1.color\"\n                       style=\"min-height: 6px; cursor:pointer;\"\n                       (mousemove)=\"showTooltip($event, dataLabel + ': $' + grp.bar1.value + 'M')\"\n                       (mouseleave)=\"hideTooltip()\">\n                  </div>\n                  <div class=\"flex-grow-1 rounded-top position-relative\"\n                       [style.height.%]=\"grp.bar2.heightPercent\"\n                       [style.background-color]=\"grp.bar2.color\"\n                       style=\"min-height: 6px; cursor:pointer;\"\n                       (mousemove)=\"showTooltip($event, data2Label + ': $' + grp.bar2.value + 'M')\"\n                       (mouseleave)=\"hideTooltip()\">\n                  </div>\n                </div>\n                <span class=\"text-muted text-truncate w-100 text-center mt-1\" style=\"font-size: 10px;\">\n                  {{ grp.label }}\n                </span>\n              </div>\n            }\n          </div>\n          <!-- Legend -->\n          <div class=\"d-flex justify-content-center gap-4 mt-2\">\n            <div class=\"d-flex align-items-center gap-1\">\n              <span class=\"rounded-circle\" [style.background-color]=\"customColors[0] || '#0d6efd'\" style=\"width:10px;height:10px;display:inline-block;\"></span>\n              <span class=\"small text-muted fw-semibold\">{{ dataLabel }}</span>\n            </div>\n            <div class=\"d-flex align-items-center gap-1\">\n              <span class=\"rounded-circle\" [style.background-color]=\"customColors[1] || '#20c997'\" style=\"width:10px;height:10px;display:inline-block;\"></span>\n              <span class=\"small text-muted fw-semibold\">{{ data2Label }}</span>\n            </div>\n          </div>\n        </div>\n      }\n\n      <!-- 3. DONUT CHART -->\n      @if (type === 'donut') {\n        <div class=\"d-flex align-items-center gap-4 flex-wrap flex-md-nowrap justify-content-center\">\n          \n          <div class=\"position-relative donut-svg-wrapper\">\n            <svg viewBox=\"0 0 120 120\" width=\"150\" height=\"150\">\n              <circle cx=\"60\" cy=\"60\" r=\"50\" fill=\"none\" stroke=\"#f1f3f9\" stroke-width=\"12\"></circle>\n              @for (seg of donutSegments; track $index) {\n                <circle cx=\"60\" \n                        cy=\"60\" \n                        r=\"50\" \n                        fill=\"none\" \n                        [attr.stroke]=\"seg.color\" \n                        stroke-width=\"12\" \n                        [attr.stroke-dasharray]=\"seg.dashArray\"\n                        [attr.stroke-dashoffset]=\"seg.dashOffset\"\n                        stroke-linecap=\"round\"\n                        transform=\"rotate(-90 60 60)\"\n                        class=\"donut-segment-ring\"\n                        (mousemove)=\"showTooltip($event, seg.tooltipText)\"\n                        (mouseleave)=\"hideTooltip()\">\n                </circle>\n              }\n            </svg>\n            <div class=\"donut-center-label d-flex flex-column align-items-center justify-content-center position-absolute\">\n              <span class=\"text-muted small uppercase\" style=\"font-size: 10px; font-weight: 700; letter-spacing: 0.5px;\">TOTAL</span>\n              <span class=\"fw-bold text-dark fs-5\">{{ donutTotal }}</span>\n            </div>\n          </div>\n\n          <!-- Legends -->\n          <div class=\"d-flex flex-column gap-2 text-start\">\n            @for (seg of donutSegments; track $index) {\n              <div class=\"d-flex align-items-center gap-2\">\n                <span class=\"legend-color-dot rounded-circle\" [style.background-color]=\"seg.color\" style=\"width: 10px; height: 10px;\"></span>\n                <span class=\"text-dark small fw-medium\" style=\"font-size: 13px;\">{{ seg.label }}</span>\n                <span class=\"text-muted small\">({{ seg.value }})</span>\n              </div>\n            }\n          </div>\n\n        </div>\n      }\n\n    </div>\n\n    <!-- Chart X Labels for Line Chart -->\n    @if (type === 'line') {\n      <div class=\"d-flex justify-content-between px-3 mt-1 border-top pt-2 text-muted\" style=\"font-size: 10px;\">\n        @for (lbl of labels; track $index) {\n          <span>{{ lbl }}</span>\n        }\n      </div>\n    }\n\n  </div>\n</div>\n", styles: [".chart-container-card {\n  border: 1px solid rgba(0, 0, 0, 0.04) !important;\n  background-color: #ffffff;\n}\n\n.min-h-200 {\n  min-height: 200px;\n}\n\n.chart-tooltip {\n  pointer-events: none;\n  font-size: 11px;\n  z-index: 1050;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);\n  transition: opacity 0.1s ease;\n  white-space: nowrap;\n  background-color: #0f172a !important; /* Rich slate background */\n}\n\n/* Line Chart CSS */\n.svg-line-chart {\n  overflow: visible;\n}\n\n.interactive-dot {\n  cursor: pointer;\n  transition: r 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), stroke-width 0.2s;\n}\n\n.interactive-dot:hover {\n  r: 8px;\n  stroke-width: 4px;\n}\n\n/* Bar Chart CSS */\n.bar-pill {\n  cursor: pointer;\n  transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275), filter 0.2s ease;\n  min-height: 10px;\n}\n\n.bar-pill:hover {\n  transform: scaleY(1.05);\n  filter: brightness(1.1);\n}\n\n.bar-wrapper {\n  max-width: 50px;\n}\n\n/* Donut Chart CSS */\n.donut-svg-wrapper {\n  width: 150px;\n  height: 150px;\n}\n\n.donut-center-label {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n  width: 80px;\n  height: 80px;\n  background: white;\n  border-radius: 50%;\n  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.05);\n}\n\n.donut-segment-ring {\n  cursor: pointer;\n  transition: stroke-width 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.donut-segment-ring:hover {\n  stroke-width: 15px;\n}\n\n.legend-color-dot {\n  display: inline-block;\n  flex-shrink: 0;\n}\n"] }]
    }], null, { type: [{
            type: Input
        }], title: [{
            type: Input
        }], labels: [{
            type: Input
        }], data: [{
            type: Input
        }], data2: [{
            type: Input
        }], dataLabel: [{
            type: Input
        }], data2Label: [{
            type: Input
        }], customColors: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ChartsComponent, { className: "ChartsComponent", filePath: "src/app/components/charts/charts.ts", lineNumber: 41 }); })();
