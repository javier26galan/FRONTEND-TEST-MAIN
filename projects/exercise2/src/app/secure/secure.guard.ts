import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SecureGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.returnBoolean()) {
      return true; // the logic have to pass here to acces the route
    }
    alert("You can't access :(");
    return false;
  }

  // change to true if you want to access the protected route
  returnBoolean(): boolean {
    return false;
  }
}
