import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TinolaingredPage } from './tinolaingred.page';

const routes: Routes = [
  {
    path: '',
    component: TinolaingredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TinolaingredPageRoutingModule {}
