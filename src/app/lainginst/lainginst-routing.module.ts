import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LainginstPage } from './lainginst.page';

const routes: Routes = [
  {
    path: '',
    component: LainginstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LainginstPageRoutingModule {}
