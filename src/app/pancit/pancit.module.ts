import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PancitPageRoutingModule } from './pancit-routing.module';

import { PancitPage } from './pancit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PancitPageRoutingModule
  ],
  declarations: [PancitPage]
})
export class PancitPageModule {}
