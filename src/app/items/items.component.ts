import { Component, OnInit } from '@angular/core';
import { Item }  from '../item';
import { ITEMS } from '../mock-items';
import { OrderDetailComponent } from '../order-detail/order-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  
  constructor() { }
  //GOES INTO CONSTRUCTOR private matDialog: MatDialog

  ngOnInit(): void {
  }


  items = ITEMS;

  selectedItem?: Item;
  onSelect(item: Item): void {
    this.selectedItem = item;
  }

  // onOrderIdClick() {
       //this.matDialog.open(OrderDetailComponent);
  // }

}
