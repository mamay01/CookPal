import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelyentunaPage } from './relyentuna.page';

const routes: Routes = [
  {
    path: '',
    component: RelyentunaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelyentunaPageRoutingModule {}
