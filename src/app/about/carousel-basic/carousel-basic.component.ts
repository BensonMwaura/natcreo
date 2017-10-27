import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngb-carousel',
  templateUrl: './carousel-basic.component.html',
  styleUrls: ['./carousel-basic.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CarouselBasicComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    // customize default values carousels used by this component tree
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = true;
  }

  ngOnInit() {
  }

}
