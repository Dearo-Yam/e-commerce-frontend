import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Item } from '../item';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }
  onOrderIdClick() {
    this.matDialog.open(OrderDetailComponent);
  }
}
