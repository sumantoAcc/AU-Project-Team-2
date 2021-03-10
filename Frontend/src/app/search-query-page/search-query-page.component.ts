/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-search-query-page',
  templateUrl: './search-query-page.component.html',
  styleUrls: ['./search-query-page.component.css'],
})
export class SearchQueryPageComponent implements OnInit {
  Qkeywords: string;

  qlen1: number;

  temp=[];

  ftest: boolean;

  duname: String;

  foto: String;

  keywordpass = { keyword: String };

  constructor(private router: Router, private questionService : QuestionService) {
    this.Qkeywords = '';
    this.qlen1 = 0;
    this.duname=JSON.parse(localStorage.getItem('userrr'));
    this.foto=JSON.parse(localStorage.getItem('userrrphoto'));
  }

  answerTab() {
    this.router.navigate(['/answer']);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userrr');
    localStorage.removeItem('userrrphoto');
    this.router.navigate(['']);
  }

  quesSearch() {
    this.temp=[];
    console.log(this.Qkeywords);
    this.questionService.oldkey=this.Qkeywords;
    this.questionService.Searching(this.Qkeywords).subscribe((data) => {
      for (let i = 0; i < data.length; i += 1) {
        this.temp.push({
          title: data[i].title,
          body: data[i].body,
          qid: data[i].quesId,
          quphoto: data[i].user.photo,
          quser: data[i].user.username,
        });
        
      }
      this.qlen1 = this.temp.length;
      console.log(this.qlen1);
    });
  }

  ngOnInit(): void {
  }
}
