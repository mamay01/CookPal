import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BangusinstPageRoutingModule } from './bangusinst-routing.module';

import { BangusinstPage } from './bangusinst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BangusinstPageRoutingModule
  ],
  declarations: [BangusinstPage]
})
export class BangusinstPageModule {}
