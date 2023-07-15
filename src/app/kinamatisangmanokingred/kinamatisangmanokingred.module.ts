import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KinamatisangmanokingredPageRoutingModule } from './kinamatisangmanokingred-routing.module';

import { KinamatisangmanokingredPage } from './kinamatisangmanokingred.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KinamatisangmanokingredPageRoutingModule
  ],
  declarations: [KinamatisangmanokingredPage]
})
export class KinamatisangmanokingredPageModule {}
