import {Pin} from "./Pin";

export class Filter {
  private _categoryPin: Pin;
  private _collectionPin: Pin;

  constructor() {
  }

  get categoryPin(): Pin {
    return this._categoryPin;
  }

  set categoryPin(value: Pin) {
    this._categoryPin = value;
  }

  get collectionPin(): Pin {
    return this._collectionPin;
  }

  set collectionPin(value: Pin) {
    this._collectionPin = value;
  }
}
