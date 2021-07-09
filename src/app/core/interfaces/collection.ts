import {Image} from "./image";
import {SeasonEnum} from "./seasonEnum";
import {StyleEnum} from "./styleEnum";

export interface Collection {
  id: string;
  userId: string;
  images: Image[];
  season?: SeasonEnum;
  style?: StyleEnum;
  color?: string;
}
