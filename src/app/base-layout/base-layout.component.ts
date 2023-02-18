//Title:  base-layout.component.ts
//Author: John Vanhessche
//Date 17 February 2023
//Description:  TypeScript file for the base-layout component.

import { Component, OnInit } from '@angular/core';
//import { CookieService } from 'ngx-cookie-service/public-api';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) { 
    this.assignment = "Exercise 7.3 - Form Validation";
  }

  ngOnInit(): void {
  }

  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in'])
  }

}


//7.2 signout function creates an option on the navigation bar to sign out
//of the applicaiton.  The funciton body calls the cookie service to deleteall
//cookies.  Need to add a reference for the cookie service in the constructor.
// we also added the router because we'll be routing them to a different page on
//sign out. imported CookieService and Router 
//in sign-out, we are deleting all the cookies for that users session
//then routing them back to the sign-in screen.
