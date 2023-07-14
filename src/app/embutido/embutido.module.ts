import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmbutidoPageRoutingModule } from './embutido-routing.module';

import { EmbutidoPage } from './embutido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmbutidoPageRoutingModule
  ],
  declarations: [EmbutidoPage]
})
export class EmbutidoPageModule {}
