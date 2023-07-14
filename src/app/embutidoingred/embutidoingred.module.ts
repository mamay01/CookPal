import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmbutidoingredPageRoutingModule } from './embutidoingred-routing.module';

import { EmbutidoingredPage } from './embutidoingred.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmbutidoingredPageRoutingModule
  ],
  declarations: [EmbutidoingredPage]
})
export class EmbutidoingredPageModule {}
