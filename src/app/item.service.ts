import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() {
  }

  get<T>(url: string): Observable<any> {
    throw new Error('Method not implemented.');
  }



  getBoardItem() {
    let boardItemData = [{ titleAcc: '臺幣帳戶', twCount: 120111123, card: 'card1.png' },
    { titleAcc: '1234-0000-0000-1001', twCount: 120111, card: 'card1.png' },
    { titleAcc: '1234-2222-2222-0002', twCount: 120222, card: 'card2.png' },
    { titleAcc: '1234-3333-3333-0003', twCount: 120333, card: 'card3.png' },
    { titleAcc: '1234-4444-4444-0004', twCount: 120444, card: 'card4.png' },
    { titleAcc: '1234-5555-5555-0005', twCount: 120555, card: 'card5.png' },
    { titleAcc: '1234-6666-6666-0006', twCount: 120666, card: 'card6.png' },
    { titleAcc: '1234-7777-7777-0007', twCount: 120777, card: 'card7.png' },];
    return boardItemData;
  }

  getListBoardItem() {
    let url = 'assets/data/list-data.json'
    let getDataAPI = (): Observable<any> => {
      return this.get<any>(url)
    }

    getDataAPI().subscribe(data => {
      console.log(data); // 取出資料Arr
      return data

    });


  }


}
