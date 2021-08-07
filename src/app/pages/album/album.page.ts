import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IonInfiniteScroll, IonVirtualScroll} from "@ionic/angular";
import {map, switchMap} from "rxjs/operators";
import {Observable} from "rxjs";

import {AlbumService} from "../../core/services/album/album.service";

import {Album} from "../../core/models/Album";
import {Category} from "../../core/models/Category";
import {Image} from "../../core/models/Image";

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {
  private category: Category = new Category();
  private album: Album;
  private images: Image[] = new Array<Image>();

  @ViewChild(IonInfiniteScroll) private infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;

  constructor(private activatedRoute: ActivatedRoute,
              private albumService: AlbumService) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        map(params => this.initCategory(params['categoryId'], params['categoryTitle'])),
        switchMap(() => this.activatedRoute.data)
      )
      .subscribe(
        (data: { album: Album }) => data.album.images.forEach(image => this.images.push(image)),
        error => console.error(error),
        () => console.log(this.album)
      );
  }

  private initCategory(categoryId: string, categoryTitle: string): void {
    this.category.id = categoryId;
    this.category.title = categoryTitle;
  }

  private getAlbums(): Observable<Album> {
    return this.albumService.getAlbums(this.category.id)
  }

  private loadData(event): void {
    setTimeout(() => {
      this.getAlbums()
        .subscribe(
          album => {
            album.images.forEach(image => this.images.push(image));
            this.virtualScroll.checkEnd();
            event.target.complete();
            if (this.images.length >= 100) {
              event.target.disabled = true;
            }
          },
          error => console.error(error),
          () => console.info("Images loaded"));
    }, 500);
  }
}
