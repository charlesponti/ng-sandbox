import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.authState
      .pipe(map(user => {
        if (!!user === false) {
          this.router.navigate(['/']);
        }
        return !!user;
      }));
  }
}

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.authState
      .pipe(map(user => {
        return !!user ? this.router.navigate(['/members']) : false;
      }))
      .pipe(map(user => !!!user));
  }
}
