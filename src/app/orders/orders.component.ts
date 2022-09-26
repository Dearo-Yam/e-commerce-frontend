import { Component, OnInit } from '@angular/core';
import { Order }  from '../order';
// import { ITEMS } from '../mock-items';
import { OrdersService } from '../orders.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: any;
  
  constructor(private itemService: OrdersService) {}
  
  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.itemService.getPendingOrders()
    .subscribe(orders => this.orders = orders);
  }

}