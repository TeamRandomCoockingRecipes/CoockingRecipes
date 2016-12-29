import { Pipe, PipeTransform } from '@angular/core';

import { IArticle } from '../../article';

@Pipe({
  name: 'articleFilter'
})
export class ArticleFilterPipe implements PipeTransform {

  transform(value: IArticle[], filterBy?: string): IArticle[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

    return filterBy ? value.filter((article: IArticle) => 
      article.title.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }
}