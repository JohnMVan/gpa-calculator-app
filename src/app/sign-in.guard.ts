//Title:  sign-in-guard.ts
//Author: John Vanhessche
//Date 10 February 2023
//Description:  TypeScript file for the sign-in component.

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
//import { CookieService } from 'ngx-cookie-service/lib/cookie.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {
  
  constructor(private router: Router, private cookieService: CookieService) {

  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      const sessionUser = this.cookieService.get('session_user');

      if(sessionUser) {
        return true;
      } else {
        this.router.navigate(['/session/sign-in']);
        return false
      }
  }
  
}


//7.2 CanActivate must return a true value.
//added constructor with Router and cookieService arguments.  That's becasue we'll
//be using these in the CanActivate method.
//in body of CanActive we are using the .get of the cookie service to get the session
//cookie for the user.
//then we are using an if statement to make sure something is being returned inside
//session_user.  If something is there that means a user is logged into the system.
// if not, navigate them back to the sign in component.
//need to add the return false statement since this is a CanActivate guard, this
//this ensure the route to the login screen is performed, other wise it would just 
//fail.