import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

import {Album} from "../../models/Album";
import {AlbumService} from "../../services/album/album.service";

@Injectable({
  providedIn: 'root'
})
export class AlbumResolver implements Resolve<Album> {
  constructor(private albumService: AlbumService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Album> | Promise<Album> | Album {
    return this.albumService.getAlbums(route.params['categoryId']);
  }
}
