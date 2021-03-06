
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
  

  queId: number;

    questionlist: Question[] = [];
  showVar: boolean[] = [];

  @Input() userId: number;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.getQuestions(this.userId).subscribe((data) => {
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
;


 
  showans= (i) => {
    this.showVar[i] = (this.showVar[i]==true)?false:true;

  }
}
