import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';

// Modules
import { ArticleModule } from './article/article.module';
import { SharedModule } from './shared/shared.module';
import  {CategoryModule} from './category/category.module';

// Components
import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';

// Services and Routes
import { AppRoutes } from './app.routing';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ArticleModule,
    CategoryModule,
    SharedModule,
    AppRoutes
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [

  ]
})
export class AppModule { }
