import { Component, OnInit } from '@angular/core';
import { HarcodeService } from '../harcode.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserLoggedIn:boolean=false;
  isUserLoggedInuser:boolean=false
  constructor(public hardcode:HarcodeService) { }

  ngOnInit(): void {
    
  }

}
