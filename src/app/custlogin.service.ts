import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class CustloginService {

  constructor(private httpClient:HttpClient) { }
  retriveAdmin(id:any,password:any):Observable<Account>{
    return this.httpClient.get<Account>(`http://localhost:8081/api/v1/accounts/${id}/${password}`)
  }
  retribeAcc(acno:any){
    
  }
}
