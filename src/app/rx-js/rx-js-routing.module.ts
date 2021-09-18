import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxJSComponent } from './rx-js.component';

const routes: Routes = [{ path: '', component: RxJSComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxJSRoutingModule { }
