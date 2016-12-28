import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

import { CategoryService } from './services/category.service';
import { CategoryRoutes } from './category.routing';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutes
  ],
  declarations: [
    CategoryListComponent,
    CategoryDetailComponent
  ],
  providers: [CategoryService],
  exports: [
    CategoryListComponent,
    CategoryDetailComponent
  ]
})
export class CategoryModule { }
