import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BicolexpressingredPage } from './bicolexpressingred.page';

const routes: Routes = [
  {
    path: '',
    component: BicolexpressingredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BicolexpressingredPageRoutingModule {}
