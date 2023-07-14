import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShanghaiinstPage } from './shanghaiinst.page';

const routes: Routes = [
  {
    path: '',
    component: ShanghaiinstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShanghaiinstPageRoutingModule {}
