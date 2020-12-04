import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMacthPageRoutingModule } from './add-macth-routing.module';

import { AddMacthPage } from './add-macth.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMacthPageRoutingModule
  ],
  declarations: [AddMacthPage]
})
export class AddMacthPageModule {}
