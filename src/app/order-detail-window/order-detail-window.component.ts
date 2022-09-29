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

  orders: any;
  items: any;
  customer: any;
  id: any;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrdersService,
    private location: Location,
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getOrder();
    this.getItems();
    this.orderService.getAllOrders().subscribe(orders =>{
      this.orders = orders;
    })
    this.getCustomerInfo();
    
  }
/**
 * CHANGE THIS BACK TO BE ABLE TO COMMUNICATE WITH BACKEND WHENEVER FINISHED WITH MOCK DASHBOARD WORK
 */
  getOrder(): void {
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    this.orderService.getOrders(this.id)
    .subscribe(orders => this.orders = orders);
  }

  getItems(): void {
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    this.orderService.getItems(this.id)
    .subscribe(items => this.items = items);
  }

  getCustomerInfo(): void {
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    this.orderService.getCustomerInfo(this.id)
    .subscribe(customer => this.customer = customer);
  }

  goBack(): void {
    this.location.back();
  }

  //Confirmation page for shippping
  // shipConfirmation(): void {
 
  // }

  shipOrder(): void {
    //Get the order by id

    //Change value of status to SHIPPED
    this.orderService.shipOrder(this.id)
    .subscribe(customer => this.customer = customer);
  }

}
