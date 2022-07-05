import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-my-doughnut-chart',
  templateUrl: './my-doughnut-chart.component.html',
  styleUrls: ['./my-doughnut-chart.component.css'],
})
export class MyDoughnutChartComponent implements OnInit {
  get: any;
  @Input() chartDataAll = { date: '', detail: '', money: 0 }; //帳戶明細
  moneyData: number = 0;
  // @Input() chart7: number[] = [];
  @Input() chartDays: number[] = [100,100,100,100];
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
        // data:[25, 35, 10, 50],
        data: this.chartDays,

        backgroundColor: ['#F78EBD', '#9197F2', '#FEC133', '#8EFB99'],
        hoverBackgroundColor: ['#F78EBD', '#9197F2', '#FEC133', '#8EFB99'],
        borderColor: ['#F78EBD', '#9197F2', '#FEC133', '#8EFB99'],
        hoverBorderColor: ['#F78EBD', '#9197F2', '#FEC133', '#8EFB99'],
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

  constructor() {
    // console.log('data--------------chartDatalist', this.chartData);
  }

  ngOnInit(): void {
    console.log('data--------------chartDatalist', this.chartDataAll);
    console.log(this.chartDays);
  }
  ngOnChanges(changes: SimpleChanges): void {
    const data = {
      datasets: [
        // { data: [350, 450, 100, 250] }
        { data: changes['chartDays'].currentValue }
      ],
     
    };
    this.doughnutChartData = data;
  }
}
