import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfritadaingredPage } from './afritadaingred.page';

const routes: Routes = [
  {
    path: '',
    component: AfritadaingredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfritadaingredPageRoutingModule {}
