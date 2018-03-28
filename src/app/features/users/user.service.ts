import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { filter, tap } from 'rxjs/operators';

export class User {
  login: string;
}

@Injectable()
export class UserService {

  user$ = new BehaviorSubject<User>(undefined);

  constructor(private http: HttpClient) {}

  getUser$(): Observable<User> {
    return this.user$.asObservable().pipe(filter(u => u !== undefined));
  }

  signIn$(login, password): Observable<User> {
    return this.http.post<User>('/api/users/login', {login, password}).pipe(
      tap(u => this.user$.next(u))
    );
  }

  logout(): Observable<any> {
    return this.http.get('/api/users/logout').pipe(
      tap(() => this.user$.next(null))
    );
  }

}
