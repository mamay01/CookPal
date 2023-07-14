import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorkmenudoinstPage } from './porkmenudoinst.page';

const routes: Routes = [
  {
    path: '',
    component: PorkmenudoinstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorkmenudoinstPageRoutingModule {}
