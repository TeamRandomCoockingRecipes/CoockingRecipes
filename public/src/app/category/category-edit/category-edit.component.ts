import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { CategoryService } from '../services/category.service';
import { ICategory } from '../category';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html'
})
export class CategoryEditComponent implements OnInit {
  category: ICategory;
  errorMessage: string;
  private sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        let id = params['id'];
        this.getCategory(id);
      });     
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getCategory(id: string) {
    this.categoryService.getCategory(id)
      .subscribe(
        category => this.category = category,
        error => this.errorMessage = <any>error);
  }

  editCategory() {
    this.categoryService.editCategory(this.category)
      .subscribe(
        category => console.log("Server returns category: ", category),
        error => this.errorMessage = <any>error);
  }

  onBack() {
    this.router.navigate(['/category', this.category._id]);
  }

}
