import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";

import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  public getAccountData(): Observable<User> {
    return this.httpClient.get<User>("assets/api/user.json");
  }
}
