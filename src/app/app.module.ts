import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WelcomeModule } from './welcome/welcome.module';
import { HeaderModule } from './shared/layouts/header.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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
