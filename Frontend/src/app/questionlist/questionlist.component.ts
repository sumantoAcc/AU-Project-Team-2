/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import { Component, Input, OnInit,OnChanges } from '@angular/core';
import { QuestionService } from '../question.service';
@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css'],
})
export class QuestionlistComponent implements OnInit {
  questionlist = [];

  queId: number;

  showVar: boolean[] = [];

  @Input() userId: number;

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
}
