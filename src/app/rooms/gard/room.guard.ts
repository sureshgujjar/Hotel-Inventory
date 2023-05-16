import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginserviceService } from 'src/app/login/loginservice.service';

@Injectable({
  providedIn: 'root'
})
export class RoomGuard implements CanActivateChild {

  constructor(private loginservice:LoginserviceService) {
    
    
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loginservice.isAdmin;
  }
  
}
