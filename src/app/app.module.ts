import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ServerModule } from '@angular/platform-server';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFireModule } from 'angularfire2/public_api';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdlModule } from '@angular-mdl/core';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { environment } from './../environments/environment';

// App Component
import { AppComponent } from './app.component';

// Application Modules
import { CoreModule } from './core/core.module';
import { WelcomeModule } from './welcome/welcome.module';

// Application Components
import { LayoutsComponent } from './layouts/layouts.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'natcreo'}),
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    ServerModule,
    ServiceWorkerModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MdlModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    FlexLayoutModule,
    // Application Modules
    CoreModule,
    WelcomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
