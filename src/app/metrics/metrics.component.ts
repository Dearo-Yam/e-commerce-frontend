import { formatDate } from '@angular/common';
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
  weeklyShipping = [];
  totalWeeklyShipped: any;
  weekDates: string[] = [];

  constructor(private _ordersService: OrdersService) { }

  ngOnInit(): void {
    this.refreshData();
    this.getWeekDates();

    setInterval(() => {
      this.refreshData();
    }, 5000);
  }

  refreshData(): void {
    this.getTotalOrdersShipped();
    this.getAvgTimeToShip();
    this.getTopSellingItems();
    this.getWeeklyShipping();
  }

  getSum() : number {
    let sum = 0;
    for(let i = 0; i < this.weeklyShipping.length; i++) {
      sum += this.weeklyShipping[i];
    }
    return sum;
  }

  getWeekDates() {
    let currDayOfWeek = new Date().getDay();

    let startOfWeek = new Date();
    startOfWeek.setDate(startOfWeek.getDate() - currDayOfWeek + 1);
    
    for(let i = 1; i < 6; i++) {
      if(i <= currDayOfWeek) {
        this.weekDates[i - 1] = (startOfWeek.getMonth() + 1) + "/" + startOfWeek.getDate();
      }
      else {
        let previousWeek = new Date(startOfWeek);
        previousWeek.setDate(previousWeek.getDate() - 7);
        this.weekDates[i - 1] = (previousWeek.getMonth() + 1) + "/" + previousWeek.getDate();
      }
      
      startOfWeek.setDate(startOfWeek.getDate() + 1);
    }
  }

  getWeeklyShipping() {
    this._ordersService.getWeeklyShipping().subscribe(weeklyShipping => {
      this.weeklyShipping = weeklyShipping[0];
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
