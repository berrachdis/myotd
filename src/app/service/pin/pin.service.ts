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

  public getPins(): Observable<Pin> {
    return this.httpClient.get<Pin>("assets/home-pins.json");
  }

  public getFilterPins(): Observable<Pin> {
    return this.httpClient.get<Pin>("assets/filter-pins.json");
  }
}
