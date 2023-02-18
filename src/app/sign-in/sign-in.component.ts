//Title:  sign-in.component.ts
//Author: John Vanhessche
//Date 10 February 2023
//Description:  TypeScript file for the sign-in component.

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
//import { CookieService } from 'ngx-cookie-service/lib/cookie.service';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) { }

  ngOnInit(): void {
    this.signinForm = this.fb.group({     //this creates a new reactive form group
      studentId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]   //only numeric values are accepted/required, per validation.
    })
  }
  
  onSubmit() {
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);

    if(this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/'])
    } else {
      this.errorMessage = 'The Id entered is invalid.  Try again.';
    }
  }

  get form() {   
      return this.signinForm.controls;
  }

}


//7.2 in this component we are using reactive driven forms.  
//the forms are built out in the ngOnInit function.
//onSubmit captures the values the user has entered when they press submit.
//formValues are the object values captured during submit
//we are assigning the studentId from teh formValues.studentId property in the 
//formValues object.
//we validate the studentId, then set the cookie to the session_user and make it a string
//otherwise we generate an error message if the user id doesn't match.