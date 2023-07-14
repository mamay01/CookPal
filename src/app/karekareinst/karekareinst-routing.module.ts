import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KarekareinstPage } from './karekareinst.page';

const routes: Routes = [
  {
    path: '',
    component: KarekareinstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KarekareinstPageRoutingModule {}
