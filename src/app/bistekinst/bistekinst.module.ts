import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BistekinstPageRoutingModule } from './bistekinst-routing.module';

import { BistekinstPage } from './bistekinst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BistekinstPageRoutingModule
  ],
  declarations: [BistekinstPage]
})
export class BistekinstPageModule {}
