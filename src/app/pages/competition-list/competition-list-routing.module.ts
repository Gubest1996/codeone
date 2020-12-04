import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompetitionListPage } from './competition-list.page';

const routes: Routes = [
  {
    path: '',
    component: CompetitionListPage
  },
  {
    path: 'competition',
    loadChildren: () => import('./competition/competition.module').then( m => m.CompetitionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompetitionListPageRoutingModule {}
