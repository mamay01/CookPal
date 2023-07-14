import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelyentunainstPage } from './relyentunainst.page';

const routes: Routes = [
  {
    path: '',
    component: RelyentunainstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelyentunainstPageRoutingModule {}
