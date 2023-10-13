import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Account } from './account';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseURL="http://localhost:8081/api/v1/accounts";
  private transaction= "http://localhost:8081/api/v1/accounts/ac";

  constructor(private httpClient:HttpClient) { }
    getAccountsList(): Observable<Account[]>{
      return this.httpClient.get<Account[]>(`${this.baseURL}`);
  }
  createAccount(account: Account):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,account);
  }
  getAccountById(id:number):Observable<Account>{
    return this.httpClient.get<Account>(`${this.baseURL}/${id}`);
  }
  updateAccount(id:number,account: Account):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,account);
  }
  deleteAccount(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  transfer(acc1:string,acc2:string,amt:number,account: Account):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${acc1}/${acc2}/${amt}`,account);
  }
  getAccountByAcNo(acno:string):Observable<Account>{
    return this.httpClient.get<Account>(`${this.transaction}/${acno}`);
  }
}