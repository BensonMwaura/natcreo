import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdTabsModule, MdIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdTabsModule,
    MdIconModule,
    FlexLayoutModule,
  ],
  declarations: [],
  exports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdTabsModule,
    MdIconModule,
    FlexLayoutModule,
  ]
})
export class SharedModule { }
