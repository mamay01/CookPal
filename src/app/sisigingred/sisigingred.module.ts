import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SisigingredPageRoutingModule } from './sisigingred-routing.module';

import { SisigingredPage } from './sisigingred.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SisigingredPageRoutingModule
  ],
  declarations: [SisigingredPage]
})
export class SisigingredPageModule {}
