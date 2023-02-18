//Title:  home.component.ts
//Author: John Vanhessche
//Date 11 February 2023
//Description:  TypeScript file for the home component.

import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';  //added 6.4
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //variable declaration Ex 6.4
  // transcriptEntry: ITranscript;   removed per 7.3
  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
  transcriptEntries: Array<ITranscript> = [];
  gpaTotal: number = 0;
  transcriptForm: FormGroup;

  constructor(private fb: FormBuilder) { 

    // this.transcriptEntry = {} as ITranscript;    removed per 7.3  
  }

  ngOnInit(): void {
    this. transcriptForm = this.fb.group({
              course: ['', Validators.required], 
              grade: ['', Validators.required]
            })
  }   

  get form() {
    return this.transcriptForm.controls;
  }

  // saveEntry() {  original for template driven form
  //   this.transcriptEntries.push(this.transcriptEntry);   //pushing selected entry to entries array
  //   this.transcriptEntry = {} as ITranscript;   //resetting field to blank.
  // }
  
  onSubmit(event) {
    this.transcriptEntries.push({
      course: this.form.course.value,
      grade: this.form.grade.value});   //pushing grade and course to transcriptEntries array for reactive Forms
      event.currentTarget.reset();                                        
  }

  calculateResults() {
    let gpa: number = 0;

    for (let transcriptEntry of this.transcriptEntries) {
      switch (transcriptEntry.grade) {
        case 'A':
          gpa += 4.0;
          break;
        case 'A-':
          gpa += 3.70;
          break;
        case 'B+':
          gpa += 3.33;
          break;
        case 'B':
          gpa += 3.00;
          break;
        case 'B-':
          gpa += 2.70;
          break;
        case 'C+':
          gpa += 2.30;
          break;
        case 'C':
          gpa += 2.00;
          break;
        case 'C-':
          gpa += 1.70;
          break;
        case 'D+':
          gpa += 1.30;
          break;
        case 'D':
          gpa += 1.00;
          break;
        case 'D-':
          gpa += 0.70;
          break;
        case 'F':
          gpa += 0.00;
          break;
      }
    }
    this.gpaTotal = gpa / this.transcriptEntries.length;
  }

  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }
}
