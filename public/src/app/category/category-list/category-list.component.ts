import { Component, OnInit } from '@angular/core';

import { ICategory } from '../../category/category';

import { CategoryService } from '../../category/services/category.service';

import { AuthenticationService } from '../../autentication/service/authentication.service';

@Component({
  selector: 'app-category',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  private categories: ICategory[];
  private errorMessage: string;

  private hoveredImgStyle: string = '0 0 10px rgba(0, 0, 0, 0.8)';
  private isUserLogged: boolean = this.authService.isLogedIn();

  constructor(
    private categoryService: CategoryService, 
    private authService: AuthenticationService) { }

  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe(
        categories => this.categories = categories,
        error => this.errorMessage = <any>error);
  }
}
