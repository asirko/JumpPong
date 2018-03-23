import { NgModule } from '@angular/core';

import { PongRoutingModule } from './pong-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    PongRoutingModule
  ],
  declarations: []
})
export class PongModule { }
