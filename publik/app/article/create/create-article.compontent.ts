import { Component, OnInit } from '@angular/core';

import { IArticle } from '../article';

import { ArticleService } from '../services/article.service';

@Component({
  moduleId: module.id,
  templateUrl: './create-article.compontent.html',
  styleUrls: ['./create-article.compontent.html']
})
export class CreateArticleComponent implements OnInit {
  private articles: IArticle[];
  private errorMessage: string;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles()
      .subscribe(
        articles => this.articles = articles,
        error => this.errorMessage = <any>error);
  }

}