import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HarcodeService } from '../harcode.service';

@Component({
  selector: 'app-custlogout',
  templateUrl: './custlogout.component.html',
  styleUrls: ['./custlogout.component.css']
})
export class CustlogoutComponent implements OnInit {

  constructor(private harcoded:HarcodeService,private router:Router) { }

  ngOnInit(): void {
    this.harcoded.logoutuser();
  }
  custlogin(){
    this.router.navigate(['home']);
  }

}
