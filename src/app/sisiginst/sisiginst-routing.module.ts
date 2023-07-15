import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SisiginstPage } from './sisiginst.page';

const routes: Routes = [
  {
    path: '',
    component: SisiginstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SisiginstPageRoutingModule {}
