import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import {AccountResolver} from "./core/resolvers/account/account-resolver";
import {FilterResolver} from "./core/resolvers/filter/filter-resolver";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    resolve: {
      account: AccountResolver,
      filter: FilterResolver
    }
  },
  {
    path: 'album/:categoryId',
    loadChildren: () => import('./pages/album/album.module').then(m => m.AlbumPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
