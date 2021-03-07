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
  lecform: FormGroup;

  constructor(private dialogRef: MatDialogRef<QuestionlistComponent>) { }

  ngOnInit(): void {
    this.lecform = new FormGroup({
      name: new FormControl(''),
      instructor: new FormControl(''),
      desc: new FormControl(''),
    });
  }
}
