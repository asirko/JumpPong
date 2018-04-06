import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { catchError, filter, share, tap } from 'rxjs/operators';
import { LOCAL_TOKEN } from '../../shared/token-interceptor.service';
import { Router } from '@angular/router';

export class User {
  login: string;
}

@Injectable()
export class UserService {

  private user$ = new BehaviorSubject<User>(undefined);
  private refreshConnected$ = this.http.get<User>('/api/users/refreshConnected')
    .pipe(
      share(),
      tap(u => this.user$.next(u))
    );

  constructor(private http: HttpClient,
              private router: Router) {
    this.refreshConnected$.subscribe();
  }

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
      tap(() => this.user$.next(null)),
      tap(() => localStorage.removeItem(LOCAL_TOKEN)),
      tap(() => this.router.navigate(['/users', 'sign-in']))
    );
  }

}
