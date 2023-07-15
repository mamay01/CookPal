import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KinamatisangmanokinstPageRoutingModule } from './kinamatisangmanokinst-routing.module';

import { KinamatisangmanokinstPage } from './kinamatisangmanokinst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KinamatisangmanokinstPageRoutingModule
  ],
  declarations: [KinamatisangmanokinstPage]
})
export class KinamatisangmanokinstPageModule {}
