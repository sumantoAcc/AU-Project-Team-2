/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import { Component, Input, OnInit } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuestionService } from '../question.service';
import { AnswerlistComponent } from '../answerlist/answerlist.component';
import { SearchQueryPageComponent } from '../search-query-page/search-query-page.component';
import { AddquestionsComponent } from '../addquestions/addquestions.component';
import { AddanswersComponent } from '../addanswers/addanswers.component';
// eslint-disable-next-line import/no-unresolved
import { AnswerService } from '../answer.service';

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

  @Input('ftest') ftest:any;

  constructor(private questionService: QuestionService, private squery : SearchQueryPageComponent, private box: MatDialog,
    private answerService: AnswerService) { }

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

  ngOnChanges(changes: SimpleChanges) {
    this.seachQueList = this.squery.temp;
    this.toogleques = false;
  }

  addQues(qID) {
    this.box.open(AddquestionsComponent);
  }

  addAns(qID) {
    this.answerService.quesId_AddAns = qID;
    this.box.open(AddanswersComponent);
  }

  showans= (i) => {
    this.showVar[i] = !this.showVar[i];
  }

  showsearchQues() {
    this.toogleques = true;
  }
}
