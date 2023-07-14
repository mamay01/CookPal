import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BicolexpressPage } from './bicolexpress.page';

const routes: Routes = [
  {
    path: '',
    component: BicolexpressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BicolexpressPageRoutingModule {}
