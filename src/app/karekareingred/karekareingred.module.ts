import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KarekareingredPageRoutingModule } from './karekareingred-routing.module';

import { KarekareingredPage } from './karekareingred.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KarekareingredPageRoutingModule
  ],
  declarations: [KarekareingredPage]
})
export class KarekareingredPageModule {}
