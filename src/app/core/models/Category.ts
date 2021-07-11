import {CategoryEnum} from "../enums/CategoryEnum";

export class Category {
  private _id: string;
  private _title: string;
  private _type: CategoryEnum;
  private _imageURL: string;

  constructor() {
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get type(): CategoryEnum {
    return this._type;
  }

  set type(value: CategoryEnum) {
    this._type = value;
  }

  get imageURL(): string {
    return this._imageURL;
  }

  set imageURL(value: string) {
    this._imageURL = value;
  }
}
