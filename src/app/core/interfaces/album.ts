import {Image} from "./image";

export interface Album {
  id: string;
  categoryId: string;
  userId: string;
  images: Image[];
}
