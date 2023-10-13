import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HarcodeService } from '../harcode.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private harcoded:HarcodeService,private router:Router) { }

  ngOnInit(): void {
    this.harcoded.logout();
  }
  custlogin(){
    this.router.navigate(['home']);
  }
}
