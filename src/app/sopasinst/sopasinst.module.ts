import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SopasinstPageRoutingModule } from './sopasinst-routing.module';

import { SopasinstPage } from './sopasinst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SopasinstPageRoutingModule
  ],
  declarations: [SopasinstPage]
})
export class SopasinstPageModule {}
