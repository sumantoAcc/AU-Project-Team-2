/* eslint-disable no-undef */
/* eslint-disable no-console */
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
export class AnswerlistComponent implements OnInit {
  ansList = [];

  len: number;

  @Input() quesId : any;

  // eslint-disable-next-line no-useless-constructor
  constructor(private answerService: AnswerService) { }

  ngOnInit(): void {
    console.log(this.quesId);
    this.answerService.getAnswer(this.quesId).subscribe((data) => {
      for (let i = 0; i < data.length; i += 1) {
        this.ansList.push({
          user: data[i].user.username,
          uidd: data[i].user.userId,
          body: data[i].answerBody,
          correctAnswer: data[i].question.marked,
          aphoto: data[i].user.photo,
        });
      }
      this.len=this.ansList.length;
    });
  }
}
