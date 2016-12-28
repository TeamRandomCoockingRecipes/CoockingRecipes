import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { IRecipe } from '../recipe';

import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  pageTitle: string = 'Recipe details';
  private recipe: IRecipe;
  private errorMessage: string;
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      params => {
        let id = params['id'];
        this.getRecipe(id);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getRecipe(id: string) {
    this.recipeService.getRecipe(id)
      .subscribe(
      recipe => this.recipe = recipe,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/recipes']);
  }

}
