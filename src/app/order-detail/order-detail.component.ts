import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Order }  from '../order';
import { ORDERS } from '../mock-orders';
=======
>>>>>>> dev

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

<<<<<<< HEAD
  constructor(private matDialog: MatDialog) {}
=======
  constructor() { }
>>>>>>> dev

  ngOnInit(): void {
  }

<<<<<<< HEAD
  orders = ORDERS;

  selectedOrder?: Order;
  onSelect(order: Order): void {
    this.selectedOrder = order;
  }
  
  onOrderIdClick() {

    const dialogConfig = new MatDialogConfig();

 

    dialogConfig.data = this.selectedOrder;
    //Might have to create clickable buttons to close the popup dialog
    this.matDialog.open(OrderDetailComponent);
  }

=======
>>>>>>> dev
}
