import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AppModule } from './app.module';
import { CasthomeComponent } from './casthome/casthome.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CustbalanceComponent } from './custbalance/custbalance.component';
import { CustloginComponent } from './custlogin/custlogin.component';
import { CustlogoutComponent } from './custlogout/custlogout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PassuccComponent } from './passucc/passucc.component';
import { RouteGuardService } from './route-guard.service';
import { RoutecustGuardService } from './routecust-guard.service';
import { TransferComponent } from './transfer/transfer.component';
import { TrsuccessComponent } from './trsuccess/trsuccess.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { UpdatepassComponent } from './updatepass/updatepass.component';
import { UpdatesuccComponent } from './updatesucc/updatesucc.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'custlogin', component:CustloginComponent},
  {path:'home', component:HomeComponent},
  {path: 'accounts', component:AccountListComponent, canActivate:[RouteGuardService]},
  {path: 'create-account', component:CreateAccountComponent,canActivate:[RouteGuardService]},
  {path: 'update-account/:id', component:UpdateAccountComponent,canActivate:[RouteGuardService]},
  {path: 'updatesucc', component:UpdatesuccComponent,canActivate:[RouteGuardService]},

  {path: 'logout', component:LogoutComponent,canActivate:[RouteGuardService]},
  {path: 'custlogout', component:CustlogoutComponent,canActivate:[RoutecustGuardService]},
  {path: 'casthome', component:CasthomeComponent,canActivate:[RoutecustGuardService]},
  {path: 'updatepass', component:UpdatepassComponent,canActivate:[RoutecustGuardService]},
  {path: 'transfer', component:TransferComponent,canActivate:[RoutecustGuardService]},
  {path: 'passucc', component:PassuccComponent,canActivate:[RoutecustGuardService]},
  {path: 'trsuccess', component:TrsuccessComponent,canActivate:[RoutecustGuardService]},
  {path: 'custbalance', component:CustbalanceComponent,canActivate:[RoutecustGuardService]},
  {path: 'account-info', component:AccountInfoComponent,canActivate:[RoutecustGuardService]},


  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
