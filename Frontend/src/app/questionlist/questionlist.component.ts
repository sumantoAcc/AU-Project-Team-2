/* eslint-disable import/prefer-default-export */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import { Component, OnInit } from '@angular/core';
import { Question } from '../model/question';
import { QuestionService } from '../question.service';
import { AnswerlistComponent } from '../answerlist/answerlist.component';

@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css'],
})
export class QuestionlistComponent implements OnInit {
  questionlist: Question[] = []

  showVar: boolean = false;

  constructor(private questionService: QuestionService) {
    this.questionlist = this.questionService.getQuestions();
  }

  ngOnInit(): void {
    this.questionlist = this.questionService.getQuestions();
    console.log(this.questionlist);
  }

  showans= () => {
    this.showVar = !this.showVar;
  }
}
