import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrdersService } from '../orders.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  orders: any;
  status: string[];
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private orderService: OrdersService) {
    this.status = ['Pending', 'Shipped', 'Cancelled'];
  }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getPendingOrders()
    .subscribe(orders => this.orders = orders);
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getOrders();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getOrders();
  }

}
