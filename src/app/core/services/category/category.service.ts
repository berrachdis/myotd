import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";

import {Category} from "../../interfaces/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  public getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>("assets/api/categories.json");
  }
}
