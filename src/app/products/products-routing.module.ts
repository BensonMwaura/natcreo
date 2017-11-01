import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const PRODUCTROUTES: Routes = [
  { path: '', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(PRODUCTROUTES)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
