import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BinagoonganinstPageRoutingModule } from './binagoonganinst-routing.module';

import { BinagoonganinstPage } from './binagoonganinst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BinagoonganinstPageRoutingModule
  ],
  declarations: [BinagoonganinstPage]
})
export class BinagoonganinstPageModule {}
