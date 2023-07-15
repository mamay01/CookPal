import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SisigPage } from './sisig.page';

const routes: Routes = [
  {
    path: '',
    component: SisigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SisigPageRoutingModule {}
