import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ItemService } from '../item.service';
import { Item }  from '../item';

@Component({
  selector: 'app-order-detail-window',
  templateUrl: './order-detail-window.component.html',
  styleUrls: ['./order-detail-window.component.css']
})
export class OrderDetailWindowComponent implements OnInit {

  item: Item | undefined;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.itemService.getOrder(id)
    .subscribe(item => this.item = item);
  }

  goBack(): void {
    this.location.back();
  }

}
