import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BangussinigangPageRoutingModule } from './bangussinigang-routing.module';

import { BangussinigangPage } from './bangussinigang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BangussinigangPageRoutingModule
  ],
  declarations: [BangussinigangPage]
})
export class BangussinigangPageModule {}
