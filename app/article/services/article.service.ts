import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

import { IArticle } from '../article';

@Injectable()
export class ArticleService {
    private articleBackendUrl = 'http://localhost:3005/api/articles/test';
    private articlesUrl = 'api/testStore/articles.json';

    constructor(private http: Http) { } 

    getArticles(): Observable<IArticle[]> {
        return this.http.get(this.articleBackendUrl)
            .map((response: Response) => <IArticle[]> response.json()['result'])
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError)
    }

    // getById()
    // add()
    // edit()
    // delete()

    handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error')
    }
}