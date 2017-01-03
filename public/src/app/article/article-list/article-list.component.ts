import { Component, OnInit } from '@angular/core';

import { IArticle } from '../article';
import { ArticleFilterPipe } from '../pipes/filter/article-filter.pipe';
import { ArticleService } from '../services/article.service';
import { PagerService } from '../../shared/services/paager/pager.service';
import { AuthenticationService } from '../../autentication/service/authentication.service';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  private articlesAll: IArticle[];
  private listFilter: string;
  private hoveredImgStyle: string = '0 0 10px rgba(0, 0, 0, 0.8)';
  private isUserLogged: boolean = this.authService.isLogedIn();

  private pager: any = {};
  private pagedArticles: any[];

  private errorMessage: string;

  constructor(
    private articleService: ArticleService, 
    private pagerService: PagerService,
    private authService: AuthenticationService) { }

  ngOnInit() {
    this.articleService.getArticles()
      .subscribe(
        articlesAll => {
          this.articlesAll = articlesAll;

          // initialize to page 1
          this.setPage(1);
        },
        error => this.errorMessage = <any>error);
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.articlesAll.length, page);

    // get current page of items
    this.pagedArticles = this.articlesAll.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}