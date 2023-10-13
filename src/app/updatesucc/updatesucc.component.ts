import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatesucc',
  templateUrl: './updatesucc.component.html',
  styleUrls: ['./updatesucc.component.css']
})
export class UpdatesuccComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Acclist(){
    this.router.navigate(['accounts'])
  }

}
