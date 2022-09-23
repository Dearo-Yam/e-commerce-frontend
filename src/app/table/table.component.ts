import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Order } from '../order';
import { OrderService } from '../order.service';
=======
import { OrdersService } from '../orders.service';
>>>>>>> dev

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

<<<<<<< HEAD
  orders: Order[]= [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getOrders()
    .subscribe(orders => this.orders = orders);
=======
  orders: any;
  status: string[];
  //id: number;
  //s: string;
  constructor(private tableService : OrdersService) {
    this.status = ['Pending', 'Shipped', 'Cancelled'];
   }

   onUpdate(s: string): void{
    this.tableService.updateOrderStatus()
    //this.s = s;
   }

  ngOnInit(): void {
    this.tableService.getPendingOrders().subscribe(orders =>
      {
        this.orders = orders;
      })
>>>>>>> dev
  }

}
