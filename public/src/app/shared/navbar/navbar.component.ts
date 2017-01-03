import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../autentication/service/authentication.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private pageTitle: string = 'CoockingRecipes';
  private isUserLogged: boolean = localStorage.getItem('auth_token') !== null;

  constructor(private authService: AuthenticationService) { }

  onLogout() {
    this.authService.logout()
      .subscribe(result => {
        if (result) {
          localStorage.removeItem('auth_token');
          alert('Succsessfull LogOut!');
        }
      });
  }

  ngOnInit() {
  }

}