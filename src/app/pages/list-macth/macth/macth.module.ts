import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MacthPageRoutingModule } from './macth-routing.module';

import { MacthPage } from './macth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MacthPageRoutingModule
  ],
  declarations: [MacthPage]
})
export class MacthPageModule {}
