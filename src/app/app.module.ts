import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServerModule } from '@angular/platform-server';
import { ServiceWorkerModule } from '@angular/service-worker';

// Application Modules
import { CoreModule } from './core/core.module';
import { LayoutsModule } from './layouts/layouts.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

// Application Components
import { AppComponent } from './app.component';

// Application Services
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'natcreo'}),
    ServerModule,
    ServiceWorkerModule,
    NgbModule.forRoot(),
    // Application Modules
    CoreModule,
    LayoutsModule,
    SharedModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
