import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  imports: [
    SharedModule,
    UsersRoutingModule
  ],
  declarations: [SignInComponent]
})
export class UsersModule { }
