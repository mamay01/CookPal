import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChickenadingredPageRoutingModule } from './chickenadingred-routing.module';

import { ChickenadingredPage } from './chickenadingred.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChickenadingredPageRoutingModule
  ],
  declarations: [ChickenadingredPage]
})
export class ChickenadingredPageModule {}
