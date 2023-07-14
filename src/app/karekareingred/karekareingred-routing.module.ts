import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KarekareingredPage } from './karekareingred.page';

const routes: Routes = [
  {
    path: '',
    component: KarekareingredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KarekareingredPageRoutingModule {}
