import { HttpClient } from '@angular/common/http';
import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { filter, from, fromEvent, map, Observable, of } from 'rxjs';
import { ItemService } from '../item.service';
export interface dataItemI {
  date: string;
  detail: string;
  money: number;
}
export interface chartItemI {
  title: string;
  bgc: string;
}
@Component({
  selector: 'app-list-board',
  templateUrl: './list-board.component.html',
  styleUrls: ['./list-board.component.css'],
})
export class ListBoardComponent implements OnInit {
  // get: any;
  datalist: { date: string; detail: string; money: number }[] = []; //帳戶明細
  dataAll: { date: string; detail: string; money: number }[] = []; // 接收資料存放的的放
  dataItem: any; // 接收清單資料  一定要用any 因為傳回來的是observable 是物件不是陣列
  chartItem!: Array<chartItemI>; // 接收chart項目資料 傳回來的為陣列
  day7: number = 7;
  day14: number = 14;
  chartData: { date: string; detail: string; money: number }[] = [];
  chartDataAll: any;
  chartDays: number[] = [];
  chart7: number[] = [25, 35, 10, 50];
  chart14: number[] = [50, 80, 70, 100];
  // datalist =  { date: 'string', detail: 'string', money: 1 }; //帳戶明細
  // chartColor = ['#F78EBD', '#9197F2', '#FEC133', '#8EFB99'];
  // date: string = "2022/01/05";
  // detail: string = "手續費狒狒"
  // money: number = 0;
  // chartItem = [{ title: '近14天收支', bgc: '#F78EBD' },
  // { title: '近14天轉入金額', bgc: '#9197F2' },
  // { title: '近14天轉出金額', bgc: '#FEC133' },
  // { title: '近14天利息', bgc: '#8EFB99' }];

  // constructor(private http: HttpClient) { }
  private itemService: ItemService;
  constructor(itemService: ItemService) {
    this.itemService = itemService;
  }

  ngOnInit(): void {
    // 從itemService 接出清單資料
    this.itemService.getListBoardItem().subscribe((x) => {
      this.dataItem = x;
      // console.log('------X', x);
      // console.log('------this.dataItem', this.dataItem);
      this.datalist = this.dataItem;
      // console.log('123', this.datalist);
      // this.chartFilter();
    });

    // 從itemService  接出chart子項目
    let getChartItemData = this.itemService.getChartItem(30);
    console.log('getChartItem', getChartItemData);
    this.chartItem = getChartItemData;

    // 去取得json 資料
    // let url = 'assets/data/list-data.json'
    // let getDataAPI = (): Observable<any> => {
    //   return this.http.get<any>(url)
    // }
    // getDataAPI().subscribe(data => {
    //   console.log(data); // 取出資料Arr
    //   console.log("34 datalist", this.datalist) // 空陣列
    //   this.datalist = data; // 將資料塞回空陣列中
    // });
  }

  // 拿到資料後再做篩選的動作
  filterChange(v: number) {
    let getChartItemData = this.itemService.getChartItem(v);
    console.log('getChartItem', getChartItemData);
    this.chartItem = getChartItemData;

    this.dataAll = this.dataItem;
    // console.log(v.currentTarget.dataset.value);
    // const value = v.currentTarget.dataset.value
    // this.datalist = this.dataAll;
    const today = new Date();
    // console.log('this.datalist', this.datalist);
    // console.log('this.dataItem', this.dataItem);
    // console.log(today)
    const filterDate = new Date(today.setDate(today.getDate() - Number(v)));
    // console.log("-7777888", filterDate);

    const filterDataList = this.dataAll.filter((datalist) => {
      return new Date(datalist.date) > filterDate;
    });
    console.log('-777', filterDataList);

    this.datalist = filterDataList;
    if (v === 7) {
      this.chartDays = [25, 35, 10, 50];
      console.log('chartDays0007', this.chartDays);
    } else {
      this.chartDays = [50, 80, 70, 100];
      console.log('chartDays14', this.chartDays);
    }
  }

  // chartFilter() {
  //   this.chartData = this.datalist;
  //   console.log('CHARTLIST', this.datalist);
  //   console.log('CHARTDATA', this.chartData);
  //   const chartDatalist = this.chartData.filter((chartData) => {
  //     return chartData.money > 1000;
  //   }).length;
  //   console.log('>1000', chartDatalist);
  //   console.log('>1000', chartDatalist);
  //   this.chartDataAll = chartDatalist;
  //   console.log('chartDATAALL', this.chartDataAll);
  // }
}
