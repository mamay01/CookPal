import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PancitingredPageRoutingModule } from './pancitingred-routing.module';

import { PancitingredPage } from './pancitingred.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PancitingredPageRoutingModule
  ],
  declarations: [PancitingredPage]
})
export class PancitingredPageModule {}
