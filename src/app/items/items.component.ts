import { Component, OnInit } from '@angular/core';
import { Item }  from '../item';
// import { ITEMS } from '../mock-items';
import { ItemService } from '../item.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  
  constructor(private itemService: ItemService) {}
  
  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.itemService.getOrders()
    .subscribe(items => this.items = items);
  }

}