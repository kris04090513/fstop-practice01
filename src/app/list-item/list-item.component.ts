import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { fromEvent, map, Observable } from 'rxjs';

export interface listArr {
  date: string,
  detail: string,
  money: number
}

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  get: any;
  @Input() datalist= { date: '', detail: '', money: 0 }; //帳戶明細


  constructor() { }


  ngOnInit(): void {


  }


}
