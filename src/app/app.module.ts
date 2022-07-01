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
import { ItemService } from './item.service';
import { NgChartsModule } from 'ng2-charts';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BoardComponent,
    SelectItemComponent,
    ListBoardComponent,
    ListItemComponent,
    ChartItemComponent,
    MyDoughnutChartComponent,
    MyBarChartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgChartsModule,
  ],
  providers: [ItemService],
  bootstrap: [AppComponent],
})
export class AppModule {}
