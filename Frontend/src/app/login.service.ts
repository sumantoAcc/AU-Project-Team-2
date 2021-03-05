/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user';

@Injectable({
  providedIn: 'root',
})

export class LoginService {
  constructor(private http:HttpClient) { }

    login = (username : String, password : String) : Observable<any> => this.http.post<any>('/login', { 'username':username, 'password':password })
}
