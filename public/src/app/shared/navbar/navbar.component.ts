import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private pageTitle: string = 'CoockingRecipes';
  private isUserLogged: boolean = localStorage.getItem('auth_token') !== null;

  constructor( ) { }

  onLogout() {
    localStorage.removeItem('auth_token');
  }

  ngOnInit() {
  }

}