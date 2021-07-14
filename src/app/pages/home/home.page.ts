import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ActionSheetController, IonInfiniteScroll, IonSlides, IonVirtualScroll} from "@ionic/angular";

import {map} from "rxjs/operators";

import {CollectionService} from "../../core/services/collection/collection.service";
import {CategoryService} from "../../core/services/category/category.service";
import {AlbumService} from "../../core/services/album/album.service";

import {Pin} from "../../core/models/Pin";
import {Collection} from "../../core/models/Collection";
import {User} from "../../core/models/User";
import {Filter} from "../../core/models/Filter";
import {Category} from "../../core/models/Category";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private pin: Pin;
  private selectedPin: Pin;
  private collections: Collection[] = new Array<Collection>();
  private categories: Category[] = new Array<Category>();
  private user: User;
  private segments: Array<string> = ['Publication', 'Collection'];
  private selectedSegment: string;
  private slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  @ViewChild('slides') private slides: IonSlides;
  @ViewChild(IonInfiniteScroll) private infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private actionSheetController: ActionSheetController,
              private collectionService: CollectionService,
              private albumService: AlbumService,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.route.data
      .pipe(
        map((data: { account: User, filter: Filter }) => this.initAccountData(data.account, data.filter)),
        map(() => this.initSegments()),
        map(() => this.initCollectionsCount()),
        map(() => this.initPublicationsCount()),
        map(() => this.initCategoriesPin()),
        map(() => this.initCategories()),
        map(() => this.initCollections())
      )
      .subscribe(data => console.info("Init Done"), error => console.error(error));
  }

  private initSegments(): void {
    this.selectedSegment = this.segments[0];
  }

  private initAccountData(user: User, filter: Filter): void {
    this.user = new User(user, filter);
  }

  private initCategories(): void {
    this.categoryService.getCategories()
      .subscribe(
        data => this.categories = data,
        error => console.error(error)
      );
  }

  private initCollections(): void {
    this.collectionService.getCollections()
      .subscribe(
        data => data.forEach(item => this.collections.push(item)),
        error => console.error(error)
      );
  }

  private initCollectionsCount(): void {
    this.collectionService.getCollectionsCount(this.user.id)
      .subscribe(
        data => this.user.collection_count = data,
        error => console.error(error)
      );
  }

  private initPublicationsCount(): void {
    this.albumService.getPublicationsCount(this.user.id)
      .subscribe(
        data => this.user.publication_count = data,
        error => console.error(error)
      );
  }

  private initCollectionsPin(): void {
    this.pin = this.user.filter.collectionPin;
  }

  private initCategoriesPin(): void {
    this.pin = this.user.filter.categoryPin;
  }

  private onSelectPin(event: Pin): void {
    this.selectedPin = event;
  }

  private onSelectSegment(index: number): void {
    this.slides.slideTo(index).then(() => this.selectedPin = null);
  }

  private onChangeSlide(): void {
    this.slides.getActiveIndex()
      .then(index => this.segments[index])
      .then(segment => this.selectedSegment = segment)
      .then(segment => {
        if (segment == this.segments[0]) {
          this.initCategoriesPin();
        } else if (segment == this.segments[1]) {
          this.initCollectionsPin();
        }
      });
  }

  private navigateTo(route: string, param_1: string, param_2: string): void {
    this.router.navigate([route, param_1, param_2]);
  }

  async showSettingActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Update profile',
          handler: () => {
            console.log('Update profile clicked');
          }
        }, {
          text: 'Change password',
          handler: () => {
            console.log('Change password clicked');
          }
        }, {
          text: 'Logout',
          handler: () => {
            console.log('Logout clicked');
          }
        }, {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();
  }

  private loadData(event): void {
    setTimeout(() => {
      this.collectionService.getCollections()
        .subscribe(
          data => {
            data.forEach(item => this.collections.push(item));
            event.target.complete();
            this.virtualScroll.checkEnd();
            if (this.collections.length >= 100) {
              console.log("collections done")
              event.target.disabled = true;
            }
          },
          error => console.error(error)
        );
    }, 1000);
  }
}
