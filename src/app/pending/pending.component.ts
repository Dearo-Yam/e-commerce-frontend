import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {


  pendingOrders: any;

  constructor(private actRouter:ActivatedRoute, private orderService: OrdersService) {
  }


  ngOnInit(): void {
    this.orderService.getPendingOrders().subscribe(pendingOrders =>
      {this.pendingOrders = pendingOrders;})
  }

}
