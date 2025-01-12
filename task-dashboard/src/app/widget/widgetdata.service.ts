import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WidgetDataService {

  constructor() { }

  getChartData(): Observable<any> {
    const mockData = {
      animationEnabled: true,
      title: {
        text: 'Sales Data',
      },
      axisX: {
        title: 'Months',
        interval: 1,
      },
      axisY: {
        title: 'Sales',
        includeZero: false,
      },
      data: [
        {
          type: 'column',
          dataPoints: [
            { label: 'January', y: 5 },
            { label: 'February', y: 20 },
            { label: 'March', y: 36 },
            { label: 'April', y: 10 },
            { label: 'May', y: 10 },
          ],
        },
      ],
    };

    return of(mockData);
  }
}
