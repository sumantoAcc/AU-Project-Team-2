/* eslint-disable import/no-unresolved */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SearchQueryPageComponent } from './search-query-page/search-query-page.component';
import { AnswerQueryPageComponent } from './answer-query-page/answer-query-page.component';
import {MatTreeModule} from '@angular/material/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionlistComponent } from './questionlist/questionlist.component';
import { AnswerlistComponent } from './answerlist/answerlist.component';
import { QuestiontopiclistComponent } from './questiontopiclist/questiontopiclist.component'; 
import {MatCardModule} from '@angular/material/card'
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SearchQueryPageComponent,
    AnswerQueryPageComponent,
    QuestionlistComponent,
    AnswerlistComponent,
    QuestiontopiclistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTreeModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
// eslint-disable-next-line import/prefer-default-export
export class AppModule { }
