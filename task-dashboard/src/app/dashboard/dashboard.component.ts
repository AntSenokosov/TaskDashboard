import { Component } from '@angular/core';
import { IDashboardModel } from './dashboard.model';
import { GridsterConfig, GridsterModule } from 'angular-gridster2'
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
    { type: 'chart', id: 2, x: 3, y: 0, rows: 2, cols: 3 }
  ];

  options: GridsterConfig = {
    gridType: 'fit',
    compactType: 'compactUp',
    itemChangeCallback: (item) => console.log(item),
    itemResizeCallback: (item) => console.log(item)
  };
}
