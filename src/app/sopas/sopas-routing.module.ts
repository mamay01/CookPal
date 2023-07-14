import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SopasPage } from './sopas.page';

const routes: Routes = [
  {
    path: '',
    component: SopasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SopasPageRoutingModule {}
