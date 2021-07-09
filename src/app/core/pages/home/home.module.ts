import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {PinComponent} from "../../../shared/components/pin/pin.component";
import {ImageComponent} from "../../../shared/components/image/image.component";
import {PinFilterPipe} from "../../../shared/pipes/pin-filter.pipe";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, PinComponent, ImageComponent, PinFilterPipe]
})
export class HomePageModule {}
