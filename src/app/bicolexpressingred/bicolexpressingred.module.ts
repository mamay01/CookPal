import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BicolexpressingredPageRoutingModule } from './bicolexpressingred-routing.module';

import { BicolexpressingredPage } from './bicolexpressingred.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BicolexpressingredPageRoutingModule
  ],
  declarations: [BicolexpressingredPage]
})
export class BicolexpressingredPageModule {}
