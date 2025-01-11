import { Component } from '@angular/core';
import { IDashboardModel } from './dashboard.model';
import { CompactType, GridsterConfig, GridsterModule, GridType } from 'angular-gridster2'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, GridsterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  dashboard = [
    { type: 'chart', id: 1, x: 0, y: 0, rows: 2, cols: 3 },
    { type: 'chart', id: 2, x: 3, y: 0, rows: 2, cols: 3 },
  ];

  options: GridsterConfig = {
    gridType: GridType.Fit,
    compactType: CompactType.None,
    itemChangeCallback: (item) => console.log(item),
    itemResizeCallback: (item) => console.log(item)
  };
}
