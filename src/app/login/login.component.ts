import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HarcodeService } from '../harcode.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  invalidlogin:boolean;
  constructor(private router:Router, private hardcode:HarcodeService) { }
  ngOnInit(): void {
  }
  login(){
    if(this.hardcode.authenticate(this.email,this.password)){
      this.invalidlogin=false;
      this.goToAccount('/accounts');
    }
    else{
      this.invalidlogin=true;
      alert("!!!Invalid Credential Retry!!!");
      location.reload();
    }
  }
  goToAccount(a:string){
    this.router.navigate([a]);
  }
  back(){
    this.router.navigate(['home'])
  }
}
