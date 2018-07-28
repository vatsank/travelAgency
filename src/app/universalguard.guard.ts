import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversalguardGuard implements CanActivate , CanDeactivate<{}> {

  canDeactivate(component: {}, currentRoute: ActivatedRouteSnapshot, 
     currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean  {

    return window.confirm('are you sure');
  }
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {

      const status = sessionStorage.getItem('isUserLogged');

      const url = state.url;
     if (url !== '/agent' && status  === 'true') {
        return true;
        } else {
        return false;
     }
    //return true;
  }
}
