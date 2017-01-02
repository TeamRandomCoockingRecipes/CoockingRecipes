import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {SharedModule} from '../shared/shared.module';

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';

import { ArticleFilterPipe } from './pipes/filter/article-filter.pipe';
import { ArticleRoutes } from './article.routing';
// import { AppService } from './services/app/app.service';
import { ArticleService } from './services/article.service';
import { ArticlesListShortComponent } from '../article/articles-list-short/articles-list-short.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ArticleRoutes,
    // SharedModule
  ],
  declarations: [
    ArticleListComponent,
    ArticleDetailComponent,
    CreateArticleComponent,
    EditArticleComponent,
    ArticleFilterPipe,
    ArticlesListShortComponent
  ],
  providers: [
    // AppService,
    ArticleService
  ],
  exports: [
    ArticleDetailComponent, // не е задължително да го експортваме (поне засега)
    ArticleListComponent,
    ArticlesListShortComponent
  ]
})
export class ArticleModule { }