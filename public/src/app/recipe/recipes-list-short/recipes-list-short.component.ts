import { Component, OnInit } from '@angular/core';

import { IRecipe } from '../recipe';

import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'cook-recipes-list-short',
  templateUrl: './recipes-list-short.component.html',
  styleUrls: ['./recipes-list-short.component.css']
})
export class RecipesListShortComponent implements OnInit {
  private recipes: IRecipe[];
  private errorMessage: string;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipes()
      .subscribe(
      recipes => this.recipes = recipes,
      error => this.errorMessage = <any>error);
  }
}
