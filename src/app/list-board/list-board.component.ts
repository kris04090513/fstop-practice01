import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { filter, from, fromEvent, map, Observable, of } from 'rxjs';
import { ItemService } from '../item.service';
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
  dataAll: { date: string, detail: string, money: number }[] = []; // 接收資料存放的的放
  // datalist =  { date: 'string', detail: 'string', money: 1 }; //帳戶明細
  // chartColor = ['#F78EBD', '#9197F2', '#FEC133', '#8EFB99'];
  // date: string = "2022/01/05";
  // detail: string = "手續費狒狒"
  // money: number = 0;
  chartItem = [{ title: '近14天收支', bgc: '#F78EBD' },
  { title: '近14天轉入金額', bgc: '#9197F2' },
  { title: '近14天轉出金額', bgc: '#FEC133' },
  { title: '近14天利息', bgc: '#8EFB99' }];

  constructor(private http: HttpClient) { }
  // private itemService: ItemService;
  // constructor(itemService: ItemService) {
  //   this.itemService = itemService;
  // }


  ngOnInit(): void {
    // let getItem = this.itemService.getListBoardItem(); // 從item service 去呼叫要傳入的資料
    // console.log('getItem', getItem);
    // 去取得json 資料
    let url = 'assets/data/list-data.json'
    let getDataAPI = (): Observable<any> => {
      return this.http.get<any>(url)
    }

    getDataAPI().subscribe(data => {
      console.log(data); // 取出資料Arr
      console.log("34 datalist", this.datalist) // 空陣列
      this.datalist = data; // 將資料塞回空陣列中
      // this.filterChange;
    });

  }


  filterChange(v: number) {
    this.dataAll = this.datalist;
    // console.log(v.currentTarget.dataset.value);
    // const value = v.currentTarget.dataset.value
    const today = new Date();
    console.log('this.datalist', this.datalist);
    // console.log(today)
    const filterDate = new Date(today.setDate(today.getDate() - Number(v)));
    console.log("-7777888", filterDate);
    const filterDataList = this.dataAll.filter(datalist => { return new Date(datalist.date) > filterDate })
    console.log('-777', filterDataList);
    this.dataAll = filterDataList;

  }

}
