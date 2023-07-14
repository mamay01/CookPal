import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PepperporkPageRoutingModule } from './pepperpork-routing.module';

import { PepperporkPage } from './pepperpork.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PepperporkPageRoutingModule
  ],
  declarations: [PepperporkPage]
})
export class PepperporkPageModule {}
