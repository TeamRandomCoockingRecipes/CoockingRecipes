import { Component, OnInit } from '@angular/core';

import { IArticle } from '../article';
import { ArticleService } from '../services/article.service';

import { OPACITY_ANIMATION } from '../../shared/animations/animations';

@Component({
  animations: [ OPACITY_ANIMATION() ],
  selector: 'cook-article-small',
  templateUrl: './article-small.component.html',
  styleUrls: ['./article-small.component.css']
})
export class ArticleSmallComponent implements OnInit {
  private articles: IArticle[];
  private errorMessage: string;
  private state: string;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles()
      .subscribe(
        articles => this.articles = articles,
        error => this.errorMessage = <any> error);
  }

  onMouseenter() {
    this.state = 'transparent';
  }

  onMouseleave() {
    this.state = 'solid';
  }

}
