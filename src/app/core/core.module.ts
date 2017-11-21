import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from '../shared/shared.module';
import { AboutModule } from './../about/about.module';
import { FeaturesModule } from './../features/features.module';
import { NotFoundModule } from './../not-found/not-found.module';
import { Routes, Router, RouterModule } from '@angular/router';

import { environment } from '../../environments/environment';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { FooterComponent } from './components/footer/footer.component';

import { SeoService } from './services/seo.service';
import { AuthService } from './auth/auth.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

export const firebaseConfig = environment.firebaseConfig;
@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    SharedModule,
    AboutModule,
    FeaturesModule,
    NotFoundModule
  ],
  declarations: [MainNavComponent, FooterComponent, UserProfileComponent],
  exports: [MainNavComponent, FooterComponent, UserProfileComponent],
  providers: [SeoService, AuthService]
})
export class CoreModule { }
