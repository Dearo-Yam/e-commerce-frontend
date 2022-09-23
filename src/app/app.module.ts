import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
//Import for pop-up dialog
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

=======
import {HttpClientModule} from '@angular/common/http';
>>>>>>> dev
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TableComponent } from './table/table.component';
import { TotalOrderShippedComponent } from './total-order-shipped/total-order-shipped.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
<<<<<<< HEAD
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderDetailWindowComponent } from './order-detail-window/order-detail-window.component';
=======
import { PendingComponent } from './pending/pending.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
>>>>>>> dev

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    TableComponent,
    TotalOrderShippedComponent,
    NavBarComponent,
<<<<<<< HEAD
    OrdersComponent,
    OrderDetailComponent,
    OrderDetailWindowComponent
=======
    PendingComponent,
    HomeComponent,
    IndexComponent
>>>>>>> dev
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    //Needed to add MatDialogModule here at imports
    MatDialogModule,
    MatDialogModule
=======
    HttpClientModule
>>>>>>> dev
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [OrderDetailComponent]
})
export class AppModule { }
