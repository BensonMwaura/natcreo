import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* import { StoreModule } from '@ngrx/store';
import { productsReducer } from './products.reducer'; */

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
    /*StoreModule.forFeature('products', productsReducer) */
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
