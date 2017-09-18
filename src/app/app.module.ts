import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderModule } from './shared/layouts/header.module';
import { WelcomeModule } from './welcome/welcome.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './shared/layouts/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'natcreo'}),
    ServerModule,
    ServiceWorkerModule,
    MaterialModule,
    BrowserAnimationsModule,
    // Application Modules
    WelcomeModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
