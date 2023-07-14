import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PepperporkinstPageRoutingModule } from './pepperporkinst-routing.module';

import { PepperporkinstPage } from './pepperporkinst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PepperporkinstPageRoutingModule
  ],
  declarations: [PepperporkinstPage]
})
export class PepperporkinstPageModule {}
