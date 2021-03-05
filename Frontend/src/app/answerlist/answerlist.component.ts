import { Component, OnInit } from '@angular/core';
import {Answer} from '../model/answer';
import {AnswerService} from '../answer.service';

@Component({
  selector: 'app-answerlist',
  templateUrl: './answerlist.component.html',
  styleUrls: ['./answerlist.component.css']
})
export class AnswerlistComponent implements OnInit {
  anslist : Answer[];

  constructor(private answerService: AnswerService) { }

  ngOnInit(): void {
    this.anslist=this.answerService.getAnswer();
  }

}
