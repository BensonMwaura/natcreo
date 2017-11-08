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

import { environment } from '../../environments/environment';


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
  declarations: []
})
export class CoreModule { }
