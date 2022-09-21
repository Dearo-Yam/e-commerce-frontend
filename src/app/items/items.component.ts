import { Component, OnInit } from '@angular/core';
import { Item }  from '../item';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  item: Item = {
    id: 12345,
    name: 'item1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
