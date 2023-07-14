import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BinagoonganrecipePage } from './binagoonganrecipe.page';

const routes: Routes = [
  {
    path: '',
    component: BinagoonganrecipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BinagoonganrecipePageRoutingModule {}
