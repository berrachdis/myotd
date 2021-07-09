import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import {AccountResolver} from "./core/resolvers/account/account-resolver";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./core/pages/home/home.module').then(m => m.HomePageModule),
    resolve: {
      account: AccountResolver
    }
  },
  {
    path: 'album/:categoryId',
    loadChildren: () => import('./core/pages/album/album.module').then(m => m.AlbumPageModule)
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
