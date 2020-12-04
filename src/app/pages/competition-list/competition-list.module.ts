import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompetitionListPageRoutingModule } from './competition-list-routing.module';

import { CompetitionListPage } from './competition-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompetitionListPageRoutingModule
  ],
  declarations: [CompetitionListPage]
})
export class CompetitionListPageModule {}
