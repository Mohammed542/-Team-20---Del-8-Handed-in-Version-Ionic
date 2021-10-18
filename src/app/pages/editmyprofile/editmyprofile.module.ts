import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditmyprofilePageRoutingModule } from './editmyprofile-routing.module';

import { EditmyprofilePage } from './editmyprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditmyprofilePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditmyprofilePage]
})
export class EditmyprofilePageModule {}
