import {Pin} from "./pin";

export interface User {
  id: string;
  username: string;
  imageURL: string;
  role: string;
  categoryPin: Pin;
  collectionPin: Pin;
}
