import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'products', loadChildren: './products/products.module#ProductsModule' },
  { path: 'features', loadChildren: './features/features.module#FeaturesModule' },
  { path: '**', loadChildren: './not-found/not-found.module#NotFoundModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
