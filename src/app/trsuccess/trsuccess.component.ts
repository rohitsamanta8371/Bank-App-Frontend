import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trsuccess',
  templateUrl: './trsuccess.component.html',
  styleUrls: ['./trsuccess.component.css']
})
export class TrsuccessComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  custlogin(){
    this.router.navigate(['casthome']);
  }
}
