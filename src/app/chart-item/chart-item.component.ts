import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-item',
  templateUrl: './chart-item.component.html',
  styleUrls: ['./chart-item.component.css'],
})
export class ChartItemComponent implements OnInit {
  @Input() chartItem = { title: '', bgc: '' };
  @Input() day7: number = 7;
  @Input() day14: number = 14;
  constructor() {}

  ngOnInit(): void {}
}
