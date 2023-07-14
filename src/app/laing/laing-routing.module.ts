import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaingPage } from './laing.page';

const routes: Routes = [
  {
    path: '',
    component: LaingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaingPageRoutingModule {}
