/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import { Component, Input, OnInit } from '@angular/core';
import { SimpleChanges } from '@angular/core';
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
  questionlist = [];
  seachQueList=[];
  toogleques: boolean;

  queId: number;

  showVar: boolean[] = [];

  @Input() userId: number;
  @Input('temp') temp:any;

  @Input('ftest') ftest:any;
  constructor(private questionService: QuestionService) { }

  async ngOnInit() {
    await this.questionService.getQuestions().subscribe((data) => {
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



  showans = (i) => {
    // eslint-disable-next-line eqeqeq
    this.showVar[i] = this.showVar[i] != true;
  }
  showsearchQues() {
    console.log(this.temp);
    this.toogleques = !this.toogleques;
  }
  ngOnChanges(changes: SimpleChanges) {
    this.seachQueList = this.squery.temp;
    this.toogleques = !this.toogleques;
  }
}
