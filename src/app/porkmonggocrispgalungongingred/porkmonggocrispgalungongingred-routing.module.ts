import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorkmonggocrispgalungongingredPage } from './porkmonggocrispgalungongingred.page';

const routes: Routes = [
  {
    path: '',
    component: PorkmonggocrispgalungongingredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorkmonggocrispgalungongingredPageRoutingModule {}
