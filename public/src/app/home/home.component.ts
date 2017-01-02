import { Component, OnInit } from '@angular/core';

import { IArticle } from '../article/article';
import { IRecipe } from '../recipe/recipe';

import { ArticleService } from '../article/services/article.service';

import {SLIDE_PANEL_ANIMATION} from '../shared/animations/animations';

@Component({
  animations: [SLIDE_PANEL_ANIMATION()],
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private articles: IArticle[];
  private recipes: IRecipe[];

  private errorMessage: string;
  private isLoaded = false;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {

      this.isLoaded = true;
    
  }

}



