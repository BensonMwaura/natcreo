import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
// import { AboutRoutingModule } from './about-routing.module';

import { AboutComponent } from './about.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { StockFeaturesComponent } from './stock-features/stock-features.component';
import { StockProductsComponent } from './stock-products/stock-products.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    // AboutRoutingModule
  ],
  declarations: [AboutComponent, ShowcaseComponent, TermsOfUseComponent, PrivacyComponent, StockFeaturesComponent, StockProductsComponent]
})
export class AboutModule { }
