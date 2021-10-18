import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaultdetailsPage } from './faultdetails.page';

const routes: Routes = [
  {
    path: '',
    component: FaultdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaultdetailsPageRoutingModule {}
