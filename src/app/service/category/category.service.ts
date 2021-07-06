import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export enum CategoryType {
  TOP,
  BOTTOM,
  FEET
}
export interface Category {
  id: string;
  title: string;
  type: CategoryType;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  public getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>("assets/categories.json");
  }
}
