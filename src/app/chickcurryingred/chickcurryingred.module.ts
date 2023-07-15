import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChickcurryingredPageRoutingModule } from './chickcurryingred-routing.module';

import { ChickcurryingredPage } from './chickcurryingred.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChickcurryingredPageRoutingModule
  ],
  declarations: [ChickcurryingredPage]
})
export class ChickcurryingredPageModule {}
