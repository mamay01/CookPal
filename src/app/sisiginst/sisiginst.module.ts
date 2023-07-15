import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SisiginstPageRoutingModule } from './sisiginst-routing.module';

import { SisiginstPage } from './sisiginst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SisiginstPageRoutingModule
  ],
  declarations: [SisiginstPage]
})
export class SisiginstPageModule {}
