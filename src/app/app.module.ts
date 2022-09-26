import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TableComponent } from './table/table.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PendingComponent } from './pending/pending.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {  GoogleLoginProvider } from 'angularx-social-login';
import { MetricsComponent } from './metrics/metrics.component';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { ShippedOrdersComponent } from './shipped-orders/shipped-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    TableComponent,
  //  TotalOrderShippedComponent,
    NavBarComponent,
    PendingComponent,
    HomeComponent,
    IndexComponent,
    MetricsComponent,
    PendingComponent,
    LoginComponent,
    FilterMenuComponent,
    ShippedOrdersComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule
    
  ],
  providers: [ {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com'
          ),
        }
      ],
    } as SocialAuthServiceConfig,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
