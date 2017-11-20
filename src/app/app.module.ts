import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Application Components
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServerModule } from '@angular/platform-server';
import { ServiceWorkerModule } from '@angular/service-worker';

// Application Modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'natcreo'}),
    BrowserAnimationsModule,
    ServerModule,
    ServiceWorkerModule,
    // Application Modules
    CoreModule,
    SharedModule,
    // LayoutsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
