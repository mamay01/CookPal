import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TinolaPage } from './tinola.page';

const routes: Routes = [
  {
    path: '',
    component: TinolaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TinolaPageRoutingModule {}
