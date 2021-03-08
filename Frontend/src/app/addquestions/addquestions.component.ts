/* eslint-disable max-classes-per-file */
/* eslint-disable no-useless-constructor */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-empty-function */
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuestionlistComponent } from '../questionlist/questionlist.component';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-addquestions',
  templateUrl: './addquestions.component.html',
  styleUrls: ['./addquestions.component.css'],
})
export class AddquestionsComponent implements OnInit {
  quesObj: FormGroup;

  constructor(private dialogRef: MatDialogRef<QuestionlistComponent>,
    private questionService: QuestionService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.quesObj = new FormGroup({
      topic: new FormControl(''),
      Keywords: new FormControl(this.questionService.oldkey),
      quesTitle: new FormControl(''),
      quesDesc: new FormControl(''),
    });
  }

  get topic() {
    return this.quesObj.get('topic') as FormControl;
  }

  get quesTitle() {
    return this.quesObj.get('quesTitle') as FormControl;
  }

  get quesDesc() {
    return this.quesObj.get('quesDesc') as FormControl;
  }

  get Keywords() {
    return this.quesObj.get('Keywords') as FormControl;
  }

  addQues() {
    const quesObject = {
      userId: this.questionService.uid,

      title: this.quesTitle.value,

      topicName: this.topic.value,

      body: this.quesDesc.value,

      keyword: `${this.Keywords.value},${this.questionService.oldkey}`,
    };

    this.snackBar.open('Adding Question', 'wait', {
      duration: 5000,
   });
    console.log(quesObject);
    this.questionService.postQuestion(quesObject).subscribe(() => {
      this.dialogRef.close();
    });
  }
}