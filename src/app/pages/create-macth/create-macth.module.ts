import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateMacthPageRoutingModule } from './create-macth-routing.module';

import { CreateMacthPage } from './create-macth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateMacthPageRoutingModule
  ],
  declarations: [CreateMacthPage]
})
export class CreateMacthPageModule {}
