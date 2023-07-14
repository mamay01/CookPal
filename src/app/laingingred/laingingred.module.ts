import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaingingredPageRoutingModule } from './laingingred-routing.module';

import { LaingingredPage } from './laingingred.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaingingredPageRoutingModule
  ],
  declarations: [LaingingredPage]
})
export class LaingingredPageModule {}
