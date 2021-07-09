import {Component, Input, OnInit} from '@angular/core';

import {Collection} from "../../../core/interfaces/collection";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input('collection')
  collection: Collection;

  constructor() { }

  ngOnInit() {
  }
}
