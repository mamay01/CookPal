import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LainginstPageRoutingModule } from './lainginst-routing.module';

import { LainginstPage } from './lainginst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LainginstPageRoutingModule
  ],
  declarations: [LainginstPage]
})
export class LainginstPageModule {}
