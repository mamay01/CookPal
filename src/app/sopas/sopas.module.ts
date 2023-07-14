import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SopasPageRoutingModule } from './sopas-routing.module';

import { SopasPage } from './sopas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SopasPageRoutingModule
  ],
  declarations: [SopasPage]
})
export class SopasPageModule {}
