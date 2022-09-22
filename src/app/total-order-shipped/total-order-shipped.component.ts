import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-total-order-shipped',
  templateUrl: './total-order-shipped.component.html',
  styleUrls: ['./total-order-shipped.component.css']
})
export class TotalOrderShippedComponent implements OnInit {

  totalOrdersShipped$: any;

  constructor(private _ordersService: OrdersService, private ref:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getTotalOrdersShipped();
    this.ref.detectChanges();
  }

  getTotalOrdersShipped() {
    this._ordersService.getTotalOrdersShipped().subscribe(totalOrdersShipped => {
      this.totalOrdersShipped$ = totalOrdersShipped;
    })
  }

}
