import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent implements OnInit {

  doughnutChartData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: [89, 34, 43, 54, 28, 74, 93],
        label: 'Sales Percent',
        backgroundColor: [
          'rgba(255, 0, 25, 0.7)',
          'rgba(0, 255, 25, 0.7)',
          'rgba(0, 25, 255, 0.7)',
          'rgba(67, 25, 255, 0.7)',
          'rgba(67, 25, 78, 0.7)',
          'rgba(167,125, 78, 0.7)',
          'rgba(67, 255, 178, 0.7)',
        ],
        cutout: "80%"
      }
    ]
  }

  doughnutChartOption = {
    responsive: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
