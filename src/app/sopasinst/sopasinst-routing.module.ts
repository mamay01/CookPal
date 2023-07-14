import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SopasinstPage } from './sopasinst.page';

const routes: Routes = [
  {
    path: '',
    component: SopasinstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SopasinstPageRoutingModule {}
