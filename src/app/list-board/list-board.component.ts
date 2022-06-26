import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
// import { Http, Response, Headers, RequestOptions } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

// https://ithelp.ithome.com.tw/articles/10186703
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { catchError, retry, timeout } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable()
@Component({
  selector: 'app-list-board',
  templateUrl: './list-board.component.html',
  styleUrls: ['./list-board.component.css']
})
export class ListBoardComponent implements OnInit {
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    // const result = new Subject<any>(); 
    // result.subscribe((rs) => {
    //   console.log(rs);
    // });

    // result.next("1");
    // result.next("2");

  }

  // private _jsonURL = 'assets/data/list-data.json';

 
}
