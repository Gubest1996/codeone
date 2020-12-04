import { AccordianComponent } from './../../components/accordion/accordion.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListMacthPageRoutingModule } from './list-macth-routing.module';

import { ListMacthPage } from './list-macth.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListMacthPageRoutingModule
  ],
  declarations: [ListMacthPage, AccordianComponent]
})
export class ListMacthPageModule {}
