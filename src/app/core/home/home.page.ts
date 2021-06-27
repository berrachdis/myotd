import {Component, OnInit} from '@angular/core';
import {Pin} from "../../service/pin/pin.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  private pin: Pin;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.initPins();
  }

  private initPins(): void {
    this.route.data
      .subscribe((data: {pin: Pin}) => this.pin = data.pin)
  }

  private onSelectedPin(event:Pin): void {
    console.log(event);
  }
}
