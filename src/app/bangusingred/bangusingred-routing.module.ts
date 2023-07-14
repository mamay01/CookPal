import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BangusingredPage } from './bangusingred.page';

const routes: Routes = [
  {
    path: '',
    component: BangusingredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BangusingredPageRoutingModule {}
