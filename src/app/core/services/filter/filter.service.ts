import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Filter} from "../../models/Filter";

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private httpClient: HttpClient) { }

  public getFilters(): Observable<Filter> {
    return this.httpClient.get<Filter>("assets/api/filters.json");
  }
}
