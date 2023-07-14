import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KarekareinstPageRoutingModule } from './karekareinst-routing.module';

import { KarekareinstPage } from './karekareinst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KarekareinstPageRoutingModule
  ],
  declarations: [KarekareinstPage]
})
export class KarekareinstPageModule {}
