import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BangusingredPageRoutingModule } from './bangusingred-routing.module';

import { BangusingredPage } from './bangusingred.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BangusingredPageRoutingModule
  ],
  declarations: [BangusingredPage]
})
export class BangusingredPageModule {}
