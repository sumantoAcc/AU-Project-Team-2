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

export class AnswerService {
  constructor(private http:HttpClient) { }

  quid : number;

  getAnswer(quid) {
    return this.http.get<any>(`/api/answer/${quid}`);
  }
}