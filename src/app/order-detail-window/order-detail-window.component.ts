import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { OrdersService } from '../orders.service';
import { Order }  from '../order';

@Component({
  selector: 'app-order-detail-window',
  templateUrl: './order-detail-window.component.html',
  styleUrls: ['./order-detail-window.component.css']
})
export class OrderDetailWindowComponent implements OnInit {

  order: Order | undefined;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrdersService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.orderService.getOrders(id)
    .subscribe(order => this.order = order);
  }

  goBack(): void {
    this.location.back();
  }

}
