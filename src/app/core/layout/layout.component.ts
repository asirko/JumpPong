import { Component, OnDestroy, OnInit } from '@angular/core';
import { User, UserService } from '../../features/users/user.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'jp-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  user: User;
  userSub: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userSub = this.userService.getUser$().subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  logout(): void {
    this.userService.logout()
      .subscribe();
  }

}
