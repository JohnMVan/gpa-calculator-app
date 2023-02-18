//Title:  grade-summary.component.ts
//Author: John Vanhessche
//Date 10 February 2023
//Description:  TypeScript file for the grade-summary component.

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  @Input() grade:  string;
  @Input() course: string;

  constructor() { }

  ngOnInit(): void {
  }

}
