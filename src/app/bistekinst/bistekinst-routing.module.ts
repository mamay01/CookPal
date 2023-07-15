import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BistekinstPage } from './bistekinst.page';

const routes: Routes = [
  {
    path: '',
    component: BistekinstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BistekinstPageRoutingModule {}
