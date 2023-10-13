import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-updatepass',
  templateUrl: './updatepass.component.html',
  styleUrls: ['./updatepass.component.css']
})
export class UpdatepassComponent implements OnInit {
  id:number;
  account:Account=new Account();
  
  constructor(private accService:AccountService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let user=sessionStorage.getItem("AuthenticateUser");
    this.id=Number(user);
    account:Observable<Account>;
    this.accService.getAccountById(this.id).subscribe(data=>{
      this.account=data;
      });
    }

  goToAccount(){
    this.router.navigate(['passucc']);
  }
  onSubmit(){
    let user=sessionStorage.getItem("AuthenticateUser");
    this.id=Number(user);
    this.accService.updateAccount(this.id,this.account).subscribe(data=>{
      this.goToAccount();
    },error=>console.log(error)
    )};
    back(){
      this.router.navigate(['account-info']);
    }
  }
