import { Component, OnInit } from '@angular/core';

import { IRecipe } from '../recipe';

import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  private addColor: string = 'green';
  private recipes: IRecipe[];
  private hoveredImgWidth: string = '100px';
  private errorMessage: string;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipes()
      .subscribe(
      recipes => this.recipes = recipes,
      error => this.errorMessage = <any>error);
  }

}
