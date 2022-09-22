import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Item }  from '../item';
import { ITEMS } from '../mock-items';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {
  }

  items = ITEMS;

  selectedItem?: Item;
  onSelect(item: Item): void {
    this.selectedItem = item;
  }
  
  onOrderIdClick() {

    const dialogConfig = new MatDialogConfig();

 

    dialogConfig.data = this.selectedItem;
    //Might have to create clickable buttons to close the popup dialog
    this.matDialog.open(OrderDetailComponent);
  }

}
