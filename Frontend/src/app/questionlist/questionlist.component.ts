/* eslint-disable import/prefer-default-export */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../model/question';
import { QuestionService } from '../question.service';
import { AnswerlistComponent } from '../answerlist/answerlist.component';
import { SearchQueryPageComponent } from '../search-query-page/search-query-page.component';
@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css'],
})
export class QuestionlistComponent implements OnInit {
  questionlist= [];

  seachQueList=[];

  toogleques: boolean;

  queId: number;

  showVar: boolean[] = [];

  @Input('temp') temp:any;

  constructor(private questionService: QuestionService, private squery : SearchQueryPageComponent) { }

  ngOnInit(): void {
    this.toogleques = true;
    this.questionService.getQuestions().subscribe((data) => {
      for (let i = 0; i < data.length; i += 1) {
        this.showVar.push(false);
        this.questionlist.push({
          title: data[i].title,
          body: data[i].body,
          qid: data[i].quesId,
        });
      }
    });
  }

  showans= (i) => {
    this.showVar[i] = !this.showVar[i];
  }

  showsearchQues() {
    this.seachQueList=this.squery.temp;
    console.log(this.temp);
    this.toogleques = !this.toogleques;
  }
}
