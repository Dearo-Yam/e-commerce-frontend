import { Component, OnInit } from '@angular/core';
import { Order }  from '../order';
// import { ITEMS } from '../mock-items';
import { MockOrdersService } from '../mock-orders.service';


@Component({
  selector: 'app-mock-orders',
  templateUrl: './mock-orders.component.html',
  styleUrls: ['./mock-orders.component.css']
})
export class MockOrdersComponent implements OnInit {

  orders: Order[] = [];
  
  constructor(private orderService: MockOrdersService) {}
  
  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getOrders()
    .subscribe(orders => this.orders = orders);
  }
}
