import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';

import { ICategory } from '../category';

@Injectable()
export class CategoryService {
    private categoryBackendUrl = 'http://localhost:3005/categories/api';
    private catergoriesUrl = 'api/testStore/categories.json';

    constructor(private http: Http) { }

    getCategories(): Observable<ICategory[]> {
        return this.http.get(this.categoryBackendUrl)
            .map((response: Response) => <ICategory[]> response.json()['result'])
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError)
    }

    getCategory(id: string): Observable<ICategory> {
        return this.getCategories()
            .map((categories: ICategory[]) => categories.find(c => c._id === id))
            .do(data => console.log(JSON.stringify(data)));
    }

    addCategory(newCategory: ICategory): Observable<ICategory> {
        return this.http.post(this.categoryBackendUrl, newCategory)
            .map(this.extractData)
            .catch(this.handleError);
    }


    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error')
    }
}