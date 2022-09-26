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

  constructor(private _ordersService: OrdersService) { }

  ngOnInit(): void {
    this.getTotalOrdersShipped();
    this.getAvgTimeToShip();

    setInterval(() => {
      this.getTotalOrdersShipped();
      this.getAvgTimeToShip();
    }, 5000);
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
