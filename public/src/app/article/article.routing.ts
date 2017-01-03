import { Routes, RouterModule } from '@angular/router';

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';

import {AuthenticationGuard } from '../autentication/autentication.guard';

const routes: Routes = [
  { path: 'articles', component: ArticleListComponent },
  { path: 'article/create', component: CreateArticleComponent, canActivate: [AuthenticationGuard] },  
  { path: 'article/:id', component: ArticleDetailComponent },
  { path: 'article/edit/:id', component: EditArticleComponent, canActivate: [AuthenticationGuard] }
];

export const ArticleRoutes = RouterModule.forChild(routes);
