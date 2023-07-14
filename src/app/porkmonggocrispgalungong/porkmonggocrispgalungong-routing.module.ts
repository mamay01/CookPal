import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorkmonggocrispgalungongPage } from './porkmonggocrispgalungong.page';

const routes: Routes = [
  {
    path: '',
    component: PorkmonggocrispgalungongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorkmonggocrispgalungongPageRoutingModule {}
