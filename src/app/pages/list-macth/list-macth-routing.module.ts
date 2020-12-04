import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListMacthPage } from './list-macth.page';

const routes: Routes = [
  {
    path: '',
    component: ListMacthPage
  },
  {
    path: 'macth',
    loadChildren: () => import('./macth/macth.module').then( m => m.MacthPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListMacthPageRoutingModule {}
