import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceprogressPage } from './maintenanceprogress.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceprogressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceprogressPageRoutingModule {}
