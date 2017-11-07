import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [TopNavComponent],
  exports: [
    TopNavComponent
  ]
})
export class LayoutsModule { }
