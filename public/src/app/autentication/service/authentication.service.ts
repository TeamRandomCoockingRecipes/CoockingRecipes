import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthenticationService {
  private headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });

  private baseUrl: string = 'http://localhost:3005/api/autenticate';
  logedIn: boolean = false;

  constructor(private http: Http, private route: Router) {
    this.logedIn = !!localStorage.getItem('auth_token');
   }

  register(email: string, password: string): Observable<any> {
    // let body = JSON.stringify({ email, password, confirmPassword });
    let body = { email, password};

    return this.http.post(
      `${this.baseUrl}/register`,
      body, 
      { headers: this.headers })
      .map(this.checkForErrors)
      .do(data => console.log("register : " + JSON.stringify(data)))
      // .catch(err => Observable.throw(err))
      .catch(this.handleError)
      .map((result: Response) => <any> JSON.stringify(result))
  }

  login(email: string, password: string): Observable<any> {
     let body = JSON.stringify({ email, password });

    return this.http.post(
      `${this.baseUrl}/login`,
       body, 
       { headers: this.headers })
       .map(this.checkForErrors)
       .do(data => console.log("login : " + JSON.stringify(data)))
       .catch(this.handleError)
       .map((result: Response) => <any> JSON.stringify(result));
  }

  logout(): Observable<any> {
    return this.http.get(`${this.baseUrl}/logout`)
            .map((response: Response) => <any> response.json())
            // .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError)
  }

  isLogedIn() {
    return this.logedIn;
  }

  private handleError(error: Response) {
        console.log("handleError: ", error);
        return Observable.throw(error.statusText || 'Server error');
  }

  checkForErrors(resp: Response) {
    console.log("checkForErrors:    ", resp);
        if (resp.status >= 200 && resp.status < 300) {
            return resp
        } else {
          console.log(resp);
            let error = new Error(resp.statusText)
            error['response'] = resp
            console.log("my error:   ",error)
            throw error
        }
    }
}
