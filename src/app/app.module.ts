import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ServerModule } from '@angular/platform-server';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdlModule } from '@angular-mdl/core';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

// App Component
import { AppComponent } from './app.component';

// Application Modules
import { WelcomeModule } from './welcome/welcome.module';

// Application Components
import { LayoutsComponent } from './layouts/layouts.component';

const SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  pagination: true,
  nextButton: true,
  prevButton: true,
  keyboardControl: true
};


@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'natcreo'}),
    FormsModule,
    HttpModule,
    ServerModule,
    ServiceWorkerModule,
    BrowserAnimationsModule,
    MdlModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    FlexLayoutModule,
    SwiperModule.forRoot(SWIPER_CONFIG),
    // Application Modules
    WelcomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
