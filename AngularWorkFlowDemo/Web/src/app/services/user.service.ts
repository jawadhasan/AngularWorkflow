import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, empty, of, from, observable, throwError  } from 'rxjs';
import { delay, flatMap } from 'rxjs/operators';
import { UserApi } from '../../fw/users/user-api';

@Injectable()
export class UserService implements UserApi {
  isAuthenticated = true;
  constructor(private router: Router) { }

  signIn(username: string, password: string, rememberMe: boolean): Observable<any> {
    console.log('UserService.signIn: ' + username + ' ' + password + ' ' + rememberMe);
    this.isAuthenticated = true;
    if(username === 'y2k'){
       return from<string>(['']).pipe(delay(1000));
    }else{
      return of({}).pipe(delay(2000)).pipe(flatMap(x=> throwError('Invalid User Name and/or Password')));
      // return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Invalid User Name and/or Password'));
    } 
  }

  signOut(): Observable<any> {
    this.isAuthenticated = false;
    this.router.navigate(['/signin']);
    return from<string>(['']);
    //return Observable.of({});
  }
}
