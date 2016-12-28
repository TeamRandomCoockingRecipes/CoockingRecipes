// ne e dobre da e taka, triabva niakak da exportna syotvetnii artikyl v edit componenta
// a ne da pravia otnovo zaiavka

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { ArticleService } from '../services/article.service';
import { IArticle } from '../article';

@Component({
  selector: 'edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit, OnDestroy {
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

  editArticle() {
    this.articleService.editArticle(this.article)
      .subscribe(
        article => console.log("server rerurn article: ", article),
        error => this.errorMessage = <any>error);
  }

  // zarejda article detail vednyj dobre i posle vtori pyt s query parametri: zashto?
  onBack() {
    this.router.navigate(['/article', this.article._id]);
  }
}
