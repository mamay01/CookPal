import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BistekPage } from './bistek.page';

const routes: Routes = [
  {
    path: '',
    component: BistekPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BistekPageRoutingModule {}
