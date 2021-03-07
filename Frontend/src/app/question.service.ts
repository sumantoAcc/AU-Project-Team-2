/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './model/question';
import { QuestionlistComponent } from './questionlist/questionlist.component';

@Injectable({
  providedIn: 'root',
})

export class QuestionService {
    uid : number;

    Squestions=[];

    constructor(private http:HttpClient) { }

    getQuestions() {
      console.log(this.uid);
      return this.http.get<any>(`/api/userquestions/${this.uid}`);
    }

    Searching = (keywords : String) : Observable<any> => this.http.post<any>('/api/question/keywords', {"keyword":keywords});

    getQuestionsbytopic(){
      return this.http.get<any>(`/api/questions/${this.uid}`);
    }
}
