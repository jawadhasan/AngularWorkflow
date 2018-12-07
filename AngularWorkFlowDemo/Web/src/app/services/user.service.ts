import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, empty, of, from } from 'rxjs';
import { UserApi } from './user-api';

@Injectable()
export class UserService implements UserApi {
  isAuthenticated = true;
  constructor(private router: Router) { }

  signIn(username: string, password: string, rememberMe: boolean): Observable<any> {
    console.log('UserService.signIn: ' + username + ' ' + password + ' ' + rememberMe);
    this.isAuthenticated = true;
    return from<string>(['']);
    // return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Invalid User Name and/or Password'));
  }

  signOut(): Observable<any> {
    this.isAuthenticated = false;
    this.router.navigate(['/signin']);
    return from<string>(['']);

      //return Observable.of({});
  }

}
