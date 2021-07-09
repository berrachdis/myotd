import { Pipe, PipeTransform } from '@angular/core';

import {Category} from "../../core/models/category";
import {Pin} from "../../core/models/pin";

@Pipe({
  name: 'pinFilter'
})
export class PinFilterPipe implements PipeTransform {

  transform(value: Category[], pin: Pin): Category[] {
    if (value == null || pin == null || pin.name == 'ALL') {
      return value;
    }
    return value.filter(item => item.type.toString() == pin.name.toUpperCase());
  }
}
