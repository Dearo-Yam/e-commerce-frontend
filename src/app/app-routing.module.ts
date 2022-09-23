import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailWindowComponent } from './order-detail-window/order-detail-window.component';
import { OrdersComponent } from './orders/orders.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: 'orderDetails/:id', component: OrderDetailWindowComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: TableComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
