import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { } from "highcharts-angular";
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as DataActions from "./data.actions";
import { Data } from "./data.model";
import { AppState } from './app.state';
import { map } from 'rxjs/operators'
import { Chart } from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data: Observable<Data[]>;
  chartOptions: Observable<any>;
  highcharts = Highcharts;

  constructor(private store: Store<AppState>) {
    this.data = this.store.select('data')
  }

  ngOnInit(): void {

    this.chartOptions = this.data.pipe(map(d => ({
      chart: {
        type: "spline"
      },
      title: {
        text: "Monthly Site Visitor"
      },
      xAxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      yAxis: {
        title: {
          text: "Visitors"
        }
      },
      series: d
    })))

  }






  onClick() {

    this.store.dispatch(new DataActions.AddData({ name: 'hello', data: [3251, 325, 5324, 525] }))

  }

}
