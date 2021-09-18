import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxJSRoutingModule } from './rx-js-routing.module';
import { RxJSComponent } from './rx-js.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    RxJSComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    RxJSRoutingModule
  ]
})
export class RxJSModule { }
