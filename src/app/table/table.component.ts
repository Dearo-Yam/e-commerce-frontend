import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  orders:any;
    constructor(private _ordersService: OrdersService) { }
  
    ngOnInit(): void {
      this._ordersService.getAllOrders().subscribe(orders =>{
        this.orders = orders;
      })
    }

  // ngOnInit(): void {
  //   this.getOrders();
  // }

  // getOrders(): void {
  //   this.orderService.getPendingOrders()
  //   .subscribe(orders => this.orders = orders);
  // }


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