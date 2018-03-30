import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../features/users/user.service';
import { map, take, tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService,
              private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.getUser$().pipe(
      take(1),
      map(u => !!u),
      tap(canGo =>  {
        console.log(canGo);
        if (!canGo) {
          this.router.navigate(['/users', 'sign-in']);
        }
      })
    );
  }

}
