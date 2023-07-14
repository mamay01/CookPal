import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BicolexpressPageRoutingModule } from './bicolexpress-routing.module';

import { BicolexpressPage } from './bicolexpress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BicolexpressPageRoutingModule
  ],
  declarations: [BicolexpressPage]
})
export class BicolexpressPageModule {}
