import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from './account';
import { CustloginService } from './custlogin.service';

@Injectable({
  providedIn: 'root'
})
export class HarcodeService {
  account:Account=new Account();
  condition=true;
  constructor(private cust:CustloginService,private router:Router) { }
  authenticate(username:any,password:any){
    if(username==='admin@gmail.com' && password==='1234'){
      sessionStorage.setItem("Authenticate",username);
      return true;
    }
    else{
      return false;
    }
  }
  isUserLoggedIn(){
    let user=sessionStorage.getItem("Authenticate");

    return !(user==null);
  }
  logout(){
    sessionStorage.removeItem("Authenticate");
  }
  userauthenticate(id:any,password:any){
    this.condition=true;
    this.cust.retriveAdmin(id,password,).subscribe(data=>{
      this.account=data;
      sessionStorage.setItem("AuthenticateUser",String(data.id));
      console.log(this.account);
      this.router.navigate(['/casthome'])
    },error=>{
      this.condition=false;
      alert("!!!Invalid Credentials!!!");
    });
    return this.condition;
  }
  isUserLoggedInuser(){
    let user=sessionStorage.getItem("AuthenticateUser");

    return !(user==null);
  }
  logoutuser(){
    sessionStorage.removeItem("AuthenticateUser");
  }
  
}
