import { Routes, RouterModule } from '@angular/router';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryCreateComponent } from './category-create/category-create.component';

const routes: Routes = [
  { path: 'categories', component: CategoryListComponent },
  { path: 'category/:id', component: CategoryDetailComponent },
  { path: 'category/create', component: CategoryCreateComponent }, 
];

export const CategoryRoutes = RouterModule.forChild(routes);