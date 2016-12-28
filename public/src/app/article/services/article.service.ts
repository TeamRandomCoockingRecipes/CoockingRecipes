import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';

import { IArticle } from '../article';

@Injectable()
export class ArticleService {
    private headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });

    private articleBackendUrl = 'http://localhost:3005/api/articles';
    private articlesUrl = 'api/testStore/articles.json';

    constructor(private http: Http) { }

    getArticles(): Observable<IArticle[]> {
        return this.http.get(this.articleBackendUrl)
            .map((response: Response) => <IArticle[]> response.json()['result'])
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError)
    }

    getArticle(id: string): Observable<IArticle> {
        return this.getArticles()
            .map((articles: IArticle[]) => articles.find(a => a._id === id))
            .do(data => console.log(JSON.stringify(data)));
    }

    createArticle(newArticle: any): Observable<IArticle> {
        return this.http.post(
            this.articleBackendUrl,
             newArticle,
             { headers: this.headers })
            .map((res: Response) => <IArticle> res.json())
            .do(data => console.log("edited : " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    editArticle(newArticle: IArticle): Observable<IArticle> {
        console.log("in edit article service : ", newArticle);
        return this.http.put(
            `${this.articleBackendUrl}/edit`,
            newArticle,
            { headers: this.headers })
            .map(this.exrectData)
            .catch(this.handleError);
    }

    deleteArticle(article: IArticle): Observable<IArticle> {
        console.log("in article delete service :  ", article);
        return this.http.put(
            `${this.articleBackendUrl}/delete`,
            article,
            { headers: this.headers })
            .map(this.exrectData)
            .catch(this.handleError);
    }

    private exrectData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}