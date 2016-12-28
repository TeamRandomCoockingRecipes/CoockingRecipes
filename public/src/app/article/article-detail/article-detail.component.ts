import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { ArticleService } from '../services/article.service';
import { IArticle } from '../article';

@Component({
  selector: 'article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Article detail';
  article: IArticle;

  errorMessage: string;
  private sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private articleService: ArticleService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      params => {
        let id = params['id'];
        this.getArticle(id);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getArticle(id: string) {
    this.articleService.getArticle(id)
      .subscribe(
        article => this.article = article,
        error => this.errorMessage = <any>error);
  }

  onEdit() {
    console.log("edit");
  }

  onDelete() {
    console.log("delete");
  }

  onBack(): void {
    this.router.navigate(['/articles']);
  }

}