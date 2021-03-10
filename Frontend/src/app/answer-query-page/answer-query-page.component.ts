/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-answer-query-page',
  templateUrl: './answer-query-page.component.html',
  styleUrls: ['./answer-query-page.component.css'],
})
export class AnswerQueryPageComponent implements OnInit {
  
  foto: String;

  duname: String;

  constructor(private router : Router) {
    this.foto=JSON.parse(localStorage.getItem('userrrphoto')); 
    this.duname=JSON.parse(localStorage.getItem('userrr'));
  }

  searchTab() {
    this.router.navigate(['/search']);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userrr');
    localStorage.removeItem('userrrphoto');
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }
}
