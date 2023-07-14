import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmbutidoinstPage } from './embutidoinst.page';

const routes: Routes = [
  {
    path: '',
    component: EmbutidoinstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmbutidoinstPageRoutingModule {}
