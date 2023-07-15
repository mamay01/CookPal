import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KinamatisangmanokingredPage } from './kinamatisangmanokingred.page';

const routes: Routes = [
  {
    path: '',
    component: KinamatisangmanokingredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KinamatisangmanokingredPageRoutingModule {}
