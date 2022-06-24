import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BoardComponent } from './board/board.component';
import { SelectItemComponent } from './select-item/select-item.component';
import { ListBoardComponent } from './list-board/list-board.component';
import { ListItemComponent } from './list-item/list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BoardComponent,
    SelectItemComponent,
    ListBoardComponent,
    ListItemComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
