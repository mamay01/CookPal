import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TinolaPageRoutingModule } from './tinola-routing.module';

import { TinolaPage } from './tinola.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TinolaPageRoutingModule
  ],
  declarations: [TinolaPage]
})
export class TinolaPageModule {}
