import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmbutidoPage } from './embutido.page';

const routes: Routes = [
  {
    path: '',
    component: EmbutidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmbutidoPageRoutingModule {}
