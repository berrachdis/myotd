export class Image {
  private _id: string;
  private _thumbnailURL: string;
  private _imageURL: string;

  constructor() {
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get thumbnailURL(): string {
    return this._thumbnailURL;
  }

  set thumbnailURL(value: string) {
    this._thumbnailURL = value;
  }

  get imageURL(): string {
    return this._imageURL;
  }

  set imageURL(value: string) {
    this._imageURL = value;
  }
}
