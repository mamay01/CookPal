import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BistekingredPage } from './bistekingred.page';

const routes: Routes = [
  {
    path: '',
    component: BistekingredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BistekingredPageRoutingModule {}
