import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-answer-query-page',
  templateUrl: './answer-query-page.component.html',
  styleUrls: ['./answer-query-page.component.css'],
})
// eslint-disable-next-line import/prefer-default-export
export class AnswerQueryPageComponent implements OnInit {
  // eslint-disable-next-line no-useless-constructor
  // eslint-disable-next-line no-empty-function
  constructor(private router : Router) { }

  searchTab(){
    this.router.navigate(['/search']);
  }

  logout(){
    this.router.navigate([""]);
  }

  ngOnInit(): void {
  }

}
