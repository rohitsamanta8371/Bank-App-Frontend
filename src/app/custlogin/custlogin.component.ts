import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../account';
import { HarcodeService } from '../harcode.service';

@Component({
  selector: 'app-custlogin',
  templateUrl: './custlogin.component.html',
  styleUrls: ['./custlogin.component.css']
})
export class CustloginComponent implements OnInit {
  id:string;
  password:string;
  invalidlogin:boolean;
  constructor(private router:Router, private hardcode:HarcodeService) { }

  ngOnInit(): void {
  }
  custlogin(){
    if(this.hardcode.userauthenticate(this.id,this.password)){
      this.invalidlogin=false;
      console.log("in if");
      this.router.navigate(['/casthome']);
    }
    else{
      this.invalidlogin=true;
      console.log("in else");
      alert("!!!Invalid Credential Retry!!!");
      location.reload();
    }
  }
  back(){
    this.router.navigate(['home'])
  }


}
