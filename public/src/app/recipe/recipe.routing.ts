import { Routes, RouterModule } from '@angular/router';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';

const routes: Routes = [
  { path: 'recipes', component: RecipeListComponent },
  { path: 'recipe/create', component: CreateRecipeComponent },
  { path: 'recipe/:id', component: RecipeDetailComponent },
  { path: 'recipe/edit/:id', component: EditRecipeComponent }
];

export const RecipeRoutes = RouterModule.forChild(routes);
