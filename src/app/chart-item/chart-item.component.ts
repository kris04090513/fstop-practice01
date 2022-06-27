import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-item',
  templateUrl: './chart-item.component.html',
  styleUrls: ['./chart-item.component.css']
})
export class ChartItemComponent implements OnInit {
  @Input() chartTitle = "近14天收支123"
  constructor() { }

  ngOnInit(): void {
  }

}
