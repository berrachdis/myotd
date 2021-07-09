import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {AlbumService} from "../../services/album/album.service";

import {Album} from "../../models/album";

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {
  private albums: Album[];

  constructor(private activatedRoute: ActivatedRoute,
              private albumService: AlbumService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        params => this.initAlbums(params ['categoryId']),
        error => console.error(error)
      );
  }

  private initAlbums(categoryId: string): void {
    this.albumService.getAlbums(categoryId)
      .subscribe(
        data => this.albums = data,
        error => console.error(error)
      );
  }
}
