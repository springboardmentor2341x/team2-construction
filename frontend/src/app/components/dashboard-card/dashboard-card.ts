import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-card.html',
  styleUrl: './dashboard-card.css'
})
export class DashboardCardComponent {
  @Input() title: string = '';
  @Input() value: string | number = '';
  @Input() icon: string = 'bi-activity';
  
  // Color presets: primary, success, danger, warning, info
  @Input() colorType: 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' = 'primary';
  
  @Input() trendValue: string = '';
  @Input() trendDirection: 'up' | 'down' | 'flat' | 'none' = 'none';
  @Input() subtitle: string = '';
}
