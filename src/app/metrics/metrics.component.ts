import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {
  totalOrdersShipped: any;
  avgTime: any;
  topSellingItems: any;
  weeklyShipping: any;
  totalWeeklyShipped: any;

  constructor(private _ordersService: OrdersService) { }

  ngOnInit(): void {
    this.getTotalOrdersShipped();
    this.getAvgTimeToShip();
    this.getTopSellingItems();
    this.getWeeklyShipping();

    setInterval(() => {
      this.getTotalOrdersShipped();
      this.getAvgTimeToShip();
      this.getTopSellingItems();
      this.getWeeklyShipping();
    }, 5000);
  }

  getSum() : number {
    let sum = 0;
    for(let i = 0; i < this.weeklyShipping.length; i++) {
      sum += this.weeklyShipping[i][1];
    }
    return sum;
  }

  getWeeklyShipping() {
    this._ordersService.getWeeklyShipping().subscribe(weeklyShipping => {
      this.weeklyShipping = weeklyShipping;
    })
  }

  getTopSellingItems() {
    this._ordersService.getTopSellingItems().subscribe(topSellingItems => {
      this.topSellingItems = topSellingItems;
    });
  }

  getTotalOrdersShipped() {
    this._ordersService.getTotalOrdersShipped().subscribe(totalOrdersShipped => {
      this.totalOrdersShipped = totalOrdersShipped;
    })
  }

  getAvgTimeToShip() {
    this._ordersService.getAvgTimeToShipp().subscribe(avgTime => {
      this.avgTime = avgTime;
    })
  }
}
