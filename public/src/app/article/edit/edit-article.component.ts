import { Component, OnInit } from '@angular/core';

import { IArticle } from '../article';

import { ArticleService } from '../services/article.service';

@Component({
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  private articles: IArticle[];
  private errorMessage: string;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {

  }

}