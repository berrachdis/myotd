import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ActionSheetController, IonSlides, NavController} from "@ionic/angular";

import {CollectionService} from "../../core/services/collection/collection.service";
import {CategoryService} from "../../core/services/category/category.service";

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
  private filter: Filter;
  private selectedPin: Pin;
  private collections: Collection[];
  private categories: Category[];
  private user: User;
  private segments: Array<string> = ['Publication', 'Collection'];
  private selectedSegment: string;
  private slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  @ViewChild('slides')
  private slides: IonSlides;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private actionSheetController: ActionSheetController,
              private navController: NavController,
              private collectionService: CollectionService,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.initSegments();
    this.initFilters();
    this.initAccountData();
    this.initCategoriesPin();
    this.initCategories();
    this.initCollections();
  }

  private initSegments(): void {
    this.selectedSegment = this.segments[0];
  }

  private initFilters(): void {
    this.route.data
      .subscribe(
        (data: { filter: Filter }) => this.filter = data.filter,
        error => console.error(error)
      );
  }

  private initAccountData(): void {
    this.route.data
      .subscribe(
        (data: { account: User }) => this.user = data.account,
        error => console.error(error)
      );
  }

  private initCategoriesPin(): void {
    this.pin = this.filter.categoryPin;
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
        data => this.collections = data,
        error => console.error(error)
      );
  }

  private initCollectionsPin(): void {
    this.pin = this.filter.collectionPin;
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
        // TODO : Should cache it to avoid many request
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

  // TODO :
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
}
