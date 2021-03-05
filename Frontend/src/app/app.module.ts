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

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SearchQueryPageComponent,
    AnswerQueryPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
// eslint-disable-next-line import/prefer-default-export
export class AppModule { }
