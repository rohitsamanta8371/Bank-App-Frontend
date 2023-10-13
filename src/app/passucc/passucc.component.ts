import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passucc',
  templateUrl: './passucc.component.html',
  styleUrls: ['./passucc.component.css']
})
export class PassuccComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  custlogin(){
    this.router.navigate(['account-info']);
  }

}
