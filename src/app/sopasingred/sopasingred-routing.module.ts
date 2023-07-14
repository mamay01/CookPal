import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SopasingredPage } from './sopasingred.page';

const routes: Routes = [
  {
    path: '',
    component: SopasingredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SopasingredPageRoutingModule {}
