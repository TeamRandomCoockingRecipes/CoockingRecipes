// import { Injectable } from '@angular/core';
// import { Http, Headers, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/do'
// import 'rxjs/add/operator/catch'

// @Injectable()
// export class AppService {
//     private headers: Headers = new Headers({
//         'Content-Type': 'aplication/json',
//         'Accept': 'application/json'
//     });

//     private baseUrl: string = 'http://localhost:3005/api';

//     constructor(private http: Http) { }

//     private handleError(error: Response) {
//         console.log(error);
//         return Observable.throw(error.json().error || 'Server error')
//     }

//     private getJson(response: Response) {
//         return response.json();
//     }

//     get(path: string): Observable<any> {
//         return this.http.get(
//             `${this.baseUrl}${path}`,
//             { headers: this.headers })
//             .map((response: Response) => <any>response.json()['result'])
//             .do(data => console.log('All: ' + JSON.stringify(data)))
//             .catch(this.handleError)
//     }

//     getById(id: string, path: string): Observable<any> {
//         return this.http.get(
//             `${this.baseUrl}${path}/${id}`,
//             { headers: this.headers })
//             .map((response: Response) => <any>response.json())
//             .catch(this.handleError)
//     }

//     post(path: string, data): Observable<any> {
//         return this.http.post(
//             `${this.baseUrl}${path}`,
//             JSON.stringify(data),
//             { headers: this.headers })
//             .map(this.handleError)
//             .catch(err => Observable.throw(err))
//             .map(this.getJson)
//     }

//     delete(path: string): Observable<any> {
//         return this.http.delete(
//             `${this.baseUrl}${path}`,
//             { headers: this.headers })
//             .map(this.handleError)
//             .catch(err => Observable.throw(err))
//             .map(this.getJson)
//     }

// }
