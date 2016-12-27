import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CategoryComponent } from './category.component';

import { CategoryService } from './services/category.service';
import { CategoryRoutes } from './category.routing';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutes
  ],
  declarations: [
    CategoryComponent
  ],
  providers: [CategoryService],
  exports: [
    CategoryComponent
  ]
})
export class CategoryModule { }
