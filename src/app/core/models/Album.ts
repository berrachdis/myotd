import {Image} from "./Image";

export class Album {
  private _id: string;
  private _categoryId: string;
  private _userId: string;
  private _images: Image[];

  constructor() {
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get categoryId(): string {
    return this._categoryId;
  }

  set categoryId(value: string) {
    this._categoryId = value;
  }

  get userId(): string {
    return this._userId;
  }

  set userId(value: string) {
    this._userId = value;
  }

  get images(): Image[] {
    return this._images;
  }

  set images(value: Image[]) {
    this._images = value;
  }
}
