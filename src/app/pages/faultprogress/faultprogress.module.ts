import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaultprogressPageRoutingModule } from './faultprogress-routing.module';

import { FaultprogressPage } from './faultprogress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaultprogressPageRoutingModule
  ],
  declarations: [FaultprogressPage]
})
export class FaultprogressPageModule {}
