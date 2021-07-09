import { NgModule } from '@angular/core';

import { AlbumPageRoutingModule } from './album-routing.module';
import {SharedModule} from "../../shared/shared.module";

import { AlbumPage } from './album.page';

@NgModule({
  imports: [
    AlbumPageRoutingModule,
    SharedModule
  ],
  declarations: [AlbumPage]
})
export class AlbumPageModule {}
