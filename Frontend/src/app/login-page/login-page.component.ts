/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
// eslint-disable-next-line import/prefer-default-export
export class LoginPageComponent implements OnInit {
  username : String;

  password : String;

  // eslint-disable-next-line no-useless-constructor
  constructor(private router: Router, private loginservice : LoginService) {
    this.username = '';
    this.password = '';
  }

  loggedIn() {
    this.loginservice.login(this.username, this.password).subscribe((response) => {
      console.log(response);
      if(!response){
        alert("Wrong username or password");
      }else{
        this.router.navigate(['/search']);
      }
    });
  }

  ngOnInit(): void {
  }
}
