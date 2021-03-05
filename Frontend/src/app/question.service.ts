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
  qlist: Question[] = [{ title: "How to initialize a boolean array in javascript", body: "You were getting an error with that code that debugging would have caught. int isn't a JS keyword. Use var and your code works perfectly.", id : 1 }, 
  { title: "Pass data from html body to root component ", body: "I've been trying to pass data from main layout index.html file to the angular root/starting component <my-app>. Unfortunately I'm unable to pass them like this: <my-app [bodyData]= from my index.html. Can anyone help me how can I pass them? Provided a test link.", id : 3  }]

  getQuestions() {
    return this.qlist;
  }
}
