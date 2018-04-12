import { Component, OnDestroy, OnInit } from '@angular/core';
import { User, UserService } from '../../features/users/user.service';
import { Subscription } from 'rxjs/Subscription';

import * as io from 'socket.io-client';

@Component({
  selector: 'jp-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  user: User;
  userSub: Subscription;

  socket: SocketIOClient.Socket;

  constructor(private userService: UserService) {
    this.socket = io('/', { path: '/socket' });
    console.log(this.socket);
  }

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
