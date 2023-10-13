import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  accounts: Account[];
  constructor(private accountService:AccountService,private router: Router) {
    
  }
  ngOnInit(): void {
    this.getAccounts();
  }

  private getAccounts(){
    this.accountService.getAccountsList().subscribe(data=>{
    this.accounts=data;
    });
  }
  updateAccount(id:number){
    this.router.navigate(['update-account',id]);
  }
  deleteAccount(id: number){
    this.accountService.deleteAccount(id).subscribe(data=>{
      alert("Id "+id+" Deleted Successfully");
      this.getAccounts();
    })
  }
}
