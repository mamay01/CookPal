import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShanghaiingredPageRoutingModule } from './shanghaiingred-routing.module';

import { ShanghaiingredPage } from './shanghaiingred.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShanghaiingredPageRoutingModule
  ],
  declarations: [ShanghaiingredPage]
})
export class ShanghaiingredPageModule {}
