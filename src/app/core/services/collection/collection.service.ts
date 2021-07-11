import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";

import {Collection} from "../../models/Collection";

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private httpClient: HttpClient) { }

  public getCollections(): Observable<Collection[]> {
    return this.httpClient.get<Collection[]>("assets/api/collections.json")
  }
}
