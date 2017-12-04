import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';

import { PreferencesRoutingModule } from './preferences-routing.module';
import { PreferencesComponent } from './preferences.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    PreferencesRoutingModule
  ],
  declarations: [PreferencesComponent]
})
export class PreferencesModule { }
