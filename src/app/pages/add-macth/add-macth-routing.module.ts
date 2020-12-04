import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMacthPage } from './add-macth.page';

const routes: Routes = [
  {
    path: '',
    component: AddMacthPage
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },  {
    path: 'join',
    loadChildren: () => import('./join/join.module').then( m => m.JoinPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMacthPageRoutingModule {}
