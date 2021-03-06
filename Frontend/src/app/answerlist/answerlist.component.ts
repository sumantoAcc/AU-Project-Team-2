/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import { Component, OnInit, Input } from '@angular/core';
import { Answer } from '../model/answer';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-answerlist',
  templateUrl: './answerlist.component.html',
  styleUrls: ['./answerlist.component.css'],
})
// eslint-disable-next-line import/prefer-default-export
export class AnswerlistComponent implements OnInit {
  ansList: Answer[] = [];

  @Input() quesId : any;

  // eslint-disable-next-line no-useless-constructor
  constructor(private answerService: AnswerService) { }

  ngOnInit(): void {
    console.log(this.quesId);
    this.answerService.getAnswer(this.quesId).subscribe((data) => {
      for (let i = 0; i < data.length; i += 1) {
        this.ansList.push({
          user: data[i].user.userId,
          body: data[i].answerBody,
          correctAnswer: data[i].question.marked,
        });
      }
    });
  }
}