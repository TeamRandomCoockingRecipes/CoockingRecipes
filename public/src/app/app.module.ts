import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

// Modules
import { ArticleModule } from './article/article.module';
import { SharedModule } from './shared/shared.module';

// Components
import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';

// Services and Routes
import { AppRoutes } from './app.routing';
import { CategoryComponent } from './category/category.component';



@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    CommonModule,
    RouterModule,
    ArticleModule,
    SharedModule,
    AppRoutes
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [

  ]
})
export class AppModule { }
