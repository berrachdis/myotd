export class Pin {
  private _id: string;
  private _parent?: string;
  private _name?: string;
  private _activated?: boolean;
  private _childPin?: Pin[];


  constructor() {
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get parent(): string {
    return this._parent;
  }

  set parent(value: string) {
    this._parent = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get activated(): boolean {
    return this._activated;
  }

  set activated(value: boolean) {
    this._activated = value;
  }

  get childPin(): Pin[] {
    return this._childPin;
  }

  set childPin(value: Pin[]) {
    this._childPin = value;
  }
}
