import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServerModule } from '@angular/platform-server';
import { ServiceWorkerModule } from '@angular/service-worker';

// Application Modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
// import { LayoutsModule } from './layouts/layouts.module';
import { AppRoutingModule } from './app-routing.module';

// Application Components
import { AppComponent } from './app.component';

// Application Services

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'natcreo'}),
    ServerModule,
    ServiceWorkerModule,
    NgbModule.forRoot(),
    // Application Modules
    CoreModule,
    SharedModule,
    // LayoutsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
