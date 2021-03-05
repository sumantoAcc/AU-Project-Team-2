
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
  questionlist: Question[] = [];
  showVar: boolean[] = [];

  constructor(private questionService: QuestionService) {
    this.questionlist = this.questionService.getQuestions();
  }

  ngOnInit(): void {
    this.questionlist = this.questionService.getQuestions();
    for (var i = 0; i < this.questionlist.length; i++) {
      this.showVar.push(false);
    }
    console.log(this.showVar);
  }

  showans= (i) => {
    this.showVar[i] = (this.showVar[i]==true)?false:true;
  }
}
