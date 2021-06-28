import {Component, OnInit, ViewChild} from '@angular/core';
import {Pin} from "../../service/pin/pin.service";
import {ActivatedRoute} from "@angular/router";
import {Collection, CollectionService} from "../../service/collection/collection.service";
import {IonSlides} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  private pin: Pin;
  private collections:Collection[][];
  private segments: Array<string> = ['Publication', 'Collection'];
  private selectedSegment: string;
  private slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  @ViewChild('slides')
  private slides: IonSlides;

  constructor(private route: ActivatedRoute, private collectionService: CollectionService) {}

  ngOnInit() {
    this.initPins();
    this.initCollections();
    this.initSegments();
  }

  initCollections(): void {
    this.collectionService.getCollections()
      .subscribe(
        data => this.collections = data,
        error => console.error(error)
      );
  }

  private initPins(): void {
    this.route.data
      .subscribe((data: {pin: Pin}) => this.pin = data.pin)
  }

  private initSegments(): void {
    this.selectedSegment = this.segments[0];
  }

  private onSelectPin(event:Pin): void {
    console.log(event);
  }

  private onSelectSegment(index: number): void {
    this.slides.slideTo(index).then();
  }

  private onChangeSlide(): void {
    this.slides.getActiveIndex().then(index => this.selectedSegment = this.segments[index]);
  }
}
