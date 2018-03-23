import { NgModule } from '@angular/core';

import { ScoresRoutingModule } from './scores-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ScoresRoutingModule
  ],
  declarations: []
})
export class ScoresModule { }
