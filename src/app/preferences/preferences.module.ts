import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';

import { PreferencesRoutingModule } from './preferences-routing.module';
import { PreferencesComponent } from './preferences.component';
import { UserProfileComponent } from './../core/components/user-profile/user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    // CoreModule,
    SharedModule,
    PreferencesRoutingModule
  ],
  declarations: [PreferencesComponent, UserProfileComponent]
})
export class PreferencesModule { }
