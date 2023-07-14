import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BangussinigangPage } from './bangussinigang.page';

const routes: Routes = [
  {
    path: '',
    component: BangussinigangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BangussinigangPageRoutingModule {}
