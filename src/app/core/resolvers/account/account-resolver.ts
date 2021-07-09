import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

import {User} from "../../models/user";
import {AccountService} from "../../services/account/account.service";

@Injectable({
  providedIn: 'root'
})
export class AccountResolver implements Resolve<User> {
  constructor(private accountService: AccountService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    return this.accountService.getAccountData();
  }
}
