import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { CategoryService } from '../services/category.service';
import { ICategory } from '../category';

@Component({
  selector: 'category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Category detail';
  category: ICategory;

  errorMessage: string;
  private sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService) { }

  ngOnInit(): void {
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

        console.log("in category detetail get category --- ", this.category);
  }

  onBack(): void {
    this.router.navigate(['/categories']);
  }

}