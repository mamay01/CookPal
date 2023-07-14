import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BicolexpressinstPage } from './bicolexpressinst.page';

const routes: Routes = [
  {
    path: '',
    component: BicolexpressinstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BicolexpressinstPageRoutingModule {}
