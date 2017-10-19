import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { HeroComponent } from './hero/hero.component';
import { SnippetComponent } from './snippet/snippet.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AboutComponent, HeroComponent, SnippetComponent]
})
export class AboutModule { }
