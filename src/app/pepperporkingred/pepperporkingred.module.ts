import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PepperporkingredPageRoutingModule } from './pepperporkingred-routing.module';

import { PepperporkingredPage } from './pepperporkingred.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PepperporkingredPageRoutingModule
  ],
  declarations: [PepperporkingredPage]
})
export class PepperporkingredPageModule {}
