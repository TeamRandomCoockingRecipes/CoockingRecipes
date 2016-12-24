import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

// Components
import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

// Services and Routes
import { AppRoutes } from './app.routing';

// Modules
import { ArticleModule } from './article/article.module';
import { SharedModule } from './shared/shared.module';

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
    NavbarComponent,
    HomeComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [

  ]
})
export class AppModule { }
