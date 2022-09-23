import { Component, OnInit } from '@angular/core';
import { Order }  from '../order';
// import { ITEMS } from '../mock-items';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];
  
  constructor(private itemService: OrderService) {}
  
  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.itemService.getOrders()
    .subscribe(orders => this.orders = orders);
  }

}