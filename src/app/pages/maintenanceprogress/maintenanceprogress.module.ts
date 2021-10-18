import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceprogressPageRoutingModule } from './maintenanceprogress-routing.module';

import { MaintenanceprogressPage } from './maintenanceprogress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenanceprogressPageRoutingModule
  ],
  declarations: [MaintenanceprogressPage]
})
export class MaintenanceprogressPageModule {}
