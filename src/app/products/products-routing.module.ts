import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';

const PRODUCTROUTES: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(PRODUCTROUTES)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
