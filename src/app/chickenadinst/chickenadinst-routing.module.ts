import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChickenadinstPage } from './chickenadinst.page';

const routes: Routes = [
  {
    path: '',
    component: ChickenadinstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChickenadinstPageRoutingModule {}
