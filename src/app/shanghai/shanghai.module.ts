import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShanghaiPageRoutingModule } from './shanghai-routing.module';

import { ShanghaiPage } from './shanghai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShanghaiPageRoutingModule
  ],
  declarations: [ShanghaiPage]
})
export class ShanghaiPageModule {}
