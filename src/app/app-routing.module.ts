import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
//import { OrderDetailComponent } from './order-detail/order-detail.component';

import { ShippedOrdersComponent } from './shipped-orders/shipped-orders.component';

import { OrderDetailWindowComponent } from './order-detail-window/order-detail-window.component';
//import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './order/order.component';
import { MockOrdersComponent } from './mock-orders/mock-orders.component';

import { PendingComponent } from './pending/pending.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';





const routes: Routes = [
  { path: '',redirectTo: '/home', pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  {path: 'order-detail/:id', component: OrderDetailWindowComponent},
  {path: 'orderDetails/:id', component: MockOrdersComponent},
  {path: 'table', component: TableComponent},
  {path:'all', component: TableComponent},
  {path:'login', component: LoginComponent},
  {path:'shipped', component: ShippedOrdersComponent},
  {path:'pending', component: PendingComponent},

];








@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
