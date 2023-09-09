import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.authService.isLoggedIn()) {
            return true;
        } else {
            // Redirect to login page
            // this.router.navigate(['/login']);
            return false;
        }
    }

}

@Injectable({
    providedIn: 'root'
})
export class AuthChildGuard implements CanActivateChild {
    constructor(private authService: AuthService, private router: Router) { }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Add your child route authentication logic here
    if (this.authService.isLoggedIn()) {
        return true;
    } else {
        // Redirect to login page
        // this.router.navigate(['/login']);
        return false;
    }
  }
}