import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';

import { CategoryService } from './services/category.service';
import { CategoryRoutes } from './category.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CategoryRoutes
  ],
  declarations: [
    CategoryListComponent,
    CategoryDetailComponent,
    CategoryCreateComponent,
    CategoryEditComponent
  ],
  providers: [CategoryService],
  exports: [
    CategoryListComponent,
    CategoryDetailComponent,
    CategoryCreateComponent,
    CategoryEditComponent
  ]
})
export class CategoryModule { }
