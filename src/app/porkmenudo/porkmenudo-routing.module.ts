import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorkmenudoPage } from './porkmenudo.page';

const routes: Routes = [
  {
    path: '',
    component: PorkmenudoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorkmenudoPageRoutingModule {}
