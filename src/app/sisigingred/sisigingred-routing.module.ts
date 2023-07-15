import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SisigingredPage } from './sisigingred.page';

const routes: Routes = [
  {
    path: '',
    component: SisigingredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SisigingredPageRoutingModule {}
