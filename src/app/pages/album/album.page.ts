import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {AlbumService} from "../../core/services/album/album.service";

import {Album} from "../../core/models/Album";
import {Category} from "../../core/models/Category";

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {
  private category: Category = new Category();
  private albums: Album[];

  constructor(private activatedRoute: ActivatedRoute,
              private albumService: AlbumService) { }

  ngOnInit() {
    this.initCategory();
  }

  private initCategory(): void {
    this.activatedRoute.params
      .subscribe(
        params => {
          this.category.id = params ['categoryId'];
          this.category.title = params ['categoryTitle'];
          this.initAlbums();
        },
        error => console.error(error)
      );
  }

  private initAlbums(): void {
    this.albumService.getAlbums(this.category.id)
      .subscribe(
        data => this.albums = data,
        error => console.error(error)
      );
  }
}
