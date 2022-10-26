import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  lineChartData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: [89, 34, 43, 54, 28, 74, 93],
        label: 'Sales Percent',
        fill: true,
        backgroundColor: 'rgba(255, 255, 0, 0.3',
        borderColor: 'black',
        tension: 0.5
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
