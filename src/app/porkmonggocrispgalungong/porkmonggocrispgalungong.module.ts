import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PorkmonggocrispgalungongPageRoutingModule } from './porkmonggocrispgalungong-routing.module';

import { PorkmonggocrispgalungongPage } from './porkmonggocrispgalungong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PorkmonggocrispgalungongPageRoutingModule
  ],
  declarations: [PorkmonggocrispgalungongPage]
})
export class PorkmonggocrispgalungongPageModule {}
