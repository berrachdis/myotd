import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import {AccountResolver} from "./core/resolvers/account/account-resolver";
import {FilterResolver} from "./core/resolvers/filter/filter-resolver";
import {AlbumResolver} from "./core/resolvers/album/album-resolver";

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
    path: 'album/:categoryId/:categoryTitle',
    loadChildren: () => import('./pages/album/album.module').then(m => m.AlbumPageModule),
    resolve: {
      album: AlbumResolver
    }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'camera',
    loadChildren: () => import('./pages/camera/camera.module').then( m => m.CameraPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
