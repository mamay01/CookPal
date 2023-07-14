import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelyentunaPageRoutingModule } from './relyentuna-routing.module';

import { RelyentunaPage } from './relyentuna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelyentunaPageRoutingModule
  ],
  declarations: [RelyentunaPage]
})
export class RelyentunaPageModule {}
