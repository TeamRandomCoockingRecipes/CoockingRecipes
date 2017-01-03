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

    // private recipesBackendUrl = 'http://localhost:3005/api/recipes';
    private recipesBackendUrl = 'https://cooking-recipes-2.herokuapp.com/api/recipes';

    constructor(private http: Http) { }

    getRecipes(): Observable<IRecipe[]> {
        return this.http.get(this.recipesBackendUrl)
            .map((response: Response) => <IRecipe[]>response.json()['recipes'])
            // .do(data => console.log('All: ' + JSON.stringify(data)))
            .do(data => console.log('All recipes: ' + data.length))
            .catch(this.handleError);
    }

    getRecipe(id: string): Observable<IRecipe> {
        let url = this.recipesBackendUrl + '/' + id;
        return this.http.get(url)
            .map((response: Response) => <IRecipe>response.json()['recipe'])
            // .do(data => console.log('recipe: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    createRecipe(newRecipe: any): Observable<IRecipe> {
        // console.log(`In CreateRecipeService with ${newRecipe.title}`);
        return this.http.post(
            this.recipesBackendUrl,
            newRecipe,
            { headers: this.headers })
            .map((res: Response) => <IRecipe>res.json())
            .do(data => console.log("created : " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    editRecipe(editedRecipe: any): Observable<IRecipe> {
        // console.log(`In EditRecipeService with ${editedRecipe.title}`);
        return this.http.post(
            this.recipesBackendUrl + '/edit/' + editedRecipe._id,
            editedRecipe,
            { headers: this.headers })
            .map((res: Response) => <IRecipe>res.json())
            // .do(data => console.log("changed : " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    // markRecipeAsDeleted(deletedRecipe: any): Observable<IRecipe> {
    //     // console.log(`In EditRecipeService with ${editedRecipe.title}`);
    //     deletedRecipe['deleted'] = true;
    //     return this.http.post(
    //         this.recipesBackendUrl + '/edit/' + deletedRecipe._id,
    //         deletedRecipe,
    //         { headers: this.headers })
    //         .map((res: Response) => <IRecipe>res.json())
    //         .do(data => console.log("DELETED : " + JSON.stringify(data)))
    //         .catch(this.handleError);
    // }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
