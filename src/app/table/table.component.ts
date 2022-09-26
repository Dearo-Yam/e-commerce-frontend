import { Component, OnInit } from '@angular/core';
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

}
