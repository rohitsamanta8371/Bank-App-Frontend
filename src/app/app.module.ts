import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateAccountComponent } from './create-account/create-account.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { HomeComponent } from './home/home.component';
import { CustloginComponent } from './custlogin/custlogin.component';
import { CustlogoutComponent } from './custlogout/custlogout.component';
import { CasthomeComponent } from './casthome/casthome.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { UpdatepassComponent } from './updatepass/updatepass.component';
import { TransferComponent } from './transfer/transfer.component';
import { TrsuccessComponent } from './trsuccess/trsuccess.component';
import { CustbalanceComponent } from './custbalance/custbalance.component';
import { PassuccComponent } from './passucc/passucc.component';
import { UpdatesuccComponent } from './updatesucc/updatesucc.component';
@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    CreateAccountComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    UpdateAccountComponent,
    HomeComponent,
    CustloginComponent,
    CustlogoutComponent,
    CasthomeComponent,
    AccountInfoComponent,
    UpdatepassComponent,
    TransferComponent,
    TrsuccessComponent,
    CustbalanceComponent,
    PassuccComponent,
    UpdatesuccComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
