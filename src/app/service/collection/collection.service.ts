import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

interface Image {
  name: string;
  url: string;
}

export interface Collection {
  id: string;
  images: Image[];
}

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private httpClient: HttpClient) { }

  public getCollections(): Observable<Collection[]> {
    return this.httpClient.get<Collection[]>("assets/collections.json")
  }
}
