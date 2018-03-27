import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { filter } from 'rxjs/operators';

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
    return this.http.post<User>('/api/users/login', {login, password});
  }

}
