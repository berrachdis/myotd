import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IonSlides} from "@ionic/angular";

import {Pin, PinService} from "../../service/pin/pin.service";
import {Collection, CollectionService} from "../../service/collection/collection.service";
import {Category, CategoryService} from "../../service/category/category.service";
import {AccountService, Data, User} from "../../service/account/account.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  private pin : Pin;
  private selectedPin : Pin;
  private collections:Collection[];
  private categories: Category[];
  private data: Data;
  private segments: Array<string> = ['Publication', 'Collection'];
  private selectedSegment: string;
  private slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  @ViewChild('slides')
  private slides: IonSlides;

  constructor(private route: ActivatedRoute,
              private collectionService: CollectionService,
              private pinService: PinService,
              private categoryService: CategoryService,
              private accountService: AccountService) {}

  ngOnInit() {
    this.initCategoriesPin();
    this.initCollections();
    this.initSegments();
    this.initCategories();
    this.initAccountData();
  }

  private initCollections(): void {
    this.collectionService.getCollections()
      .subscribe(
        data => this.collections = data,
        error => console.error(error)
      );
  }

  private initCategoriesPin(): void {
    this.route.data
      .subscribe(
        (data: {pin: Pin}) => this.pin = data.pin,
        error => console.error(error)
      );
  }

  private initCollectionPin(): void {
    this.pinService.getCollectionsFilter()
      .subscribe(
        data => this.pin = data,
        error => console.error(error)
      );
  }

  private initSegments(): void {
    this.selectedSegment = this.segments[0];
  }

  private initCategories() : void {
    this.categoryService.getCategories()
      .subscribe(
        data => this.categories = data,
        error => console.error(error)
      );
  }

  private initAccountData(): void {
    this.accountService.getAccountData()
      .subscribe(
      (data) => this.data = data,
      error => console.error(error)
    );
  }

  private onSelectPin(event : Pin): void {
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
        }
        else if (segment == this.segments[1]) {
          this.initCollectionPin();
        }
      });
  }
}
