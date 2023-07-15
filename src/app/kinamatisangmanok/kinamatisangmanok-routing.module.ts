import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KinamatisangmanokPage } from './kinamatisangmanok.page';

const routes: Routes = [
  {
    path: '',
    component: KinamatisangmanokPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KinamatisangmanokPageRoutingModule {}
