import { Component, OnInit } from '@angular/core';

import { IArticle } from '../article';
import { ArticleService } from '../services/article.service';

import { SLIDE_PANEL_ANIMATION } from '../../shared/animations/animations';

@Component({
  animations: [SLIDE_PANEL_ANIMATION()],
  selector: 'cook-articles-list-short',
  templateUrl: './articles-list-short.component.html',
  styleUrls: ['./articles-list-short.component.css']
})
export class ArticlesListShortComponent implements OnInit {
  private articles: IArticle[];
  private errorMessage: string;
  private hoveredIndex: number = -1;
  private isLoaded = false;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles()
      .subscribe(
      articles => this.articles = articles,
      error => this.errorMessage = <any>error);

      this.isLoaded = true;
  }

}


