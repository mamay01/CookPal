import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaingingredPage } from './laingingred.page';

const routes: Routes = [
  {
    path: '',
    component: LaingingredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaingingredPageRoutingModule {}
