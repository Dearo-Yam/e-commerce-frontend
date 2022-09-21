import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-total-order-shipped',
  templateUrl: './total-order-shipped.component.html',
  styleUrls: ['./total-order-shipped.component.css']
})
export class TotalOrderShippedComponent implements OnInit {

  totalOrdersShipped: any;

  constructor(private _ordersService: OrdersService) { }

  ngOnInit(): void {
    this._ordersService.getTotalOrdersShipped().subscribe(totalOrdersShipped => {
      this.totalOrdersShipped = totalOrdersShipped;
    })
  }

}
