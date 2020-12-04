import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MacthPage } from './macth.page';

const routes: Routes = [
  {
    path: '',
    component: MacthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MacthPageRoutingModule {}
