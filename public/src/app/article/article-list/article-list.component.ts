import { Component, OnInit } from '@angular/core';

import { IArticle } from '../article';
import { ArticleFilterPipe } from '../pipes/filter/article-filter.pipe';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: IArticle[];
  listFilter: string;

  private errorMessage: string;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles()
      .subscribe(
        articles => this.articles = articles,
        error => this.errorMessage = <any>error);
  }

}