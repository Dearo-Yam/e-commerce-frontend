import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PendingComponent } from './pending/pending.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { TableComponent } from './table/table.component';


const routes: Routes = [


  { path: '',redirectTo: '/all', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path:'all', component: TableComponent, canActivate: [AuthGuard]},
  { path:'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
