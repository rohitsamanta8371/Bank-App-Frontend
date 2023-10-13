import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {
  id:number;
  account:Account=new Account();
  constructor(private accService:AccountService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.accService.getAccountById(this.id).subscribe(data=>{
      this.account=data;
    },error=>console.log(error));
  }
  goToAccount(){
    this.router.navigate(['updatesucc']);
  }
  onSubmit(){
    this.accService.updateAccount(this.id,this.account).subscribe(data=>{
      this.goToAccount();
    },error=>console.log(error));
  }
  back(){
    this.router.navigate(['accounts']);
  }
}
