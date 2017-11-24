import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeaturesComponent } from './features.component';

const FEATURESROUTES: Routes = [
  { path: '', redirectTo: '/features', pathMatch: 'full' },
  { path: 'features', component: FeaturesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(FEATURESROUTES)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
