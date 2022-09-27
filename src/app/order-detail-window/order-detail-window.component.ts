import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { OrdersService } from '../orders.service';
import { Order }  from '../order';
import { MockOrdersService } from '../mock-orders.service';
import { MockOrdersComponent } from '../mock-orders/mock-orders.component';

@Component({
  selector: 'app-order-detail-window',
  templateUrl: './order-detail-window.component.html',
  styleUrls: ['./order-detail-window.component.css']
})
export class OrderDetailWindowComponent implements OnInit {

  orders: any

  constructor(
    private route: ActivatedRoute,
    private orderService: OrdersService,
    private mockOrderService: MockOrdersService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getOrder();
  }
/**
 * CHANGE THIS BACK TO BE ABLE TO COMMUNICATE WITH BACKEND WHENEVER FINISHED WITH MOCK DASHBOARD WORK
 */
  getOrder(): void {
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.orderService.getOrders(id)
    // .subscribe(orders => this.orders = orders);
    const id = Number(this.route.snapshot.paramMap.get('order_id'));
    this.mockOrderService.getOrders()
    .subscribe(orders => this.orders = orders);
  }

  goBack(): void {
    this.location.back();
  }

}
