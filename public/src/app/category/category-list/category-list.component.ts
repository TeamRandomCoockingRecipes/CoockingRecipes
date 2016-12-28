import { Component, OnInit } from '@angular/core';

import { ICategory } from '../../category/category';

import { CategoryService } from '../../category/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  private categories: ICategory[];
  private errorMessage: string;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe(
        categories => this.categories = categories,
        error => this.errorMessage = <any>error);
  }

}
