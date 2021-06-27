import { Injectable } from '@angular/core';
import {Pin, PinService} from "../../service/pin/pin.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PinResolver implements Resolve<Pin> {
  constructor(private pinService: PinService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pin> | Promise<Pin> | Pin {
    return this.pinService.getPins();
  }
}
