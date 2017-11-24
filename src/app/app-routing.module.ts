import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'products', loadChildren: './products/products.module#ProductsModule' },
  { path: 'features', loadChildren: './features/features.module#FeaturesModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'preferences', loadChildren: './preferences/preferences.module#PreferencesModule' },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
