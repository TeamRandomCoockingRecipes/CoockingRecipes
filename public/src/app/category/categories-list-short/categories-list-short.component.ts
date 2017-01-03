import { Component, OnInit } from '@angular/core';

import {ICategory} from '../category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'cook-categories-list-short',
  templateUrl: './categories-list-short.component.html',
  styleUrls: ['./categories-list-short.component.css']
})
export class CategoriesListShortComponent implements OnInit {
  private categories: ICategory[];
  private errorMessage: string;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe(
        categoties => this.categories = categoties,
        error => this.errorMessage = <any> error);
  }
}
