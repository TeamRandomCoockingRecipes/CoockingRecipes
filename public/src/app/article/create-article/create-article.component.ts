import { Component, OnInit } from '@angular/core';

import { IArticle } from '../article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  newArticle = {
    title: '',
    imgUrl: '',
    content: ''
  };

  articles: IArticle[];
  errorMessage: string;

  constructor(private articleService: ArticleService) { }

  createArticle() {
    const { title, content, imgUrl } = this.newArticle;

    if (title && content && imgUrl) {
      this.articleService.createArticle(this.newArticle)
        .subscribe(
          article => console.log(article));

      this.newArticle.content = '';
      this.newArticle.imgUrl = '';
      this.newArticle.title = '';

      this.getArticles();  // ne raboti dobre
    }
  }

  getArticles() {
    this.articleService.getArticles()
      .subscribe(
        articles => this.articles = articles,
        error => this.errorMessage = <any>error);
  }

  ngOnInit() {
   this.getArticles(); 
  }

}
