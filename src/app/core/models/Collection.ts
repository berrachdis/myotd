import {SeasonEnum} from "../enums/SeasonEnum";
import {StyleEnum} from "../enums/StyleEnum";
import {Image} from "./Image";

export class Collection {
  private _id: string;
  private _userId: string;
  private _images: Image[];
  private _season?: SeasonEnum;
  private _style?: StyleEnum;
  private _color?: string;

  constructor() {
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
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

  get season(): SeasonEnum {
    return this._season;
  }

  set season(value: SeasonEnum) {
    this._season = value;
  }

  get style(): StyleEnum {
    return this._style;
  }

  set style(value: StyleEnum) {
    this._style = value;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }
}
