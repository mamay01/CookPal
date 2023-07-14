import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PorkmenudoinstPageRoutingModule } from './porkmenudoinst-routing.module';

import { PorkmenudoinstPage } from './porkmenudoinst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PorkmenudoinstPageRoutingModule
  ],
  declarations: [PorkmenudoinstPage]
})
export class PorkmenudoinstPageModule {}
