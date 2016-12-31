import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private authService: AuthenticationService) { }

  signup(event, email, password) {
    event.preventDefault();

    this.authService.register(email, password)
    .subscribe(
      response => {
        localStorage.setItem('id_token', response);
        this.router.navigate(['home']);
    },
    error => {
      alert(error.text());
      console.log(error.text());
    }
    );
  }

  login(event) {
    event.preventDefault();
    this.router.navigate(['login']);
  }

  ngOnInit() {
  }

}
