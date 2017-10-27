import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AboutRoutingModule
  ],
  declarations: [AboutComponent, CarouselBasicComponent]
})
export class AboutModule { }
