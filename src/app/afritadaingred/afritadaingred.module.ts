import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfritadaingredPageRoutingModule } from './afritadaingred-routing.module';

import { AfritadaingredPage } from './afritadaingred.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfritadaingredPageRoutingModule
  ],
  declarations: [AfritadaingredPage]
})
export class AfritadaingredPageModule {}
