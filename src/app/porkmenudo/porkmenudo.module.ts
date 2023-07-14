import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PorkmenudoPageRoutingModule } from './porkmenudo-routing.module';

import { PorkmenudoPage } from './porkmenudo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PorkmenudoPageRoutingModule
  ],
  declarations: [PorkmenudoPage]
})
export class PorkmenudoPageModule {}
