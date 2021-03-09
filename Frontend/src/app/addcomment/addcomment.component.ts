import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import CommentService from '../comment.service';
import { AnswerService } from '../answer.service';
import { QuestionService } from '../question.service';



@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.component.html',
  styleUrls: ['./addcomment.component.css']
})
export class AddcommentComponent implements OnInit {
  lecform: FormGroup;

  constructor(private dialogRef: MatDialogRef<CommentlistComponent>, private answerSevice: AnswerService,
    private questionService: QuestionService, private commentService: CommentService) { }

  ngOnInit(): void {
    this.lecform = new FormGroup({
      comBody: new FormControl(''),
    });
  }

}
