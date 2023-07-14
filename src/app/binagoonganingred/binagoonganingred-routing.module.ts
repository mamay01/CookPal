import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BinagoonganingredPage } from './binagoonganingred.page';

const routes: Routes = [
  {
    path: '',
    component: BinagoonganingredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BinagoonganingredPageRoutingModule {}
