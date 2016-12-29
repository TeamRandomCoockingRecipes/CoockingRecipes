import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';

import { ArticleFilterPipe } from './pipes/filter/article-filter.pipe';
import { ArticleRoutes } from './article.routing';
// import { AppService } from './services/app/app.service';
import { ArticleService } from './services/article.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ArticleRoutes
  ],
  declarations: [
    ArticleListComponent,
    ArticleDetailComponent,
    CreateArticleComponent,
    EditArticleComponent,
    ArticleFilterPipe
  ],
  providers: [
    // AppService,
    ArticleService
  ],
  exports: [
    ArticleDetailComponent, // не е задължително да го експортваме (поне засега)
    ArticleListComponent
  ]
})
export class ArticleModule { }