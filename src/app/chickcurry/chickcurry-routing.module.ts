import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChickcurryPage } from './chickcurry.page';

const routes: Routes = [
  {
    path: '',
    component: ChickcurryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChickcurryPageRoutingModule {}
