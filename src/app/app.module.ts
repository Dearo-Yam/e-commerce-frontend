import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TableComponent } from './table/table.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { PendingComponent } from './pending/pending.component';
import { LoginComponent } from './login/login.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {  GoogleLoginProvider } from 'angularx-social-login';
import { MetricsComponent } from './metrics/metrics.component';
import { FilterButtonComponent } from './filter-button/filter-button.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    TableComponent,
    NavBarComponent,
    HomeComponent,
    NavBarComponent,
    HomeComponent,
    MetricsComponent,
    PendingComponent,
    LoginComponent,
    FilterButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,

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
