import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreferencesComponent } from './preferences.component';

const PREFERENCESROUTES: Routes = [
  { path: '', redirectTo: '/preferences', pathMatch: 'full' },
  { path: 'preferences', component: PreferencesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(PREFERENCESROUTES)],
  exports: [RouterModule]
})
export class PreferencesRoutingModule { }
