import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {PinResolver} from "./resolver/pin/pin-resolver";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./core/home/home.module').then(m => m.HomePageModule),
    resolve: {
      pin: PinResolver
    }
  },
  {
    path: 'album',
    loadChildren: () => import('./core/album/album.module').then( m => m.AlbumPageModule)
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
