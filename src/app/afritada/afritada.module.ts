import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfritadaPageRoutingModule } from './afritada-routing.module';

import { AfritadaPage } from './afritada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfritadaPageRoutingModule
  ],
  declarations: [AfritadaPage]
})
export class AfritadaPageModule {}
