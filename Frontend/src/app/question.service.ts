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

@Injectable({
  providedIn: 'root',
})

export class QuestionService {
    uid : number;

    constructor(private http:HttpClient) { }

    getQuestions(userId) {
      console.log(this.uid);
      return this.http.get<any>('/api/userquestions/1'+ this.uid);
    }
}
