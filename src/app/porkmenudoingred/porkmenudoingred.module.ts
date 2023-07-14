import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PorkmenudoingredPageRoutingModule } from './porkmenudoingred-routing.module';

import { PorkmenudoingredPage } from './porkmenudoingred.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PorkmenudoingredPageRoutingModule
  ],
  declarations: [PorkmenudoingredPage]
})
export class PorkmenudoingredPageModule {}
