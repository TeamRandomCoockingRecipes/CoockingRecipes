import { Component, OnInit } from '@angular/core';

import { ICategory } from '../category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  newCategory = {
    name: '',
    imgUrl: '',
    description: ''
  };

  categories: ICategory[];
  errorMessage: string;

  constructor(private categoryService: CategoryService) { }

  createCategory() {
    const { name, imgUrl, description } = this.newCategory;

    if (name && imgUrl && description) {
      this.categoryService.createCategory(this.newCategory)
        .subscribe(
          category => console.log(category));

      this.newCategory.name = '';
      this.newCategory.imgUrl = '';
      this.newCategory.description = '';

      this.getCategories();  
    }
  }

  getCategories() {
    this.categoryService.getCategories()
      .subscribe(
        categories => this.categories = categories,
        error => this.errorMessage = <any>error);
  }

  ngOnInit() {
   this.getCategories(); 
  }

}