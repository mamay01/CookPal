import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BangusinstPage } from './bangusinst.page';

const routes: Routes = [
  {
    path: '',
    component: BangusinstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BangusinstPageRoutingModule {}
