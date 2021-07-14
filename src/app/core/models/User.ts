import {Filter} from "./Filter";

export class User {
  private _id: string;
  private _username: string;
  private _imageURL: string;
  private _role: string;
  private _publication_count: number = 0;
  private _collection_count: number = 0;
  private _filter: Filter;


  constructor(user: User, filter: Filter) {
    this._id = user.id;
    this._username = user.username;
    this._imageURL = user.imageURL;
    this._role = user.role;
    this._publication_count = 25;
    this._collection_count = 25;
    this._filter = filter;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get imageURL(): string {
    return this._imageURL;
  }

  set imageURL(value: string) {
    this._imageURL = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }

  get publication_count(): number {
    return this._publication_count;
  }

  set publication_count(value: number) {
    this._publication_count = value;
  }

  get collection_count(): number {
    return this._collection_count;
  }

  set collection_count(value: number) {
    this._collection_count = value;
  }


  get filter(): Filter {
    return this._filter;
  }

  set filter(value: Filter) {
    this._filter = value;
  }
}
