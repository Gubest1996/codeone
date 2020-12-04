import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateMacthPage } from './create-macth.page';

const routes: Routes = [
  {
    path: '',
    component: CreateMacthPage
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateMacthPageRoutingModule {}
