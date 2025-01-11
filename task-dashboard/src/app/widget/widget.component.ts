import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

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

  constructor() {}

  ngOnInit(): void {
    this.initializeChart();
  }

  initializeChart(): void {
    this.chartOptions = {
      title: {
        text: "Basic Column Chart in Angular"
      },
      data: [{
        type: "column",
        dataPoints: [
          { label: "Apple",  y: 10  },
          { label: "Orange", y: 15  },
          { label: "Banana", y: 25  },
          { label: "Mango",  y: 30  },
          { label: "Grape",  y: 28  }
        ]
      }]                
    };
  }
}
