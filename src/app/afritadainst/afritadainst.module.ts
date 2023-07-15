import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfritadainstPageRoutingModule } from './afritadainst-routing.module';

import { AfritadainstPage } from './afritadainst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfritadainstPageRoutingModule
  ],
  declarations: [AfritadainstPage]
})
export class AfritadainstPageModule {}
