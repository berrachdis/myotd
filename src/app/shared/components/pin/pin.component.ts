import {Component, EventEmitter, Input, NgZone, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

import {Pin} from "../../../core/models/pin";

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss'],
})
export class PinComponent implements OnInit, OnChanges {
  @Input('pin') pinInput: Pin;
  @Output('pinOutput') pinOutput: EventEmitter<Pin> = new EventEmitter<Pin>();
  private selectedPin: Pin;
  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.selectedPin = this.pinInput;
  }

  private goBack() {
    const pin:Pin = this.getPin(this.selectedPin.parent);
    if (!!pin) {
      this.selectedPin = pin;
    } else {
      this.pinOutput.emit(this.selectedPin);
    }
    return;
  }

  private filter(selectedPin: Pin): void {
    if (!!selectedPin.childPin) {
      this.selectedPin = selectedPin;
      this.selectedPin.activated = true;
    } else {
      this.pinOutput.emit(selectedPin);
    }
  }

  private getPin(parent: string): Pin {
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

  ngOnChanges(changes: SimpleChanges): void {
    this.zone.run(() => this.selectedPin = changes.pinInput.currentValue);
  }
}
