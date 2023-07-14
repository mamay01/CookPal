import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelyentunainstPageRoutingModule } from './relyentunainst-routing.module';

import { RelyentunainstPage } from './relyentunainst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelyentunainstPageRoutingModule
  ],
  declarations: [RelyentunainstPage]
})
export class RelyentunainstPageModule {}
