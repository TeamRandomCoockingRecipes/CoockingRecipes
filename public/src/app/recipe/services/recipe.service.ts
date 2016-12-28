import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';

import { IRecipe } from '../recipe'

@Injectable()
export class RecipeService {
  private headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });

    private recipesBackendUrl = 'http://localhost:3005/api/recipes';

    constructor(private http: Http) { }

    getRecipes(): Observable<IRecipe[]> {
        return this.http.get(this.recipesBackendUrl)
            .map((response: Response) => <IRecipe[]> response.json()['recipes'])
            // .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getRecipe(id: string): Observable<IRecipe> {
        let url = this.recipesBackendUrl + '/' + id;
        return this.http.get(url)
            .map((response: Response) => <IRecipe> response.json()['recipe'])
            // .do(data => console.log('recipe: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
