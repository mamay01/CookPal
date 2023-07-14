import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PepperporkPage } from './pepperpork.page';

const routes: Routes = [
  {
    path: '',
    component: PepperporkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PepperporkPageRoutingModule {}
