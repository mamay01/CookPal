import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmbutidoingredPage } from './embutidoingred.page';

const routes: Routes = [
  {
    path: '',
    component: EmbutidoingredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmbutidoingredPageRoutingModule {}
