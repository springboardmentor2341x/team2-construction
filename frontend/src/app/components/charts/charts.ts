import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ChartPoint {
  x: number;
  y: number;
  val: number;
  label: string;
}

interface BarItem {
  heightPercent: number;
  value: number;
  label: string;
  color: string;
}

interface GroupedBarGroup {
  label: string;
  bar1: { heightPercent: number; value: number; color: string };
  bar2: { heightPercent: number; value: number; color: string };
}

interface DonutSegment {
  dashArray: string;
  dashOffset: number;
  percent: number;
  value: number;
  label: string;
  color: string;
  tooltipText: string;
}

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './charts.html',
  styleUrl: './charts.css'
})
export class ChartsComponent implements OnInit, OnChanges {
  @Input() type: 'line' | 'bar' | 'donut' | 'grouped-bar' = 'line';
  @Input() title: string = '';
  @Input() labels: string[] = [];
  @Input() data: number[] = [];
  @Input() data2: number[] = [];
  @Input() dataLabel: string = 'Committed';
  @Input() data2Label: string = 'Spent';
  @Input() customColors: string[] = [];

  // Default theme colors
  defaultColors = ['#0d6efd', '#198754', '#ffc107', '#dc3545', '#0dcaf0', '#6c757d'];

  // Prepared data models
  linePoints: ChartPoint[] = [];
  pathD: string = '';
  areaD: string = '';
  
  bars: BarItem[] = [];
  groupedBars: GroupedBarGroup[] = [];
  
  donutSegments: DonutSegment[] = [];
  donutTotal: number = 0;

  activeTooltip: { x: number; y: number; text: string; visible: boolean } = {
    x: 0,
    y: 0,
    text: '',
    visible: false
  };

  ngOnInit() {
    this.processData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] || changes['data2'] || changes['labels'] || changes['type']) {
      this.processData();
    }
  }

  processData() {
    if (!this.data || this.data.length === 0) return;

    if (this.type === 'line') {
      this.generateLineChart();
    } else if (this.type === 'bar') {
      this.generateBarChart();
    } else if (this.type === 'grouped-bar') {
      this.generateGroupedBarChart();
    } else if (this.type === 'donut') {
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
      
      const segment: DonutSegment = {
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

  showTooltip(event: MouseEvent, text: string) {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
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
}
