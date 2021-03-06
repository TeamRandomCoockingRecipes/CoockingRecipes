import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

import { RecipeRoutes } from './recipe.routing';

import { RecipeService } from './services/recipe.service';
import { RecipeFilterPipe } from './pipes/filter/recipe-filter.pipe';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ImageUrlComponent } from './image-url/image-url.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';

import { SharedModule } from '../shared/shared.module';
import { RecipesListShortComponent } from './recipes-list-short/recipes-list-short.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RecipeRoutes,
    SharedModule
  ],
  declarations: [
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeFilterPipe,
    CreateRecipeComponent,
    IngredientComponent,
    ImageUrlComponent,
    EditRecipeComponent,
    RecipesListShortComponent
  ],
  exports: [
    RecipesListShortComponent
  ],
  providers: [
    RecipeService
  ]
})
export class RecipeModule { }
