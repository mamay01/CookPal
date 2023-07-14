import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PepperporkingredPage } from './pepperporkingred.page';

const routes: Routes = [
  {
    path: '',
    component: PepperporkingredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PepperporkingredPageRoutingModule {}
