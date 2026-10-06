import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const role = sessionStorage.getItem('role');

    if (isLoggedIn === 'true' && role === 'ADMIN') {
      return true;
    }

    this.router.navigate(['']);

    return false;
  }

}