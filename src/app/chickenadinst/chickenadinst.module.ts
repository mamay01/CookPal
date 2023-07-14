import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChickenadinstPageRoutingModule } from './chickenadinst-routing.module';

import { ChickenadinstPage } from './chickenadinst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChickenadinstPageRoutingModule
  ],
  declarations: [ChickenadinstPage]
})
export class ChickenadinstPageModule {}
