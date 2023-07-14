import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BinagoonganrecipePageRoutingModule } from './binagoonganrecipe-routing.module';

import { BinagoonganrecipePage } from './binagoonganrecipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BinagoonganrecipePageRoutingModule
  ],
  declarations: [BinagoonganrecipePage]
})
export class BinagoonganrecipePageModule {}
