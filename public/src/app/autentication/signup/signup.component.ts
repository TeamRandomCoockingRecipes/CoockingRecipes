import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private isDuplicatedUserError: boolean = false;

  constructor(private router: Router, private authService: AuthenticationService) { }

  signup(event, email, password) {
    console.log("signup email:  ", email);
    console.log("signup password:  ", password);
    event.preventDefault();
    this.isDuplicatedUserError = false;


    this.authService.register(email, password)
      .subscribe(
        response => {
          localStorage.setItem('auth_token', response);
          this.authService.logedIn = true;
          this.router.navigate(['home']);
      },
      error => {
        this.isDuplicatedUserError = true;
        alert(error);
        console.log(error);
      }
    );
  }

  login(event) {
    event.preventDefault();
    this.router.navigate(['login']);
  }

  userEmailUpdated() {
    this.isDuplicatedUserError = false;
  }

  ngOnInit() {
  }

}
