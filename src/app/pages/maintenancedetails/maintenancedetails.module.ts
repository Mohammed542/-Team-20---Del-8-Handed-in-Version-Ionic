import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenancedetailsPageRoutingModule } from './maintenancedetails-routing.module';

import { MaintenancedetailsPage } from './maintenancedetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenancedetailsPageRoutingModule
  ],
  declarations: [MaintenancedetailsPage]
})
export class MaintenancedetailsPageModule {}
