import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmbutidoinstPageRoutingModule } from './embutidoinst-routing.module';

import { EmbutidoinstPage } from './embutidoinst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmbutidoinstPageRoutingModule
  ],
  declarations: [EmbutidoinstPage]
})
export class EmbutidoinstPageModule {}
