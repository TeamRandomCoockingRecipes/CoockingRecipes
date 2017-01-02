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
    event.preventDefault();
    this.isDuplicatedUserError = false;

    this.authService.register(email, password)
    .subscribe(
      response => {
        localStorage.setItem('id_token', response);
        this.router.navigate(['home']);
    },
    error => {
      this.isDuplicatedUserError = true;
      // alert(error);
      // console.log(error);
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
