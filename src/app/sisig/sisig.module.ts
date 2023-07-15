import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SisigPageRoutingModule } from './sisig-routing.module';

import { SisigPage } from './sisig.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SisigPageRoutingModule
  ],
  declarations: [SisigPage]
})
export class SisigPageModule {}
