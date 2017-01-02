import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private isWrongEmail = false;

  constructor(public router: Router, private authService: AuthenticationService) { }

  login(event, email, password) {
    event.preventDefault();

    this.authService.login(email, password)
    .subscribe(
      response => {
        localStorage.setItem('id_token', response);
        this.router.navigate(['home']);
      },
      error => {
      
        alert(error);
        console.log(error);
      }
    );
  }

  // signup(event) {
  //   event.preventDefault();
  //   this.router.navigate(['signup']);
  // }

  ngOnInit() {
  }

}
