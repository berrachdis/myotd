import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

export interface Pin {
  parent?: string;
  name?: string;
  url?: string;
  activated?: boolean;
  childPin: Pin[];
}

@Injectable({
  providedIn: 'root'
})
export class PinService {
  constructor(private httpClient: HttpClient) { }

  public getCollectionsFilter(): Observable<Pin> {
    return this.httpClient.get<Pin>("assets/collection-pins.json");
  }

  public getCategoriesFilter(): Observable<Pin> {
    return this.httpClient.get<Pin>("assets/filter-pins.json");
  }
}
