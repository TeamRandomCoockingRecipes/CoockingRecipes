import { Routes, RouterModule } from '@angular/router';

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { CreateArticleComponent } from './create/create-article.compontent';
import { EditArticleComponent } from './edit/edit-article.component';

const routes: Routes = [
  { path: 'articles', component: ArticleListComponent },
  { path: 'article/create', component: CreateArticleComponent },  
  { path: 'article/edit', component: EditArticleComponent },  
  { path: 'article/:id', component: ArticleDetailComponent }
];

export const ArticleRoutes = RouterModule.forChild(routes);
