import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { WidgetDataService } from './widgetdata.service';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [CommonModule, FormsModule, CanvasJSAngularChartsModule],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css'
})
export class WidgetComponent implements OnInit {
  @Input() widget: any;

  chartOptions: any;

  constructor(private widgetDataService: WidgetDataService) {}

  ngOnInit(): void {
    this.initializeChart();
  }

  initializeChart(): void {
    this.widgetDataService.getChartData().subscribe((data) => {
      this.chartOptions = data;
    });
  }
}
