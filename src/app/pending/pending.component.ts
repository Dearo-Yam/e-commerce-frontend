import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
orders:any;
  constructor(private _ordersService: OrdersService) { }

  ngOnInit(): void {
    this._ordersService.getPendingOrders().subscribe(orders =>{
      this.orders = orders;
    })
  }

}
