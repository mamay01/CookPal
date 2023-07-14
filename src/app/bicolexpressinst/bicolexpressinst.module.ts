import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BicolexpressinstPageRoutingModule } from './bicolexpressinst-routing.module';

import { BicolexpressinstPage } from './bicolexpressinst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BicolexpressinstPageRoutingModule
  ],
  declarations: [BicolexpressinstPage]
})
export class BicolexpressinstPageModule {}
