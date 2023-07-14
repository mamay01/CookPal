import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShanghaiinstPageRoutingModule } from './shanghaiinst-routing.module';

import { ShanghaiinstPage } from './shanghaiinst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShanghaiinstPageRoutingModule
  ],
  declarations: [ShanghaiinstPage]
})
export class ShanghaiinstPageModule {}
