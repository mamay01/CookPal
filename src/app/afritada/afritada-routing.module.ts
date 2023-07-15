import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfritadaPage } from './afritada.page';

const routes: Routes = [
  {
    path: '',
    component: AfritadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfritadaPageRoutingModule {}
