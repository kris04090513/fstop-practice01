import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { filter, from, fromEvent, map, Observable, of } from 'rxjs';

export interface listArr {
  date: string,
  detail: string,
  money: number
}

@Component({
  selector: 'app-list-board',
  templateUrl: './list-board.component.html',
  styleUrls: ['./list-board.component.css']
})
export class ListBoardComponent implements OnInit {

  get: any;
  datalist: { date: string, detail: string, money: number }[] = []; //帳戶明細
  dataAll: { date: string, detail: string, money: number }[] = [];
  // datalist =  { date: 'string', detail: 'string', money: 1 }; //帳戶明細
  // date: string = "2022/01/05";
  // detail: string = "手續費狒狒"
  // money: number = 0;
  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    // 去取得json 資料
    let url = 'assets/data/list-data.json'
    let getDataAPI = (): Observable<any> => {
      return this.http.get<any>(url)
    }

    getDataAPI().subscribe(data => {
      console.log(data); // 取出資料Arr
      console.log("34 datalist", this.datalist) // 空陣列
      this.datalist = data; // 將資料塞回空陣列中
      // this.getFilterDate();
      // this.filterChange;
    });

  }



  filterChange(v: any) {
    this.dataAll = this.datalist;
    console.log(v.currentTarget.dataset.value);
    const value = v.currentTarget.dataset.value
    const today = new Date();
    console.log('this.datalist', this.datalist);
    // console.log(today)
    const filterDate = new Date(today.setDate(today.getDate() - Number(value)));
    console.log("-7777888", filterDate);
    const filterDataList = this.dataAll.filter(datalist => { return new Date(datalist.date) > filterDate })
    console.log('-777', filterDataList);
    this.dataAll = filterDataList;


  }


}
