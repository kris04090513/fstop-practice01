import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-my-doughnut-chart',
  templateUrl: './my-doughnut-chart.component.html',
  styleUrls: ['./my-doughnut-chart.component.css'],
})
export class MyDoughnutChartComponent implements OnInit {
  // Doughnut
  // public doughnutChartLabels: string[] = [
  //   '近14',
  //   'In-Store Sales',
  //   'Mail-Order Sales',
  //   'Mail-Order Sales',
  // ];
  public doughnutChartData: ChartData<'doughnut'> = {
    // labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100, 300],
        
        backgroundColor: ['#F78EBD', '#9197F2', '#FEC133', '#8EFB99'],
      },
      // { data: [50, 150, 120] },
      // { data: [250, 130, 70] },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  constructor() {}

  ngOnInit(): void {}
}
