import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, fromEvent, map, Observable, of } from 'rxjs';

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
      // this.datalist.map(data => { data })
      // console.log("37 datalist", this.datalist)
     

      // data.map((value, index) => value)
    });
    // const Arr = of(getDataAPI);
    // const ArrOut = Arr.pipe(
    //   map(val => val)
    // )
    // const subscribe = Arr.subscribe(val => con);

  }




}
