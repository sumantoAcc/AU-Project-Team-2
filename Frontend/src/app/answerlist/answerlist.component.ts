/* eslint-disable import/prefer-default-export */
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

  @Input('mark') mark: boolean;

  @Input('markbutton') markbutton:boolean;

  // eslint-disable-next-line no-useless-constructor
  constructor(private answerService: AnswerService) {
    this.markbutton = false;
  }

  ngOnInit(): void {
    this.mark = this.markbutton;
    this.getAnswer();
  }

  getAnswer() {
    this.answerService.getAnswer(this.quesId).subscribe((data) => {
      const temp: any = [];
      const tempArray: any = [];
      for (let i = 0; i < data.length; i += 1) {
        tempArray.push({
          user: data[i].user.username,
          uidd: data[i].user.userId,
          body: data[i].answerBody,
          correctAnswer: data[i].correct,
          aphoto: data[i].user.photo,
          ansId: data[i].ansId,
        });
        if (data[i].correct) {
          this.ansList.push(tempArray[i]);
          this.mark = false;
        }
      }
      for (let i = 0; i < data.length; i += 1) {
        if (!tempArray[i].correctAnswer) this.ansList.push(tempArray[i]);
      }
      this.len = this.ansList.length;
    });
  }

  upvote(ansId) {
    console.log(ansId);
    this.answerService.markCorrect(ansId).subscribe(() => {
      this.mark = false;
      this.ansList = [];
      this.getAnswer();
    });
  }
}
