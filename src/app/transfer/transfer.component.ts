import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  accountnum:string;
  amt:number;
  mpin:string;
  account1: Account;
  account2:Account;
  id:number;
  constructor(private accService:AccountService,private route:ActivatedRoute,private router :Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.accService.getAccountById(this.id).subscribe(data=>{
      this.account1=data;
      
    });
  }
  transfer(){
    this.accService.transfer(this.account1.acno,this.accountnum,this.amt,this.account1).subscribe(data=>{
      this.router.navigate(['trsuccess']);
    },error=>{
      alert("Invalid Account No.");
    });
  }
   getAccountdetails(){
    let user=sessionStorage.getItem("AuthenticateUser");
    this.id=Number(user);
    account:Observable<Account>;
    this.accService.getAccountById(this.id).subscribe(data=>{
      this.account1=data;
      if(this.account1.password==this.mpin){
        console.log(this.account1.password,this.mpin);
        if(this.account1.acno==this.accountnum){
          alert("You cant send money to your own bank");
          location.reload();
        }
        else if(this.amt<=0){
          alert("Amount should me more than Zero");
        }
        else if(this.account1.balance-this.amt<0){
          alert("Insufficient Bank Balance");
        }
        else{
          this.accService.getAccountByAcNo(this.accountnum).subscribe(data=>{
            this.transfer();
          },error=>{
            alert("Invalid Account No.");
            location.reload();
  
          });
      }
      }
      else{
        alert("Your Password is Invalid");
        location.reload();
      }
    });
    
  }
  custlogin(){
    this.router.navigate(['casthome']);
  }
  
}
