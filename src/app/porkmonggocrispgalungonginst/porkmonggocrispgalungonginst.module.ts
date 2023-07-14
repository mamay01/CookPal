import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PorkmonggocrispgalungonginstPageRoutingModule } from './porkmonggocrispgalungonginst-routing.module';

import { PorkmonggocrispgalungonginstPage } from './porkmonggocrispgalungonginst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PorkmonggocrispgalungonginstPageRoutingModule
  ],
  declarations: [PorkmonggocrispgalungonginstPage]
})
export class PorkmonggocrispgalungonginstPageModule {}
