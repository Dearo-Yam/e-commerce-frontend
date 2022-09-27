import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-shipped-orders',
  templateUrl: './shipped-orders.component.html',
  styleUrls: ['./shipped-orders.component.css']
})
export class ShippedOrdersComponent implements OnInit {
  orders:any;
    constructor(private _ordersService: OrdersService) { }
  
    ngOnInit(): void {
      this._ordersService.getShippedOrders().subscribe(orders =>{
        this.orders = orders;
      })
    }

}
