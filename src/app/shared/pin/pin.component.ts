import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pin} from "../../service/pin/pin.service";

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss'],
})
export class PinComponent implements OnInit {
  @Input('pin') pinInput: Pin;
  @Output('pinOutput') pinOutput: EventEmitter<Pin> = new EventEmitter<Pin>();
  selectedPin: Pin;
  constructor() { }

  ngOnInit() {
    this.selectedPin = this.pinInput;
  }

  goBack() {
    const pin:Pin = this.getPin(this.selectedPin.parent);
    if (!!pin) {
      this.selectedPin = pin;
    }
    return;
  }

  filter(selectedPin: Pin) {
    if (!!selectedPin.childPin) {
      this.selectedPin = selectedPin;
      this.selectedPin.activated = true;
    } else {
      this.pinOutput.emit(selectedPin);
    }
  }

  getPin(parent: string): Pin {
    if (this.pinInput.name == parent) {
      return this.pinInput;
    }

    for (let i=0; i<this.pinInput.childPin.length; i++) {
      const localPin:Pin = Object.assign(this.pinInput.childPin[i]);
      if (localPin.name == parent) {
        return localPin;
      }
    }
    return null;
  }
}
