import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChickcurryinstPageRoutingModule } from './chickcurryinst-routing.module';

import { ChickcurryinstPage } from './chickcurryinst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChickcurryinstPageRoutingModule
  ],
  declarations: [ChickcurryinstPage]
})
export class ChickcurryinstPageModule {}
