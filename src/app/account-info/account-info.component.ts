import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  accounts: Account;
  id:number;
  account:Account=new Account();

  constructor(private accService:AccountService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getAccountdetails();
  }
  private getAccountdetails(){
    let user=sessionStorage.getItem("AuthenticateUser");
    this.id=Number(user);
    account:Observable<Account>;
    this.accService.getAccountById(this.id).subscribe(data=>{
      this.accounts=data;
      });
  }
  updateAccount(id:number){
    this.router.navigate(['updatepass']);
  }
  custlogin(){
    this.router.navigate(['casthome']);
  }
}
