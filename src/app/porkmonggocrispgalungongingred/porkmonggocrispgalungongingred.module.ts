import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PorkmonggocrispgalungongingredPageRoutingModule } from './porkmonggocrispgalungongingred-routing.module';

import { PorkmonggocrispgalungongingredPage } from './porkmonggocrispgalungongingred.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PorkmonggocrispgalungongingredPageRoutingModule
  ],
  declarations: [PorkmonggocrispgalungongingredPage]
})
export class PorkmonggocrispgalungongingredPageModule {}
