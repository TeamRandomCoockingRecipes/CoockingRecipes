import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';

import { IArticle } from '../article';

@Injectable()
export class ArticleService {
    private articleBackendUrl = 'http://localhost:3005/api/articles/test';
    private articlesUrl = 'api/testStore/articles.json';

    constructor(private http: Http) { }

    getArticles(): Observable<IArticle[]> {
        return this.http.get(this.articlesUrl)
            .map((response: Response) => <IArticle[]> response.json()['result'])
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError)
    }

    // getArticleById(): Observable<IArticle> {
    //     let articles = '';
    // }

    getArticle(id: number): Observable<IArticle> {
        return this.getArticles()
            .map((articles: IArticle[]) => articles.find(a => a.id === id))
            .do(data => console.log(JSON.stringify(data)));
    }

    addArticle(newArticle: IArticle): Observable<IArticle> {
        return this.http.post(this.articlesUrl, newArticle)
            .map(this.exrectData)
            .catch(this.handleError);
    }

    // edit()
    // delete()

    private exrectData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error')
    }
}