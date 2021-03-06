
import { Component, OnInit, Input } from '@angular/core';
import {Answer} from '../model/answer';
import {AnswerService} from '../answer.service';

@Component({
  selector: 'app-answerlist',
  templateUrl: './answerlist.component.html',
  styleUrls: ['./answerlist.component.css']
})
export class AnswerlistComponent implements OnInit {

  ansList: Answer[] = [];
  @Input() quesId : number;
  constructor(private answerService: AnswerService) { }

  ngOnInit(): void {
    this.answerService.getAnswer(this.quesId).subscribe(data =>
    {
      for(let i=0;i<data.length;i++)
        this.ansList.push({
            user: data[i].user.userId,
            body: data[i].answerBody,
            correctAnswer : data[i].marked,
          }); 
    });
  }

}
