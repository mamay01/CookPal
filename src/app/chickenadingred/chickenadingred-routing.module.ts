import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChickenadingredPage } from './chickenadingred.page';

const routes: Routes = [
  {
    path: '',
    component: ChickenadingredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChickenadingredPageRoutingModule {}
