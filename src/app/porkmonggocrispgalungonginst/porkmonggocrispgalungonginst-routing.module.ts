import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorkmonggocrispgalungonginstPage } from './porkmonggocrispgalungonginst.page';

const routes: Routes = [
  {
    path: '',
    component: PorkmonggocrispgalungonginstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorkmonggocrispgalungonginstPageRoutingModule {}
