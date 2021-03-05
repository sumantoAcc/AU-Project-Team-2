/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { QuestionlistComponent } from  '../questionlist/questionlist.component';

@Component({
  selector: 'app-search-query-page',
  templateUrl: './search-query-page.component.html',
  styleUrls: ['./search-query-page.component.css'],
})
export class SearchQueryPageComponent implements OnInit {
  constructor(private router: Router) { }

  answerTab() {
    this.router.navigate(['/answer']);
  }

  logout() {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }
}
