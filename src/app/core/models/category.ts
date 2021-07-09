import {CategoryEnum} from "./categoryEnum";

export interface Category {
  id: string;
  title: string;
  type: CategoryEnum;
  imageURL: string;
}
