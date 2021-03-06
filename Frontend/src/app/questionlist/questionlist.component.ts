/* eslint-disable import/prefer-default-export */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../model/question';
import { QuestionService } from '../question.service';
import { AnswerlistComponent } from '../answerlist/answerlist.component';
@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css'],
})
export class QuestionlistComponent implements OnInit {
  questionlist= [];

  showVar: boolean = false;

  @Input() userId: number;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.getQuestions(this.userId).subscribe((data) => {
      for (let i = 0; i < data.length; i += 1) {
        this.questionlist.push({
          title: data[i].title,
          body: data[i].body,
        });
      }
    });
  }

  showans= () => {
    this.showVar = !this.showVar;
  }
}
