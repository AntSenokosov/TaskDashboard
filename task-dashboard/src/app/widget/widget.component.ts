import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartData } from 'chart.js';
import { FormsModule } from '@angular/forms';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [CommonModule, FormsModule, BaseChartDirective ],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css'
})
export class WidgetComponent implements OnInit {
  @Input() type: string = ''; 
  @Input() widget: any;
  chartType: ChartType = 'line';
  chartOptions: ChartOptions = {
    responsive: true,
  };

  chartData: ChartData<'line'> = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [10, 20, 30, 40, 50],
        borderColor: 'blue',
        fill: false
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
    if (this.type === 'chart') {
      console.log('Chart widget initialized');
    }
  }
}
