import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { CommentService } from '../comment.service';
import { AnswerService } from '../answer.service';
import { QuestionService } from '../question.service';
import { CommentlistComponent } from '../commentlist/commentlist.component';


@Component({
  selector: 'app-addcomments',
  templateUrl: './addcomments.component.html',
  styleUrls: ['./addcomments.component.css']
})
export class AddcommentsComponent implements OnInit {
  lecform: FormGroup;

  constructor(private dialogRef: MatDialogRef<CommentlistComponent>, private answerService: AnswerService,
    private questionService: QuestionService, private commentService: CommentService) { }

  ngOnInit(): void {
    this.lecform = new FormGroup({
      comBody: new FormControl(''),
    });

    addCom(ansId) {
      const comObject = {
        userId: this.answerService.uid,
        ansId: this.answerService.quesId_AddAns,
        commentBody: this.ansBody.value,
      };
      this.commentService.postComment(comObject).subscribe(() => {
        this.dialogRef.close();
      });
  }
}
