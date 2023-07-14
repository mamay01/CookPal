import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelyentunaingredPage } from './relyentunaingred.page';

const routes: Routes = [
  {
    path: '',
    component: RelyentunaingredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelyentunaingredPageRoutingModule {}
