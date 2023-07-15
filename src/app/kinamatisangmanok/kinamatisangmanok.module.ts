import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KinamatisangmanokPageRoutingModule } from './kinamatisangmanok-routing.module';

import { KinamatisangmanokPage } from './kinamatisangmanok.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KinamatisangmanokPageRoutingModule
  ],
  declarations: [KinamatisangmanokPage]
})
export class KinamatisangmanokPageModule {}
