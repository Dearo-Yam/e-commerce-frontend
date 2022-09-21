import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Import for pop-up dialog
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TableComponent } from './table/table.component';
import { TotalOrderShippedComponent } from './total-order-shipped/total-order-shipped.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ItemsComponent } from './items/items.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    TableComponent,
    TotalOrderShippedComponent,
    NavBarComponent,
    ItemsComponent,
    OrderDetailComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //Needed to add MatDialogModule here at imports
    MatDialogModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
