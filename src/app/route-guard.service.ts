import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { HarcodeService } from './harcode.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {
  // dependency injection of the service function
  constructor(private hardcodedAuthenticationService: HarcodeService,private router:Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.hardcodedAuthenticationService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
  
}
