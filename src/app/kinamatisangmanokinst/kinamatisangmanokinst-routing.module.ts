import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KinamatisangmanokinstPage } from './kinamatisangmanokinst.page';

const routes: Routes = [
  {
    path: '',
    component: KinamatisangmanokinstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KinamatisangmanokinstPageRoutingModule {}
