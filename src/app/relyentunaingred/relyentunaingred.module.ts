import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelyentunaingredPageRoutingModule } from './relyentunaingred-routing.module';

import { RelyentunaingredPage } from './relyentunaingred.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelyentunaingredPageRoutingModule
  ],
  declarations: [RelyentunaingredPage]
})
export class RelyentunaingredPageModule {}
