import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthenticationService {
  private headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });

  private baseUrl: string = 'http://localhost:3005/api/autenticate';

  constructor(private http: Http, private route: Router) { }

  register(email: string, password: string): Observable<any> {
    let body = JSON.stringify({ email, password });

    return this.http.post(
      `${this.baseUrl}/register`,
      body, 
      { headers: this.headers })
      .map((result: Response) => <any> JSON.stringify(result))
      .do(data => console.log("register : " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  login(email: string, password: string): Observable<any> {
     let body = JSON.stringify({ email, password });

    return this.http.post(
      `${this.baseUrl}/login`,
       body, 
       { headers: this.headers })
       .map((result: Response) => <any> JSON.stringify(result))
       .do(data => console.log("login : " + JSON.stringify(data)))
       .catch(this.handleError);

  }

  logout() {

  }

  private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
  }

}
