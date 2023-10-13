import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-casthome',
  templateUrl: './casthome.component.html',
  styleUrls: ['./casthome.component.css']
})
export class CasthomeComponent implements OnInit {
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
  custlogin(){
    this.router.navigate(['custbalance'])
  }
}
