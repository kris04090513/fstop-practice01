import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

export interface accArr {
  titleAcc: string,
  twCount: string,
  card: number
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})

export class BoardComponent implements OnInit {
  boardItem: string[] = ['臺幣帳戶', '外幣帳戶', '數位帳戶']; // ngFor
  title1: string = '臺幣帳戶';
  title2: string = '外幣帳戶';
  title3: string = '數位帳戶';

  eyeOpen = { open: true, close: false }; // 眼睛icon開關
  amount: string = '22450';
  // boardSub: string[] = ["臺幣", "外幣", "數位"]
  taiwanAccounts: string[] = [
    '臺幣帳戶',
    '1234-0000-0000-1253',
    '1234-1111-1111-1111',
    '1234-2222-2222-2222',
    '1234-3333-3333-3333',
    '1234-4444-4444-4444',
    '1234-5555-5555-5555',
    '1234-6666-6666-6666',
  ]; // 下拉選單選擇對應帳戶
  @ViewChild('select') select!: ElementRef;
  // twCount: string[] = ["120,111", "123,002", "555,222","122,223","321,111","552,002","112,002","123,456"];// 下拉選單對應帳戶的＄＄對應
  boardSub: string = '台幣';

  twAccMoney: any = [
    { titleAcc: '臺幣帳戶', twCount: 120111123, card: 'card1.png' },
    { titleAcc: '1234-0000-0000-1001', twCount: 120111, card: 'card1.png' },
    { titleAcc: '1234-2222-2222-0002', twCount: 120222, card: 'card2.png' },
    { titleAcc: '1234-3333-3333-0003', twCount: 120333, card: 'card3.png' },
    { titleAcc: '1234-4444-4444-0004', twCount: 120444, card: 'card4.png' },
    { titleAcc: '1234-5555-5555-0005', twCount: 120555, card: 'card5.png' },
    { titleAcc: '1234-6666-6666-0006', twCount: 120666, card: 'card6.png' },
    { titleAcc: '1234-7777-7777-0007', twCount: 120777, card: 'card7.png' },
  ];

  cardShow = { card01: true, card02: false }; // 顯示不同卡片開關
  constructor() { }

  ngOnInit(): void {

  }
  // 帳戶金額隱藏/顯示
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
  //換選擇的帳戶 台幣/外幣/數位
  subChange(v: any, index: number): void {
    // data-set 寫法
    // console.log(v.currentTarget.dataset.value);
    // this.boardSub = v.currentTarget.dataset.value;
    // this.amount = v.currentTarget.dataset.money;

    this.boardSub = this.boardItem[index];
    // console.log(index)
    // console.log(this.boardSub)
  }

  accountChange(v: any): void {
    // let i = this.twCount.length;
    // console.log("length",i)

    const accountSelect = this.select.nativeElement.value; // 去找到點到的是第幾個select 的選項
    console.log("123", this.twAccMoney[accountSelect].titleAcc)
    console.log('countSelect', accountSelect);
    this.amount = this.twAccMoney[accountSelect].twCount;
    console.log('twCount', this.amount);

    this.cardShow = this.twAccMoney[accountSelect].card;
    console.log(" this.cardShow", this.cardShow);

    // if (accountSelect === this.twAccMoney[accountSelect]) {

    // }

    // 換卡面
    // if (accountSelect === '0') {
    //   this.cardShow.card01 = true;
    //   this.cardShow.card02 = false;
    // }
    // if (accountSelect === '1') {
    //   this.cardShow.card01 = true;
    //   this.cardShow.card02 = false;
    // } else if (accountSelect === '2') {
    //   this.cardShow.card01 = false;
    //   this.cardShow.card02 = true;
    // }
  }
}
