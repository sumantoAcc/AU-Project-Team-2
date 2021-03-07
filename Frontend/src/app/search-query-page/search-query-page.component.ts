/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { QuestionlistComponent } from '../questionlist/questionlist.component';
import { QuestionService } from '../question.service';
@Component({
  selector: 'app-search-query-page',
  templateUrl: './search-query-page.component.html',
  styleUrls: ['./search-query-page.component.css'],
})
export class SearchQueryPageComponent implements OnInit {
  Qkeywords: String;

  temp=[];

  ftest: boolean;

  keywordpass = { keyword: String };

  constructor(private router: Router, private questionService : QuestionService) {
    this.Qkeywords = '';
  }

  answerTab() {
    this.router.navigate(['/answer']);
  }

  logout() {
    this.router.navigate(['']);
  }

  quesSearch() {
    this.temp=[];
    console.log(this.Qkeywords);
    this.questionService.Searching(this.Qkeywords).subscribe((data) => {
      for (let i = 0; i < data.length; i += 1) {
        this.temp.push({
          title: data[i].title,
          body: data[i].body,
          qid: data[i].quesId,
        });
      }
    });
    console.log(this.temp);
  }

  ngOnInit(): void {
  }
}
