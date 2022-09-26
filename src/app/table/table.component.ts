import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { __param } from 'tslib';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  orders: any;
  status: string[];
  constructor(private orderService: OrdersService) {
    this.status = ['Pending', 'Shipped', 'Cancelled'];
  }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getTableOrders()
    .subscribe(orders => this.orders = orders);
  }


  //  onUpdate(s: string): void{
  //   this.orderService.updateOrderStatus()
  //   //this.s = s;
  //  }

  // ngOnInit(): void {
  //   this.orderService.getPendingOrders().subscribe(orders =>
  //     {
  //       this.orders = orders;
  //     })

  // }
}