import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorkmenudoingredPage } from './porkmenudoingred.page';

const routes: Routes = [
  {
    path: '',
    component: PorkmenudoingredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorkmenudoingredPageRoutingModule {}
