import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

import { RecipeRoutes } from './recipe.routing';

import { RecipeService } from './services/recipe.service';

@NgModule({
  imports: [
    CommonModule,
    RecipeRoutes
  ],
  declarations: [
    RecipeListComponent,
    RecipeDetailComponent
  ],
  providers: [
    RecipeService
  ]
})
export class RecipeModule { }
