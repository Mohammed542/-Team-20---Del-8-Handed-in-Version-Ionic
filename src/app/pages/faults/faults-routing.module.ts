import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaultsPage } from './faults.page';

const routes: Routes = [
  {
    path: '',
    component: FaultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaultsPageRoutingModule {}
