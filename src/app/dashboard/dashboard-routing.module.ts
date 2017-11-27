import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const DASHBOARDROUTES: Routes = [
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(DASHBOARDROUTES)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
