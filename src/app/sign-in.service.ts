//Title:  sign-in.service.ts
//Author: John Vanhessche
//Date 10 February 2023
//Description:  TypeScript file for the sign-in component.


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  constructor() { 
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId)
  }
}






// 7.2 - validate function that accepts a numerical value (student id) and will
// return a true or false based on whether the id (numeric value), matches
// an array of id's we have created/stored.
//using the built in '.some' allows us to search over the array and return
//t/f if anything matches.  Don't need to specify true or false .some does this.