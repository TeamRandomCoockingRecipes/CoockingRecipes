import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { CreateArticleComponent } from './create/create-article.compontent';
import { EditArticleComponent } from './edit/edit-article.component';

import { ArticleRoutes } from './article.routing';
import { ArticleService } from './services/article.service';

@NgModule({
  imports: [
    CommonModule,
    ArticleRoutes
  ],
  declarations: [
    ArticleListComponent,
    ArticleDetailComponent,
    CreateArticleComponent,
    EditArticleComponent
  ],
  providers: [ArticleService],
  exports: [
    ArticleDetailComponent, // не е задължително да го експортваме (поне засега)
    ArticleListComponent
  ]
})
export class ArticleModule { }