import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { HarcodeService } from './harcode.service';

@Injectable({
  providedIn: 'root'
})
export class RoutecustGuardService {

  constructor(private hardcodedAuthenticationService: HarcodeService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.hardcodedAuthenticationService.isUserLoggedInuser()) {
      return true;
    }
    this.router.navigate(['custlogin']);
    return false;
  }
}
