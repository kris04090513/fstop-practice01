import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BoardComponent } from './board/board.component';
import { SelectItemComponent } from './select-item/select-item.component';
import { ListBoardComponent } from './list-board/list-board.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartItemComponent } from './chart-item/chart-item.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BoardComponent,
    SelectItemComponent,
    ListBoardComponent,
    ListItemComponent,
    ChartItemComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
