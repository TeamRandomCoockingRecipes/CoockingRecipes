import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryCreateComponent } from './category-create/category-create.component';

import { CategoryService } from './services/category.service';
import { CategoryRoutes } from './category.routing';
import { CategoriesListShortComponent } from './categories-list-short/categories-list-short.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CategoryRoutes,
    SharedModule
  ],
  declarations: [
    CategoryListComponent,
    CategoryDetailComponent,
    CategoryCreateComponent,
    CategoriesListShortComponent
  ],
  providers: [CategoryService],
  exports: [
    CategoryListComponent,
    CategoryDetailComponent,
    CategoryCreateComponent,
    CategoriesListShortComponent
  ]
})
export class CategoryModule { }
