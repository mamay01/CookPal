import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PancitPage } from './pancit.page';

const routes: Routes = [
  {
    path: '',
    component: PancitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PancitPageRoutingModule {}
