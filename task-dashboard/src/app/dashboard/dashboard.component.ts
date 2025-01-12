import { Component, OnInit } from '@angular/core';
import { CompactType, GridsterConfig, GridsterItem, GridsterModule, GridType } from 'angular-gridster2'
import { CommonModule } from '@angular/common';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, GridsterModule, WidgetComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  public dashboard! : Array<any>;
  public options!: GridsterConfig;
  
  ngOnInit(): void {
    this.options = {
      gridType: GridType.Fit,
      compactType: CompactType.None,
      draggable: { enabled: true },
      fixedColWidth: 500,
      fixedRowHeight: 500,
    };

    this.dashboard = [
      { type: 'widget', x: 0, y: 0, cols: 2, rows: 2 },
      { type: 'empty', x: 2, y: 0, cols: 2, rows: 2 },
    ];
  }
}
