/* eslint-disable import/no-unresolved */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTreeModule } from '@angular/material/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SearchQueryPageComponent } from './search-query-page/search-query-page.component';
import { AnswerQueryPageComponent } from './answer-query-page/answer-query-page.component';
import { QuestionlistComponent } from './questionlist/questionlist.component';
import { AnswerlistComponent } from './answerlist/answerlist.component';
import { QuestiontopiclistComponent } from './questiontopiclist/questiontopiclist.component';
import { AddquestionsComponent } from './addquestions/addquestions.component';
import { AddanswersComponent } from './addanswers/addanswers.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SearchQueryPageComponent,
    AnswerQueryPageComponent,
    QuestionlistComponent,
    AnswerlistComponent,
    QuestiontopiclistComponent,
    AddquestionsComponent,
    AddanswersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTreeModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
// eslint-disable-next-line import/prefer-default-export
export class AppModule { }
