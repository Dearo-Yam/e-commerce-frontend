import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderDetailWindowComponent } from './order-detail-window/order-detail-window.component';
import { OrdersComponent } from './orders/orders.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { PendingComponent } from './pending/pending.component';

const routes: Routes = [
  { path: '',redirectTo: '/home', pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  {path:'pending', component: PendingComponent},
  {path: 'order-detail/:id', component: OrderDetailWindowComponent},
  {path: 'table', component: TableComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }