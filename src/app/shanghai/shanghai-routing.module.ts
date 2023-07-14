import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShanghaiPage } from './shanghai.page';

const routes: Routes = [
  {
    path: '',
    component: ShanghaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShanghaiPageRoutingModule {}
