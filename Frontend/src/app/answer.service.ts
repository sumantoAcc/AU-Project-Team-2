/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Answer } from './model/answer';

@Injectable({
  providedIn: 'root',
})

export class AnswerService {
    //alist: Answer[]= [{"body":"AlbertoCrespo, by the way that second code example you gave was UnityScript rather than JavaScript. They're similar in some ways but that code would never have worked outside of a Unity environment. ", correctAnswer: false}, {"body":"Wouldn't it be more efficient to use an integer and bitwise operations?", correctAnswer: true}]
    constructor(private http:HttpClient) { }
    
    getAnswer(quesId){
        return this.http.get<any>('/api/answer/'+quesId);
    }
}
