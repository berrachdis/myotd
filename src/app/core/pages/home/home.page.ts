import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IonSlides, NavController} from "@ionic/angular";

import {CollectionService} from "../../services/collection/collection.service";
import {CategoryService} from "../../services/category/category.service";

import {Pin} from "../../models/pin";
import {Collection} from "../../models/collection";
import {Category} from "../../models/category";
import {User} from "../../models/user";

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
              private navController: NavController,
              private collectionService: CollectionService,
              private categoryService: CategoryService) {}

  ngOnInit() {
    this.initSegments();
    this.initAccountData();
    this.initCategoriesPin();
    this.initCategories();
    this.initCollections();
  }

  private initSegments(): void {
    this.selectedSegment = this.segments[0];
  }

  private initAccountData(): void {
    this.route.data
      .subscribe(
        (data: {account: User}) => this.user = data.account,
        error => console.error(error)
      );
  }

  private initCategoriesPin(): void {
    this.pin = this.user.categoryPin;
  }

  private initCategories() : void {
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
    this.pin = this.user.collectionPin;
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
          this.initCollectionsPin();
        }
      });
  }

  private navigateTo(route: string, params: string): void {
    this.router.navigate([route, params]);
  }
}
