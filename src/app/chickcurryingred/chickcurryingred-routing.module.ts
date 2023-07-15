import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChickcurryingredPage } from './chickcurryingred.page';

const routes: Routes = [
  {
    path: '',
    component: ChickcurryingredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChickcurryingredPageRoutingModule {}
