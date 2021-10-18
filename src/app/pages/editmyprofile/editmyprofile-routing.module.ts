import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditmyprofilePage } from './editmyprofile.page';

const routes: Routes = [
  {
    path: '',
    component: EditmyprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditmyprofilePageRoutingModule {}
