import { Component, Input, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-questiontopiclist',
  templateUrl: './questiontopiclist.component.html',
  styleUrls: ['./questiontopiclist.component.css']
})
export class QuestiontopiclistComponent implements OnInit {

  questiontopiclist=[];
  queId: number;
  showVar:boolean[]=[];
  @Input() userId: number;     

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.getQuestionsbytopic().subscribe((data) => {
      for (let i = 0; i < data.length; i += 1) {
        this.showVar.push(false);
        this.questiontopiclist.push({
          title: data[i].title,
          body: data[i].body,
          qid: data[i].quesId,
          quser: data[i].user.username,
          qphoto: data[i].user.photo,
        });
      }
    });
  }

  showans= (i) => {
    this.showVar[i] = this.showVar[i] != true;
  }
}
