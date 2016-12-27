import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category.component';

const routes: Routes = [
  { path: 'categories', component: CategoryComponent }
];

export const CategoryRoutes = RouterModule.forChild(routes);