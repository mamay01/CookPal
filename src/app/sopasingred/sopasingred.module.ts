import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SopasingredPageRoutingModule } from './sopasingred-routing.module';

import { SopasingredPage } from './sopasingred.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SopasingredPageRoutingModule
  ],
  declarations: [SopasingredPage]
})
export class SopasingredPageModule {}
