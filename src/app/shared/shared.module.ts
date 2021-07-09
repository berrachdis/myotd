import { NgModule } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

import {ImageComponent} from "./components/image/image.component";
import {PinComponent} from "./components/pin/pin.component";
import {PinFilterPipe} from "./pipes/pin-filter.pipe";



@NgModule({
  declarations: [ImageComponent, PinComponent, PinFilterPipe],
  exports: [IonicModule, CommonModule, FormsModule, ImageComponent, PinComponent, PinFilterPipe],
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SharedModule { }
