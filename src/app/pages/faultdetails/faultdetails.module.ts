import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaultdetailsPageRoutingModule } from './faultdetails-routing.module';

import { FaultdetailsPage } from './faultdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaultdetailsPageRoutingModule
  ],
  declarations: [FaultdetailsPage]
})
export class FaultdetailsPageModule {}
