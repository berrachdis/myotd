import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface User {
  id: string;
  profile_pic_url: string;
  username: string;
  publication_count: number;
  collection_count: number;
}

export interface Data {
  user: User;
}
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  public getAccountData(): Observable<Data> {
    return this.httpClient.get<Data>("assets/account.json");
  }
}
