import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

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
  }

}
