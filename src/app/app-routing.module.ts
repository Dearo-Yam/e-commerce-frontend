import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailWindowComponent } from './order-detail-window/order-detail-window.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  { path: 'orderDetails/:id', component: OrderDetailWindowComponent },
  { path: '', redirectTo: '/orders', pathMatch: 'full'},
  { path: 'orders', component: ItemsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
