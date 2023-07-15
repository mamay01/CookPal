import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChickcurryPageRoutingModule } from './chickcurry-routing.module';

import { ChickcurryPage } from './chickcurry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChickcurryPageRoutingModule
  ],
  declarations: [ChickcurryPage]
})
export class ChickcurryPageModule {}
