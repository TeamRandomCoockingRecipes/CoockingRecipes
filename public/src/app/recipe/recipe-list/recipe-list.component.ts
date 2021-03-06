import { Component, OnInit } from '@angular/core';

import { IRecipe } from '../recipe';

import { RecipeService } from '../services/recipe.service';

import { AuthenticationService } from '../../autentication/service/authentication.service';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  private addColor: string = 'green';
  private recipes: IRecipe[];
  private hoveredImgStyle: string = '0 0 10px rgba(0, 0, 0, 0.8)';
  private errorMessage: string;
  private isUserLogged: boolean = this.authService.isLogedIn();

  constructor(
    private recipeService: RecipeService,
    private authService: AuthenticationService) { }

  ngOnInit() {
    this.recipeService.getRecipes()
      .subscribe(
      recipes => this.recipes = recipes,
      error => this.errorMessage = <any>error);
  }

}
