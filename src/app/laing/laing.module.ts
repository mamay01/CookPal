import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaingPageRoutingModule } from './laing-routing.module';

import { LaingPage } from './laing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaingPageRoutingModule
  ],
  declarations: [LaingPage]
})
export class LaingPageModule {}
