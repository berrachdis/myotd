import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";

import {Album} from "../../models/album";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private httpClient: HttpClient) { }

  public getAlbums(categoryId: string): Observable<Album[]> {
    return this.httpClient.get<Album[]>("assets/api/albums.json");
  }
}
