import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: '',
    redirectTo: 'add-macth',
    pathMatch: 'full'
  },
  {
    path: 'add-macth',
    loadChildren: () => import('./pages/add-macth/add-macth.module').then( m => m.AddMacthPageModule)
  },
  {
    path: 'create-macth',
    loadChildren: () => import('./pages/create-macth/create-macth.module').then( m => m.CreateMacthPageModule)
  },
  {
    path: 'list-macth',
    loadChildren: () => import('./pages/list-macth/list-macth.module').then( m => m.ListMacthPageModule)
  },
  {
    path: 'competition-list',
    loadChildren: () => import('./pages/competition-list/competition-list.module').then( m => m.CompetitionListPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
