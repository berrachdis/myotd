import {Component, Input, OnInit} from '@angular/core';
import {Collection} from "../../service/collection/collection.service";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input('collections')
  collections: Collection[];

  constructor() { }

  ngOnInit() {
  }
}
