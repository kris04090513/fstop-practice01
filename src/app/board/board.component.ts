import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  boardItem: string[] = ["臺幣帳戶", "外幣帳戶", "數位帳戶"]; // ngFor
  title1: string = "臺幣帳戶";
  title2: string = "外幣帳戶";
  title3: string = "數位帳戶";

  eyeOpen = { open: true, close: false }; // 眼睛icon開關
  amount: string = "22450";
  // boardSub: string[] = ["臺幣", "外幣", "數位"]
  taiwanAccounts: string[] = ['臺幣帳戶', '1234-0000-0000-1253', '1234-5555-6666-7777']// 下拉選單選擇對應帳戶
  boardSub: string = "台幣"
  @ViewChild('select') select!: ElementRef;
  twCount: string[] = ["120,111", "123,002", "555,222"];// 下拉選單對應帳戶的＄＄對應

  cardShow = { card01: true, card02: false }; // 顯示不同卡片開關
  constructor() { }

  ngOnInit(): void {
  }

  eyeChange(): void {
    // this.eyeOpen.open = !this.eyeOpen.open;
    if (this.eyeOpen.open) {
      this.eyeOpen.open = !this.eyeOpen.open;
      this.eyeOpen.close = !this.eyeOpen.close;
      this.amount = '-';

    } else if (this.eyeOpen.close) {
      this.eyeOpen.open = !this.eyeOpen.open;
      this.eyeOpen.close = !this.eyeOpen.close;
      this.amount = this.amount;
    }
  }
  subChange(v: any): void {
    console.log(v.currentTarget.dataset.value);
    this.boardSub = v.currentTarget.dataset.value;
    this.amount = v.currentTarget.dataset.money;


    // if (this.boardSub === "臺幣") {
    //   const countSelect = this.select.nativeElement.value;
    //   this.amount = this.twCount[countSelect];
    //   if (countSelect == 1) {

    //   }
    // }
  }

  accountChange(v: any): void {
    const accountSelect = this.select.nativeElement.value; // 去找到點到的是第幾個select 的選項

    console.log("countSelect", accountSelect);
    this.amount = this.twCount[accountSelect];
    // 換卡面
    if (accountSelect === '0') {
      this.cardShow.card01 = true;
      this.cardShow.card02 = false;
    }

    if (accountSelect === '1') {
      this.cardShow.card01 = true;
      this.cardShow.card02 = false;
    } else if (accountSelect === '2') {
      this.cardShow.card01 = false;
      this.cardShow.card02 = true;
    }

  }
}
