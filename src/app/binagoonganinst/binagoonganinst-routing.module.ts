import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BinagoonganinstPage } from './binagoonganinst.page';

const routes: Routes = [
  {
    path: '',
    component: BinagoonganinstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BinagoonganinstPageRoutingModule {}
