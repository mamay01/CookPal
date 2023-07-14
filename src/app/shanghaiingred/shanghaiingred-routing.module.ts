import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShanghaiingredPage } from './shanghaiingred.page';

const routes: Routes = [
  {
    path: '',
    component: ShanghaiingredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShanghaiingredPageRoutingModule {}
