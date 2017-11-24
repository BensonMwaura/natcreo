import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

const ABOUTROUTES: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ABOUTROUTES)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
