import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";

import {Album} from "../../models/Album";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private httpClient: HttpClient) { }

  public getAlbums(categoryId: string): Observable<Album[]> {
    const ALBUM_URL = "assets/api/albums?categoryId=" + categoryId;
    return this.httpClient.get<Album[]>("assets/api/albums.json");
  }
}
