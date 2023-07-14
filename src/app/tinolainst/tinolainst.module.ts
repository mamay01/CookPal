import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TinolainstPageRoutingModule } from './tinolainst-routing.module';

import { TinolainstPage } from './tinolainst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TinolainstPageRoutingModule
  ],
  declarations: [TinolainstPage]
})
export class TinolainstPageModule {}
