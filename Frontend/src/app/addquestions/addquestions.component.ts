/* eslint-disable no-useless-constructor */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-empty-function */
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup} from '@angular/forms';
import { QuestionlistComponent } from '../questionlist/questionlist.component';
@Component({
  selector: 'app-addquestions',
  templateUrl: './addquestions.component.html',
  styleUrls: ['./addquestions.component.css'],
})
export class AddquestionsComponent implements OnInit {
  quesObj: FormGroup;

  constructor(private dialogRef: MatDialogRef<QuestionlistComponent>) { }

  ngOnInit(): void {
    this.quesObj = new FormGroup({
      Keywords: new FormControl(''),
      quesTitle: new FormControl(''),
      quesDesc: new FormControl(''),
    });
  }
}
