import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BistekPageRoutingModule } from './bistek-routing.module';

import { BistekPage } from './bistek.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BistekPageRoutingModule
  ],
  declarations: [BistekPage]
})
export class BistekPageModule {}
