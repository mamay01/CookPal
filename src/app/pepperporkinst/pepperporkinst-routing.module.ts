import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PepperporkinstPage } from './pepperporkinst.page';

const routes: Routes = [
  {
    path: '',
    component: PepperporkinstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PepperporkinstPageRoutingModule {}
