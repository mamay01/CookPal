import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TinolaingredPageRoutingModule } from './tinolaingred-routing.module';

import { TinolaingredPage } from './tinolaingred.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TinolaingredPageRoutingModule
  ],
  declarations: [TinolaingredPage]
})
export class TinolaingredPageModule {}
