export class User {
  private _id: string;
  private _username: string;
  private _imageURL: string;
  private _role: string;
  private _publication_count: string;
  private _collection_count: string;

  constructor() {
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

  get publication_count(): string {
    return this._publication_count;
  }

  set publication_count(value: string) {
    this._publication_count = value;
  }

  get collection_count(): string {
    return this._collection_count;
  }

  set collection_count(value: string) {
    this._collection_count = value;
  }
}
