import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BinagoonganingredPageRoutingModule } from './binagoonganingred-routing.module';

import { BinagoonganingredPage } from './binagoonganingred.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BinagoonganingredPageRoutingModule
  ],
  declarations: [BinagoonganingredPage]
})
export class BinagoonganingredPageModule {}
