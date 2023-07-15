import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChickcurryinstPage } from './chickcurryinst.page';

const routes: Routes = [
  {
    path: '',
    component: ChickcurryinstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChickcurryinstPageRoutingModule {}
