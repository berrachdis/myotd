import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

import {FilterService} from "../../services/filter/filter.service";

import {Filter} from "../../models/Filter";

@Injectable({
  providedIn: 'root'
})
export class FilterResolver implements Resolve<Filter> {
  constructor(private filterService: FilterService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Filter> | Promise<Filter> | Filter {
    return this.filterService.getFilters();
  }
}
