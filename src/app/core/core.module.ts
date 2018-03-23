import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    CoreRoutingModule
  ],
  exports: [
    CoreRoutingModule
  ],
  declarations: [
    LayoutComponent
  ]
})
export class CoreModule { }
