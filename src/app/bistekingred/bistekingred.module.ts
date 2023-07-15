import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BistekingredPageRoutingModule } from './bistekingred-routing.module';

import { BistekingredPage } from './bistekingred.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BistekingredPageRoutingModule
  ],
  declarations: [BistekingredPage]
})
export class BistekingredPageModule {}
