import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IonSlides, NavController} from "@ionic/angular";

import {CollectionService} from "../../core/services/collection/collection.service";
import {CategoryService} from "../../core/services/category/category.service";

import {Pin} from "../../core/interfaces/pin";
import {Collection} from "../../core/interfaces/collection";
import {Category} from "../../core/interfaces/category";
import {User} from "../../core/interfaces/user";
import {Filter} from "../../core/interfaces/filter";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  private pin : Pin;
  private filter: Filter;
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
        (data: {filter: Filter}) => this.filter = data.filter,
        error => console.error(error)
      );
  }

  private initAccountData(): void {
    this.route.data
      .subscribe(
        (data: {account: User}) => this.user = data.account,
        error => console.error(error)
      );
  }

  private initCategoriesPin(): void {
    this.pin = this.filter.categoryPin;
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
    this.pin = this.filter.collectionPin;
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
